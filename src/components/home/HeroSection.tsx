import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { siteConfig } from "@/data/site";
import { ScallopDivider } from "@/components/ui/Doodles";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF6F0] via-[#FBF8F2] to-white">
      <div className="relative max-w-6xl mx-auto px-4 pt-8 md:pt-12 pb-24 md:pb-28">
        {/* 크레용 일러스트 (고객 제작) */}
        <div className="max-w-4xl mx-auto mb-8 md:mb-10">
          <Image
            src="/images/hero.webp"
            alt="동산유치원 — 크레용으로 그린 들판에서 원복을 입은 아이 셋이 신나게 뛰노는 그림"
            width={1672}
            height={941}
            className="w-full h-auto hero-blend"
            priority
          />
        </div>

        {/* 카피 + CTA */}
        <div className="text-center">
          <h1 className="font-display text-3xl md:text-4xl xl:text-5xl text-[#1E293B] leading-snug mb-3">
            아이의 <span className="crayon-highlight">오늘이 행복한</span> 유치원
          </h1>
          <p className="font-display text-lg md:text-xl text-[#4A9EE0] mb-5">
            {siteConfig.subSlogan}
          </p>
          <p className="text-[#64748B] leading-relaxed mb-8 max-w-2xl mx-auto">
            {siteConfig.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={siteConfig.phoneHref}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#F47B5A] hover:bg-[#e5633f] text-white font-bold px-8 py-4 rounded-full text-lg shadow-md transition-all duration-200 hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5" />
              입학 상담하기
            </a>
            <Link
              href="/about"
              className="w-full sm:w-auto border-2 border-[#4A9EE0] text-[#4A9EE0] hover:bg-[#4A9EE0] hover:text-white font-medium px-8 py-4 rounded-full text-lg transition-all duration-200"
            >
              유치원 둘러보기
            </Link>
          </div>
        </div>
      </div>

      {/* 색종이 스캘럽 경계 */}
      <ScallopDivider className="absolute bottom-0 left-0 w-full h-8" fill="#FAFBFC" />
    </section>
  );
}
