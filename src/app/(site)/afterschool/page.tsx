import Image from "next/image";
import { Metadata } from "next";
import {
  afterschoolIntro,
  afterschoolActivities,
  specialtyIntro,
  specialtyPrograms,
} from "@/data/afterschool";
import { siteConfig } from "@/data/site";
import PageHeader from "@/components/ui/PageHeader";
import SectionNav from "@/components/ui/SectionNav";

export const metadata: Metadata = {
  title: "방과후 과정",
  description:
    "동산유치원 방과후과정 안내. 교육과 돌봄이 함께하는 편안한 시간과 영어, K-POP, 체육, 도예, 오감퍼포먼스, 블록 특성화 프로그램을 소개합니다.",
};

export default function AfterschoolPage() {
  return (
    <div>
      {/* 페이지 헤더 */}
      <PageHeader
        title="방과후 과정"
        subtitle="교육과 돌봄이 함께하는 편안한 시간"
        gradient="from-[#FFF5F2] to-[#F5F0FF]"
      />
      <SectionNav
        items={[
          { label: "방과후과정안내", href: "#intro" },
          { label: "방과후활동", href: "#activities" },
          { label: "특성화프로그램", href: "#specialty" },
        ]}
      />

      {/* 방과후 과정 안내 */}
      <section id="intro" className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block bg-[#FFF5F2] text-[#F47B5A] text-sm font-medium px-3 py-1 rounded-full mb-4">
            방과후 과정 안내
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#1E293B] mb-5 leading-snug">
            {afterschoolIntro.title}
          </h2>
          <div className="space-y-3">
            {afterschoolIntro.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-[#64748B] leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 방과후 활동 */}
      <section id="activities" className="py-16 px-4 bg-[#FAFBFF]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-[#1E293B] text-center mb-8">
            방과후 활동
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {afterschoolActivities.map((activity) => (
              <div
                key={activity.label}
                className="flex items-center gap-3 bg-white border border-[#E2E8F0] rounded-2xl px-5 py-4"
              >
                <span className="text-2xl">{activity.emoji}</span>
                <span className="text-[#334155] font-medium">
                  {activity.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 특성화 프로그램 */}
      <section id="specialty" className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-block bg-[#F5F0FF] text-[#9B7FE8] text-sm font-medium px-3 py-1 rounded-full mb-4">
              특성화 프로그램
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-[#1E293B] mb-4 leading-snug">
              {specialtyIntro.title}
            </h2>
            <div className="max-w-2xl mx-auto space-y-2">
              {specialtyIntro.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-[#64748B] leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {specialtyPrograms.map((program) => (
              <div
                key={program.id}
                className="bg-[#FAFBFF] border border-[#E2E8F0] rounded-3xl p-7"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ backgroundColor: `${program.color}15` }}
                  >
                    {program.emoji}
                  </div>
                  <h3
                    className="font-display text-xl font-bold"
                    style={{ color: program.color }}
                  >
                    {program.title}
                  </h3>
                </div>
                <p className="text-sm text-[#64748B] leading-relaxed mb-4">
                  {program.description}
                </p>
                {program.images.length > 0 && (
                  <div
                    className={`grid gap-2 ${
                      program.images.length === 1
                        ? "grid-cols-1"
                        : program.images.length === 2
                          ? "grid-cols-2"
                          : "grid-cols-3"
                    }`}
                  >
                    {program.images.map((image, index) => (
                      <div
                        key={image}
                        className="relative h-36 md:h-40 rounded-xl overflow-hidden"
                      >
                        <Image
                          src={image}
                          alt={`${program.title} 활동 모습 ${index + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 50vw, 240px"
                          unoptimized={image.endsWith(".gif")}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-gradient-to-r from-[#F47B5A] to-[#e5633f] text-center">
        <h2 className="font-display text-xl md:text-2xl font-bold text-white mb-3">
          방과후 과정이 궁금하신가요?
        </h2>
        <p className="text-white/80 mb-6">언제든지 전화로 문의해 주세요</p>
        <a
          href={siteConfig.phoneHref}
          className="inline-block bg-white text-[#F47B5A] font-bold px-8 py-4 rounded-full text-lg shadow-lg transition-all duration-200 hover:-translate-y-0.5"
        >
          전화 문의하기 →
        </a>
      </section>
    </div>
  );
}
