import { put, list } from "@vercel/blob";
import type { NoticeInput } from "@/lib/validation/notice";

export interface NoticeItem extends NoticeInput {
  id: string;
  createdAt: string;
  updatedAt: string;
}

// 공지사항은 공개 콘텐츠이므로 고정 키 사용 (gallery-blob과 동일 패턴).
// read-modify-write 경합은 last-write-wins — 관리자 1명 규모에서 수용.
const METADATA_KEY = "notices/metadata.json";

function isBlobConfigured(): boolean {
  // 구형(토큰) 연결 또는 신형(스토어 ID + OIDC) 연결 모두 지원
  return !!(process.env.BLOB_READ_WRITE_TOKEN || process.env.BLOB_STORE_ID);
}

export async function readNotices(): Promise<NoticeItem[]> {
  if (!isBlobConfigured()) return [];

  try {
    const { blobs } = await list({ prefix: METADATA_KEY });
    if (blobs.length === 0) return [];

    // 캐시버스터: 고정 키 덮어쓰기 후에도 CDN 캐시를 우회해 항상 최신을 읽는다
    const res = await fetch(`${blobs[0].url}?ts=${Date.now()}`, { cache: "no-store" });
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
  await put(METADATA_KEY, JSON.stringify(items, null, 2), {
    access: "public",
    allowOverwrite: true,
    contentType: "application/json",
    cacheControlMaxAge: 0, // 서버가 최소 60초로 클램프하지만 기본 1개월보다 훨씬 짧음
  });
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
