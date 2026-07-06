import { put, del, list } from "@vercel/blob";
import type { NoticeInput } from "@/lib/validation/notice";

export interface NoticeItem extends NoticeInput {
  id: string;
  createdAt: string;
  updatedAt: string;
}

// 고정 키 덮어쓰기는 CDN 캐시(최대 60초, 쿼리 무시)로 낡은 읽기가 발생하므로
// 쓰기마다 랜덤 suffix로 새 URL을 만들고 이전 blob을 삭제한다.
// read-modify-write 경합은 last-write-wins — 관리자 1명 규모에서 수용.
const METADATA_PREFIX = "notices/metadata";

function isBlobConfigured(): boolean {
  // 구형(토큰) 연결 또는 신형(스토어 ID + OIDC) 연결 모두 지원
  return !!(process.env.BLOB_READ_WRITE_TOKEN || process.env.BLOB_STORE_ID);
}

export async function readNotices(): Promise<NoticeItem[]> {
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

// 고정 우선 + 날짜 내림차순
export function sortNotices(items: NoticeItem[]): NoticeItem[] {
  return [...items].sort((a, b) => {
    if (a.pinned !== b.pinned) return a.pinned ? -1 : 1;
    return b.date.localeCompare(a.date) || b.createdAt.localeCompare(a.createdAt);
  });
}

async function writeNotices(items: NoticeItem[]): Promise<void> {
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

export async function createNotice(input: NoticeInput): Promise<NoticeItem> {
  const now = new Date().toISOString();
  const item: NoticeItem = {
    ...input,
    id: crypto.randomUUID(),
    createdAt: now,
    updatedAt: now,
  };

  const items = await readNotices();
  await writeNotices([item, ...items]);
  return item;
}

export async function updateNotice(
  id: string,
  input: NoticeInput
): Promise<NoticeItem | null> {
  const items = await readNotices();
  const existing = items.find((i) => i.id === id);
  if (!existing) return null;

  const updated: NoticeItem = {
    ...existing,
    ...input,
    updatedAt: new Date().toISOString(),
  };
  await writeNotices(items.map((i) => (i.id === id ? updated : i)));
  return updated;
}

export async function deleteNotice(id: string): Promise<boolean> {
  const items = await readNotices();
  if (!items.some((i) => i.id === id)) return false;

  await writeNotices(items.filter((i) => i.id !== id));
  return true;
}
