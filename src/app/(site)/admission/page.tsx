import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import FaqAccordion from "@/components/admission/FaqAccordion";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "입학안내",
  description:
    "동산유치원 2026학년도 신입원아 모집 안내. 만 3~5세 입학 대상, 입학 절차, 자주 묻는 질문을 확인하세요.",
};

const eligibility = [
  { age: "만 3세", birth: "2022년 1월 ~ 12월생", icon: "🐣" },
  { age: "만 4세", birth: "2021년 1월 ~ 12월생", icon: "🐥" },
  { age: "만 5세", birth: "2020년 1월 ~ 12월생", icon: "🐤" },
];

const steps = [
  { step: "01", title: "상담 신청", desc: "전화 또는 온라인으로 상담 신청", icon: "📞" },
  { step: "02", title: "원서 제출", desc: "입학 원서 및 서류 제출", icon: "📝" },
  { step: "03", title: "서류 확인", desc: "제출 서류 검토 및 확인", icon: "✅" },
  { step: "04", title: "입학 확정", desc: "입학 확정 통보 및 등록", icon: "🎉" },
];

export default function AdmissionPage() {
  return (
    <div>
      {/* 페이지 헤더 */}
      <section className="bg-gradient-to-br from-[#FFF5F2] to-[#FFEEE9] py-16 px-4 text-center">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-[#1E293B] mb-3">
          입학안내
        </h1>
        <p className="text-[#64748B] text-lg">
          2026학년도 신입원아를 모집합니다
        </p>
      </section>

      {/* 입학 자격 */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-[#1E293B] text-center mb-8">
            입학 대상
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {eligibility.map((item) => (
              <div
                key={item.age}
                className="bg-[#FFF5F2] border-2 border-[#F47B5A]/20 rounded-2xl p-6 text-center"
              >
                <div className="text-5xl mb-3">{item.icon}</div>
                <div className="font-display text-xl font-bold text-[#F47B5A] mb-1">
                  {item.age}
                </div>
                <div className="text-sm text-[#64748B]">{item.birth}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 지원 절차 */}
      <section className="py-16 px-4 bg-[#FAFBFF]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-[#1E293B] text-center mb-10">
            입학 절차
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {steps.map((step, index) => (
              <div key={step.step} className="relative text-center">
                {/* 화살표 */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 right-0 translate-x-1/2 text-[#E2E8F0] text-xl z-10">
                    →
                  </div>
                )}
                <div className="bg-white border border-[#E2E8F0] rounded-2xl p-5 hover:shadow-md transition-shadow">
                  <div className="text-3xl mb-2">{step.icon}</div>
                  <div className="text-xs font-bold text-[#4A9EE0] mb-1">
                    STEP {step.step}
                  </div>
                  <div className="font-bold text-[#1E293B] text-sm mb-1">
                    {step.title}
                  </div>
                  <div className="text-xs text-[#64748B]">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-[#FAFBFF]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-[#1E293B] text-center mb-8">
            자주 묻는 질문
          </h2>
          <FaqAccordion />
        </div>
      </section>

      {/* 강조 CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#F47B5A] to-[#e5633f] text-center">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
          지금 바로 상담 신청하세요
        </h2>
        <p className="text-white/80 mb-6">
          원장 선생님이 직접 안내해 드립니다
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={siteConfig.phoneHref}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-[#F47B5A] font-bold px-10 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
          >
            <Phone className="w-5 h-5" />
            {siteConfig.phone}
          </a>
          <Link
            href="/contact#inquiry"
            className="w-full sm:w-auto bg-white/20 hover:bg-white/30 text-white font-medium px-10 py-4 rounded-full text-lg transition-all duration-200"
          >
            온라인 문의하기
          </Link>
        </div>
      </section>
    </div>
  );
}
