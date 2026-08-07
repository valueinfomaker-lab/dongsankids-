"use client";

import Link from "next/link";

// 오류 상세(스택, 버전 정보 등)는 노출하지 않고 안내 문구만 출력한다
export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <main className="flex-1 flex items-center justify-center px-4 py-24">
      <div className="text-center max-w-md">
        <p className="font-display text-6xl text-[#4A9EE0] mb-4">앗!</p>
        <h1 className="text-xl font-bold text-[#1E293B] mb-2">
          일시적인 오류가 발생했습니다
        </h1>
        <p className="text-sm text-[#64748B] mb-8 break-keep">
          잠시 후 다시 시도해주세요. 문제가 계속되면 유치원으로 문의해주시기 바랍니다.
        </p>
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={reset}
            className="px-6 py-3 rounded-full bg-[#4A9EE0] text-white text-sm font-bold hover:bg-[#3B8DD0] transition-colors"
          >
            다시 시도
          </button>
          <Link
            href="/"
            className="px-6 py-3 rounded-full border border-[#E2E8F0] text-[#374151] text-sm font-bold hover:bg-[#F8FAFC] transition-colors"
          >
            홈으로
          </Link>
        </div>
      </div>
    </main>
  );
}
