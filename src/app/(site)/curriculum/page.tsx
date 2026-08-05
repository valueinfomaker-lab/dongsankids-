import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { curriculumIntro, happyDay, fieldTrip } from "@/data/curriculum";
import { siteConfig } from "@/data/site";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "교육과정",
  description:
    "동산유치원은 누리과정을 바탕으로 놀이 중심 교육을 운영합니다. 행복한 하루 일과와 교외체험학습을 소개합니다.",
};

const relatedLinks = [
  {
    title: "특색교육",
    desc: "놀이·생태·인성·독서·예술·유초연계 교육",
    href: "/programs",
    emoji: "🌟",
    color: "#9B7FE8",
  },
  {
    title: "방과후 과정",
    desc: "교육과 돌봄이 함께하는 편안한 시간과 특성화 프로그램",
    href: "/afterschool",
    emoji: "🎭",
    color: "#F47B5A",
  },
];

export default function CurriculumPage() {
  return (
    <div>
      {/* 페이지 헤더 */}
      <PageHeader
        title="교육과정"
        subtitle="놀이하며 발견하고, 경험하며 성장합니다"
        gradient="from-[#F0FFF4] to-[#EBF5FF]"
      />

      {/* 교육과정 안내 */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block bg-[#F0FFF4] text-[#5BB85D] text-sm font-medium px-3 py-1 rounded-full mb-4">
            교육과정 안내
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#1E293B] mb-5 leading-snug">
            {curriculumIntro.title}
          </h2>
          <div className="space-y-3">
            {curriculumIntro.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-[#64748B] leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 행복한 하루 */}
      <section className="py-16 px-4 bg-[#FAFBFF]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-block bg-[#FFF8EB] text-[#F4A93B] text-sm font-medium px-3 py-1 rounded-full mb-4">
              {happyDay.title}
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-[#1E293B]">
              {happyDay.headline}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {happyDay.items.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 bg-white border border-[#E2E8F0] rounded-2xl px-5 py-4"
              >
                <span className="text-2xl">{item.emoji}</span>
                <span className="text-[#334155] font-medium">{item.label}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-[#94A3B8] text-sm mt-6">{happyDay.note}</p>

          <div className="text-center mt-8">
            <Link
              href="/daily"
              className="inline-block border-2 border-[#4A9EE0] text-[#4A9EE0] hover:bg-[#4A9EE0] hover:text-white font-medium px-6 py-3 rounded-full transition-all duration-200"
            >
              시간별 하루 일과 자세히 보기 →
            </Link>
          </div>
        </div>
      </section>

      {/* 교외체험학습 */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-block bg-[#EBF5FF] text-[#4A9EE0] text-sm font-medium px-3 py-1 rounded-full mb-4">
              {fieldTrip.title}
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-[#1E293B] mb-4">
              {fieldTrip.headline}
            </h2>
            <div className="max-w-2xl mx-auto space-y-2">
              {fieldTrip.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-[#64748B] leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
            {fieldTrip.images.map((image, index) => (
              <div
                key={image}
                className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md"
              >
                <Image
                  src={image}
                  alt={`교외체험학습 활동 모습 ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 336px"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 관련 페이지 링크 */}
      <section className="py-16 px-4 bg-[#FAFBFF]">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          {relatedLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group bg-white border border-[#E2E8F0] rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
            >
              <div className="text-4xl mb-4">{link.emoji}</div>
              <h3
                className="font-display text-xl font-bold mb-2 group-hover:underline decoration-2 underline-offset-4"
                style={{ color: link.color }}
              >
                {link.title} →
              </h3>
              <p className="text-sm text-[#64748B] leading-relaxed">{link.desc}</p>
            </Link>
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
