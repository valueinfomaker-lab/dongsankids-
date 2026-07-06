import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* 배경 사진 */}
      <Image
        src="/images/gallery/ppt2_021.jpg"
        alt="동산유치원 아이들이 즐겁게 노는 모습"
        fill
        className="object-cover object-center"
        priority
      />
      {/* 어두운 오버레이 */}
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* 메인 헤드라인 */}
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
          아이가 행복한 곳,
          <br />
          <span className="text-[#FFD34E]">부모가 안심하는 곳</span>
        </h1>

        {/* 서브 텍스트 */}
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl mx-auto leading-relaxed drop-shadow">
          동산유치원은 놀이와 자연 속에서
          <br className="hidden sm:block" />
          아이가 스스로 자랄 수 있도록 돕습니다.
        </p>

        {/* CTA 버튼 */}
        <div className="flex items-center justify-center">
          <Link
            href="/about"
            className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-[#1E293B] font-medium px-8 py-4 rounded-full text-lg transition-all duration-200"
          >
            유치원 알아보기
          </Link>
        </div>
      </div>

      {/* 하단 스크롤 힌트 */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/70">
        <span className="text-xs">아래로 스크롤</span>
        <div className="w-0.5 h-8 bg-gradient-to-b from-white/70 to-transparent animate-bounce" />
      </div>
    </section>
  );
}
