import Link from "next/link";

export default function AdmissionBanner() {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-[#4A9EE0] to-[#2B7BC8]">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-white/20 text-white text-sm px-4 py-1.5 rounded-full mb-5">
          <span className="w-2 h-2 rounded-full bg-[#FFD34E] animate-pulse" />
          2026학년도 신입원아 모집 중
        </div>
        <h2 className="font-display text-2xl md:text-4xl font-bold text-white mb-4">
          입학 상담을 시작해보세요
        </h2>
        <p className="text-white/80 text-base md:text-lg mb-8 leading-relaxed">
          아이의 나이와 궁금한 점을 말씀해 주시면
          <br className="hidden sm:block" />
          친절하게 안내드립니다.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="tel:02-866-6571"
            className="w-full sm:w-auto bg-[#F47B5A] hover:bg-[#e5633f] text-white font-bold px-8 py-4 rounded-full text-lg shadow-lg transition-all duration-200 hover:-translate-y-0.5"
          >
            전화 문의하기 →
          </a>
          <Link
            href="/admission"
            className="w-full sm:w-auto bg-white/20 hover:bg-white/30 text-white font-medium px-8 py-4 rounded-full text-lg transition-all duration-200"
          >
            입학안내 보기
          </Link>
        </div>
      </div>
    </section>
  );
}
