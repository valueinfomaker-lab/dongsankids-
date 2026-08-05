import Image from "next/image";
import { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { greeting, philosophy, motto, educationGoals } from "@/data/about";

export const metadata: Metadata = {
  title: "유치원 소개",
  description:
    "동산유치원의 원장 인사말, 설립 이념, 원훈, 교육 목표를 소개합니다. 아이 한 명, 한 명의 마음과 발달의 속도를 존중합니다.",
};

export default function AboutPage() {
  return (
    <div>
      {/* 페이지 헤더 */}
      <section className="bg-gradient-to-br from-[#EBF5FF] to-[#F0FFF4] py-16 px-4 text-center">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-[#1E293B] mb-3">
          유치원 소개
        </h1>
        <p className="text-[#64748B] text-lg">동산유치원을 소개합니다</p>
      </section>

      {/* 원장 인사말 */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-block bg-[#EBF5FF] text-[#4A9EE0] text-sm font-medium px-3 py-1 rounded-full mb-4">
              원장 인사말
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-[#1E293B] leading-snug">
              {greeting.title}
            </h2>
          </div>
          <div className="space-y-4">
            {greeting.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-[#64748B] leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          <p className="mt-8 text-right font-display text-[#4A9EE0] font-bold text-lg">
            {greeting.signature}
          </p>
        </div>
      </section>

      {/* 설립 이념 */}
      <section className="py-16 px-4 bg-[#FAFBFF]">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="flex-shrink-0 w-full md:w-96">
              <div className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={philosophy.image}
                  alt="동산유치원 아이들의 모습"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 384px"
                />
              </div>
            </div>
            <div>
              <div className="inline-block bg-[#F0FFF4] text-[#5BB85D] text-sm font-medium px-3 py-1 rounded-full mb-4">
                설립 이념
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-[#1E293B] mb-5 leading-snug">
                {philosophy.title}
              </h2>
              <div className="space-y-3">
                {philosophy.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-[#64748B] leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 원훈 */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block bg-[#FFF8EB] text-[#F4A93B] text-sm font-medium px-3 py-1 rounded-full mb-4">
            원훈
          </div>
          <p className="font-display text-3xl md:text-4xl font-bold text-[#1E293B] leading-snug">
            &ldquo;{motto}&rdquo;
          </p>
        </div>
      </section>

      {/* 교육 목표 */}
      <section className="py-16 px-4 bg-[#FAFBFF]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-[#1E293B] mb-2">
              교육 목표
            </h2>
            <p className="text-[#64748B]">
              동산유치원이 함께 키워가는 네 가지 어린이상입니다
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {educationGoals.map((goal) => (
              <div
                key={goal.title}
                className="bg-white border border-[#E2E8F0] rounded-2xl p-8 hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{goal.emoji}</div>
                <h3
                  className="font-display text-xl font-bold mb-2"
                  style={{ color: goal.color }}
                >
                  {goal.title}
                </h3>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  {goal.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-[#F0F5FF] text-center">
        <p className="text-[#64748B] mb-4 text-lg">
          궁금한 점이 있으시면 언제든지 연락주세요
        </p>
        <a
          href={siteConfig.phoneHref}
          className="inline-block bg-[#F47B5A] hover:bg-[#e5633f] text-white font-bold px-8 py-4 rounded-full text-lg shadow-md transition-all duration-200 hover:-translate-y-0.5"
        >
          전화 문의하기 →
        </a>
      </section>
    </div>
  );
}
