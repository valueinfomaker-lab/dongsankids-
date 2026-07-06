import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { programs } from "@/data/curriculum";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "교육과정",
  description: "동산유치원의 5가지 교육과정: 자연생태교육, 놀이프로젝트, 인성교육, 독서·언어교육, 방과후 특기활동",
};

export default function CurriculumPage() {
  return (
    <div>
      {/* 페이지 헤더 */}
      <section className="bg-gradient-to-br from-[#F0FFF4] to-[#EBF5FF] py-16 px-4 text-center">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-[#1E293B] mb-3">
          교육과정
        </h1>
        <p className="text-[#64748B] text-lg max-w-md mx-auto">
          아이가 묻고, 탐구하고, 스스로 배웁니다
        </p>
      </section>

      {/* 교육 프로그램 */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto space-y-8">
          {programs.map((program, index) => (
            <div
              key={program.id}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 items-center bg-[#FAFBFF] rounded-3xl p-6 md:p-10 border border-[#E2E8F0]`}
            >
              {/* 이미지 영역 */}
              <div className="relative flex-shrink-0 w-full md:w-72 h-48 md:h-56 rounded-2xl overflow-hidden"
                style={{ backgroundColor: `${program.color}15` }}>
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 288px"
                />
              </div>

              {/* 텍스트 */}
              <div className="flex-1">
                <div
                  className="inline-block text-sm font-medium px-3 py-1 rounded-full mb-3"
                  style={{ backgroundColor: `${program.color}20`, color: program.color }}
                >
                  {program.title}
                </div>
                <h2 className="font-display text-xl md:text-2xl font-bold text-[#1E293B] mb-2">
                  {program.tagline}
                </h2>
                <p className="text-[#64748B] leading-relaxed mb-4 text-sm md:text-base">
                  {program.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {program.activities.map((act) => (
                    <span
                      key={act}
                      className="text-xs font-medium px-3 py-1.5 rounded-full border"
                      style={{
                        borderColor: `${program.color}40`,
                        color: program.color,
                        backgroundColor: `${program.color}10`,
                      }}
                    >
                      {act}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-gradient-to-r from-[#4A9EE0] to-[#2B7BC8] text-center">
        <h2 className="font-display text-xl md:text-2xl font-bold text-white mb-3">
          교육과정이 궁금하신가요?
        </h2>
        <p className="text-white/80 mb-6">
          직접 원을 방문해 보시거나 상담을 신청해 주세요
        </p>
        <a
          href={siteConfig.phoneHref}
          className="inline-block bg-[#F47B5A] hover:bg-[#e5633f] text-white font-bold px-8 py-4 rounded-full text-lg shadow-lg transition-all duration-200 hover:-translate-y-0.5"
        >
          전화 문의하기 →
        </a>
      </section>
    </div>
  );
}
