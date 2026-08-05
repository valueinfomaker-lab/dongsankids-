import { Metadata } from "next";
import { parentsIntro, parentPrograms } from "@/data/parents";
import { siteConfig } from "@/data/site";
import PageHeader from "@/components/ui/PageHeader";
import SectionNav from "@/components/ui/SectionNav";

export const metadata: Metadata = {
  title: "학부모 참여",
  description:
    "동산유치원의 학부모 참여 프로그램: 가정 연계교육, 학부모 상담, 부모 행복교실, 학부모 참여수업을 소개합니다.",
};

export default function ParentsPage() {
  return (
    <div>
      {/* 페이지 헤더 */}
      <PageHeader
        title="학부모 참여"
        subtitle="가정과 유치원이 함께 만드는 행복한 성장"
        gradient="from-[#F0FFF4] to-[#FFF5F2]"
      />
      <SectionNav
        items={[
          { label: "가정연계교육", href: "#family" },
          { label: "학부모상담", href: "#counseling" },
          { label: "부모행복교실", href: "#happy-class" },
          { label: "학부모참여수업", href: "#open-class" },
        ]}
      />

      {/* 가정 연계교육 */}
      <section id="family" className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block bg-[#F0FFF4] text-[#5BB85D] text-sm font-medium px-3 py-1 rounded-full mb-4">
            가정 연계교육
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#1E293B] mb-5 leading-snug">
            {parentsIntro.title}
          </h2>
          <div className="space-y-3">
            {parentsIntro.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-[#64748B] leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 참여 프로그램 */}
      <section className="py-16 px-4 bg-[#FAFBFF]">
        <div className="max-w-4xl mx-auto space-y-6">
          {parentPrograms.map((program) => (
            <div
              key={program.id}
              id={program.id}
              className="border border-[#E2E8F0] border-t-4 rounded-3xl p-8 md:p-10"
              style={{ borderTopColor: program.color, backgroundColor: `${program.color}14` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
                  style={{ backgroundColor: `${program.color}15` }}
                >
                  {program.emoji}
                </div>
                <h2
                  className="font-display text-xl md:text-2xl font-bold"
                  style={{ color: program.color }}
                >
                  {program.title}
                </h2>
              </div>
              <div className="space-y-2">
                {program.paragraphs.map((paragraph) => (
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
          상담이 필요하시면 언제든지 연락해 주세요
        </p>
        <div className="flex items-center justify-center">
          <a
            href={siteConfig.phoneHref}
            className="w-full sm:w-auto bg-[#F47B5A] hover:bg-[#e5633f] text-white font-bold px-8 py-4 rounded-full text-lg shadow-md transition-all duration-200 hover:-translate-y-0.5"
          >
            전화 문의하기 →
          </a>
        </div>
      </section>
    </div>
  );
}
