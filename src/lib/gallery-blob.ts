import { put, del, list } from "@vercel/blob";

export type GalleryCategory = "교육활동" | "자연체험" | "행사";

export interface GalleryBlobItem {
  id: string;
  src: string;       // Blob URL (업로드된 이미지)
  blobUrl: string;   // Blob URL (삭제용)
  alt: string;
  category: GalleryCategory;
  uploadedAt: string;
}

// 고정 키 덮어쓰기는 CDN 캐시(최대 60초, 쿼리 무시)로 낡은 읽기가 발생하므로
// 쓰기마다 랜덤 suffix로 새 URL을 만들고 이전 blob을 삭제한다 (inquiry-blob과 동일 패턴)
const METADATA_PREFIX = "gallery/metadata";

function isBlobConfigured(): boolean {
  // 구형(토큰) 연결 또는 신형(스토어 ID + OIDC) 연결 모두 지원
  return !!(process.env.BLOB_READ_WRITE_TOKEN || process.env.BLOB_STORE_ID);
}

export async function readMetadata(): Promise<GalleryBlobItem[]> {
  if (!isBlobConfigured()) return [];

  try {
    const { blobs } = await list({ prefix: METADATA_PREFIX });
    if (blobs.length === 0) return [];

    const newest = [...blobs].sort(
      (a, b) => b.uploadedAt.getTime() - a.uploadedAt.getTime()
    )[0];
    const res = await fetch(newest.url, { cache: "no-store" });
    if (!res.ok) return [];

    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

export async function writeMetadata(items: GalleryBlobItem[]): Promise<void> {
  if (!isBlobConfigured()) return;

  const { blobs: previous } = await list({ prefix: METADATA_PREFIX });

  await put(`${METADATA_PREFIX}.json`, JSON.stringify(items, null, 2), {
    access: "public",
    addRandomSuffix: true,
    contentType: "application/json",
    cacheControlMaxAge: 0,
  });

  // 이전 메타데이터 blob 삭제 (새 URL만 남김)
  await Promise.all(previous.map((b) => del(b.url).catch(() => undefined)));
}

export async function uploadImage(
  buffer: ArrayBuffer,
  filename: string,
  contentType: string,
  category: GalleryCategory,
  alt: string
): Promise<GalleryBlobItem> {
  const id = crypto.randomUUID();
  const ext = filename.split(".").pop() ?? "jpg";
  const blob = await put(`gallery/images/${id}.${ext}`, buffer, {
    access: "public",
    contentType,
  });

  const item: GalleryBlobItem = {
    id,
    src: blob.url,
    blobUrl: blob.url,
    alt: alt || category,
    category,
    uploadedAt: new Date().toISOString(),
  };

  const items = await readMetadata();
  items.push(item);
  await writeMetadata(items);

  return item;
}

export async function deleteImage(id: string): Promise<boolean> {
  const items = await readMetadata();
  const item = items.find((i) => i.id === id);
  if (!item) return false;

  try {
    await del(item.blobUrl);
  } catch {
    // 이미 삭제된 경우도 메타데이터에서는 제거
  }

  const updated = items.filter((i) => i.id !== id);
  await writeMetadata(updated);
  return true;
}
