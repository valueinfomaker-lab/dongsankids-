import Image from "next/image";
import { Metadata } from "next";
import { facilitiesIntro, facilities } from "@/data/facilities";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "교육환경",
  description:
    "동산유치원의 교육환경을 소개합니다. 안전하고 쾌적한 교실, 실내 놀이공간, 위생적인 조리실을 갖추고 있습니다.",
};

export default function FacilitiesPage() {
  return (
    <div>
      {/* 페이지 헤더 */}
      <section className="bg-gradient-to-br from-[#EBF5FF] to-[#FFF8EB] py-16 px-4 text-center">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-[#1E293B] mb-3">
          교육환경
        </h1>
        <p className="text-[#64748B] text-lg max-w-md mx-auto">
          안전하고 쾌적한 공간에서 마음껏 꿈을 키웁니다
        </p>
      </section>

      {/* 시설 소개 */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="flex-shrink-0 w-full md:w-96">
              <div className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={facilitiesIntro.image}
                  alt="동산유치원 전경"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 384px"
                />
              </div>
            </div>
            <div>
              <div className="inline-block bg-[#EBF5FF] text-[#4A9EE0] text-sm font-medium px-3 py-1 rounded-full mb-4">
                시설 소개
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-[#1E293B] mb-5 leading-snug">
                {facilitiesIntro.title}
              </h2>
              <div className="space-y-3">
                {facilitiesIntro.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-[#64748B] leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 공간별 소개 */}
      <section className="py-16 px-4 bg-[#FAFBFF]">
        <div className="max-w-4xl mx-auto space-y-6">
          {facilities.map((facility) => (
            <div
              key={facility.id}
              className="bg-white border border-[#E2E8F0] rounded-3xl p-8 md:p-10"
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
                  style={{ backgroundColor: `${facility.color}15` }}
                >
                  {facility.emoji}
                </div>
                <div>
                  <h2
                    className="font-display text-xl md:text-2xl font-bold"
                    style={{ color: facility.color }}
                  >
                    {facility.title}
                  </h2>
                  {facility.headline && (
                    <p className="font-bold text-[#1E293B] mt-0.5">
                      {facility.headline}
                    </p>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                {facility.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-[#64748B] leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-[#F0F5FF] text-center">
        <p className="text-[#64748B] mb-4 text-lg">
          직접 방문하셔서 아이들이 생활할 공간을 둘러보세요
        </p>
        <a
          href={siteConfig.phoneHref}
          className="inline-block bg-[#F47B5A] hover:bg-[#e5633f] text-white font-bold px-8 py-4 rounded-full text-lg shadow-md transition-all duration-200 hover:-translate-y-0.5"
        >
          방문 상담 신청하기 →
        </a>
      </section>
    </div>
  );
}
