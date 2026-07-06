// 인메모리 rate limiter.
// Vercel Fluid Compute는 인스턴스를 재사용하므로 부분적으로 유효하지만,
// 인스턴스가 여러 개면 각자 별도 카운터를 가진다 (best-effort, 이 규모에서 수용).
interface RateLimitEntry {
  count: number;
  resetAt: number;
}

const store = new Map<string, RateLimitEntry>();

export interface RateLimitResult {
  allowed: boolean;
  retryAfterSec: number;
}

export function checkRateLimit(
  key: string,
  limit: number,
  windowMs: number
): RateLimitResult {
  const now = Date.now();

  // 만료된 엔트리 정리 (접근 시점 pruning)
  for (const [k, entry] of store) {
    if (entry.resetAt <= now) store.delete(k);
  }

  const existing = store.get(key);
  if (!existing || existing.resetAt <= now) {
    return { allowed: true, retryAfterSec: 0 };
  }

  if (existing.count >= limit) {
    return {
      allowed: false,
      retryAfterSec: Math.ceil((existing.resetAt - now) / 1000),
    };
  }

  return { allowed: true, retryAfterSec: 0 };
}

export function recordAttempt(key: string, windowMs: number): void {
  const now = Date.now();
  const existing = store.get(key);

  if (!existing || existing.resetAt <= now) {
    store.set(key, { count: 1, resetAt: now + windowMs });
    return;
  }

  store.set(key, { ...existing, count: existing.count + 1 });
}

export function clientIpFrom(headers: Headers): string {
  const forwarded = headers.get("x-forwarded-for");
  if (!forwarded) return "unknown";
  return forwarded.split(",")[0].trim() || "unknown";
}
