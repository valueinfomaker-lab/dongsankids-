import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { siteConfig } from "@/data/site";
import {
  DoodleSun,
  DoodleCloud,
  DoodleFlower,
  ScallopDivider,
} from "@/components/ui/Doodles";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#EAF4FF] via-[#FDFEFF] to-white">
      {/* 크레용 낙서 장식 */}
      <DoodleCloud className="absolute left-[3%] top-4 w-14 md:top-10 md:w-32 opacity-90 animate-float-slow" />
      <DoodleCloud className="absolute right-[18%] top-6 w-20 opacity-60 animate-float hidden lg:block" />
      <DoodleSun className="absolute right-[4%] top-8 w-24 animate-float hidden md:block" />
      <DoodleFlower className="absolute left-[6%] bottom-16 w-12 md:w-14 hidden md:block" />

      <div className="relative max-w-6xl mx-auto px-4 pt-14 pb-24 md:pt-20 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 카피 */}
          <div className="text-center lg:text-left">
            <h1 className="font-display text-4xl md:text-5xl xl:text-6xl text-[#1E293B] leading-[1.25] mb-4">
              아이의 <span className="crayon-highlight">오늘이 행복한</span>
              <br />
              동산유치원
            </h1>
            <p className="font-display text-xl md:text-2xl text-[#4A9EE0] mb-6">
              {siteConfig.subSlogan}
            </p>
            <p className="text-[#64748B] leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              {siteConfig.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
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

          {/* 사진 — 추후 고객 일러스트로 교체 가능한 슬롯 */}
          <div className="relative max-w-md mx-auto w-full">
            <div className="relative h-80 md:h-[26rem] rounded-t-[10rem] rounded-b-[2rem] overflow-hidden border-[6px] border-white shadow-xl">
              <Image
                src="/images/gallery/ppt2_021.jpg"
                alt="동산유치원 아이들이 즐겁게 노는 모습"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 448px"
                priority
              />
            </div>
            <p className="absolute -bottom-3 left-6 -rotate-2 font-display bg-[#FFD34E] text-[#7A5B10] text-sm px-4 py-1.5 rounded-lg shadow-md">
              오늘도 신나는 동산!
            </p>
          </div>
        </div>
      </div>

      {/* 색종이 스캘럽 경계 */}
      <ScallopDivider className="absolute bottom-0 left-0 w-full h-8" fill="#FAFBFC" />
    </section>
  );
}
