import { put, del, list } from "@vercel/blob";
import type { InquiryInput } from "@/lib/validation/inquiry";

export interface InquiryItem extends InquiryInput {
  id: string;
  createdAt: string;
  read: boolean;
}

// 주의: Vercel Blob은 public 액세스만 지원한다. 학부모 이름/연락처가 담기므로
// addRandomSuffix로 추측 불가능한 URL을 쓰고, 쓰기마다 이전 blob을 삭제해
// URL을 회전시킨다. 완전한 비공개가 필요하면 DB 도입이 필요하다.
const METADATA_PREFIX = "inquiries/metadata";

export function isInquiryStoreConfigured(): boolean {
  // 구형(토큰) 연결 또는 신형(스토어 ID + OIDC) 연결 모두 지원
  return !!(process.env.BLOB_READ_WRITE_TOKEN || process.env.BLOB_STORE_ID);
}

export async function readInquiries(): Promise<InquiryItem[]> {
  if (!isInquiryStoreConfigured()) return [];

  try {
    const { blobs } = await list({ prefix: METADATA_PREFIX });
    if (blobs.length === 0) return [];

    const newest = [...blobs].sort(
      (a, b) => b.uploadedAt.getTime() - a.uploadedAt.getTime()
    )[0];
    // 캐시버스터: CDN 캐시를 우회해 항상 최신을 읽는다
    const res = await fetch(`${newest.url}?ts=${Date.now()}`, { cache: "no-store" });
    if (!res.ok) return [];

    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

async function writeInquiries(items: InquiryItem[]): Promise<void> {
  const { blobs: previous } = await list({ prefix: METADATA_PREFIX });

  await put(`${METADATA_PREFIX}.json`, JSON.stringify(items, null, 2), {
    access: "public",
    addRandomSuffix: true,
    contentType: "application/json",
    cacheControlMaxAge: 0,
  });

  // 이전 메타데이터 blob 삭제 (URL 회전)
  await Promise.all(
    previous.map((b) => del(b.url).catch(() => undefined))
  );
}

export async function addInquiry(input: InquiryInput): Promise<InquiryItem> {
  const item: InquiryItem = {
    ...input,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    read: false,
  };

  const items = await readInquiries();
  await writeInquiries([item, ...items]);
  return item;
}

export async function updateInquiryRead(
  id: string,
  read: boolean
): Promise<boolean> {
  const items = await readInquiries();
  if (!items.some((i) => i.id === id)) return false;

  const updated = items.map((i) => (i.id === id ? { ...i, read } : i));
  await writeInquiries(updated);
  return true;
}

export async function deleteInquiry(id: string): Promise<boolean> {
  const items = await readInquiries();
  if (!items.some((i) => i.id === id)) return false;

  await writeInquiries(items.filter((i) => i.id !== id));
  return true;
}
