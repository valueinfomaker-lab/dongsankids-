import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex-1 flex items-center justify-center px-4 py-24">
      <div className="text-center max-w-md">
        <p className="font-display text-6xl text-[#4A9EE0] mb-4">404</p>
        <h1 className="text-xl font-bold text-[#1E293B] mb-2">
          페이지를 찾을 수 없습니다
        </h1>
        <p className="text-sm text-[#64748B] mb-8 break-keep">
          주소가 잘못 입력되었거나, 페이지가 이동 또는 삭제되었을 수 있습니다.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 rounded-full bg-[#4A9EE0] text-white text-sm font-bold hover:bg-[#3B8DD0] transition-colors"
        >
          홈으로 돌아가기
        </Link>
      </div>
    </main>
  );
}
