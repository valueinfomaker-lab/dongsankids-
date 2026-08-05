import Image from "next/image";
import { Metadata } from "next";
import { specialPrograms } from "@/data/special-programs";
import { siteConfig } from "@/data/site";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "특색교육",
  description:
    "동산유치원의 특색교육: 놀이교육, 프로젝트, 생태교육, 인성교육, 독서교육, 예술교육, 유·초 연계교육을 소개합니다.",
};

export default function ProgramsPage() {
  return (
    <div>
      {/* 페이지 헤더 */}
      <PageHeader
        title="특색교육"
        subtitle="아이의 작은 관심에서 큰 배움이 시작됩니다"
        gradient="from-[#F5F0FF] to-[#F0FFF4]"
      />

      {/* 특색교육 프로그램 */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto space-y-10">
          {specialPrograms.map((program) => (
            <div
              key={program.id}
              className="bg-[#FAFBFF] border border-[#E2E8F0] rounded-3xl p-6 md:p-10"
            >
              <div className="flex items-center gap-4 mb-3">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
                  style={{ backgroundColor: `${program.color}15` }}
                >
                  {program.emoji}
                </div>
                <div>
                  <h2
                    className="font-display text-xl md:text-2xl font-bold"
                    style={{ color: program.color }}
                  >
                    {program.title}
                  </h2>
                  <p className="font-bold text-[#1E293B] mt-0.5">
                    {program.headline}
                  </p>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                {program.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-[#64748B] leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {program.images.length > 0 && (
                <div
                  className={`grid gap-3 ${
                    program.images.length === 1
                      ? "grid-cols-1 max-w-md"
                      : program.images.length === 2
                        ? "grid-cols-2"
                        : "grid-cols-2 md:grid-cols-3"
                  }`}
                >
                  {program.images.map((image, index) => (
                    <div
                      key={image}
                      className="relative h-48 md:h-56 rounded-2xl overflow-hidden"
                    >
                      <Image
                        src={image}
                        alt={`${program.title} 활동 모습 ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 320px"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-gradient-to-r from-[#9B7FE8] to-[#7B5FD0] text-center">
        <h2 className="font-display text-xl md:text-2xl font-bold text-white mb-3">
          동산의 특색교육이 궁금하신가요?
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
