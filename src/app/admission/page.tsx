"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Phone } from "lucide-react";

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

const faqs = [
  {
    q: "입학 대상 연령이 어떻게 되나요?",
    a: "만 3세(2022년생), 만 4세(2021년생), 만 5세(2020년생) 아이들이 입학 가능합니다.",
  },
  {
    q: "유치원 비용이 얼마인가요?",
    a: "국가에서 지원하는 유아학비로 실부담금이 크게 줄어듭니다. 구체적인 금액은 상담 시 안내드립니다.",
  },
  {
    q: "통학버스는 어떻게 운영되나요?",
    a: "A, B, C, D 총 4개 노선을 운영합니다. 각 노선의 경로와 시간표는 상담 시 자세히 안내드립니다.",
  },
  {
    q: "방과후 프로그램은 어떻게 신청하나요?",
    a: "영어, 댄스, 스포츠, 도예, AI블록 등 다양한 방과후 프로그램을 운영합니다. 입학 후 선택 신청 가능합니다.",
  },
  {
    q: "견학이나 방문 상담이 가능한가요?",
    a: "네, 가능합니다. 사전에 전화 또는 온라인으로 방문 일정을 예약해 주시면 원장 선생님이 직접 안내해 드립니다.",
  },
];

export default function AdmissionPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-[#FAFBFF] transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-medium text-[#1E293B] text-sm md:text-base">
                    Q. {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#64748B] flex-shrink-0 ml-3 transition-transform duration-200 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-4 text-sm text-[#64748B] leading-relaxed border-t border-[#F1F5F9] pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
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
        <div className="flex items-center justify-center">
          <a
            href="tel:02-866-6571"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-[#F47B5A] font-bold px-10 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
          >
            <Phone className="w-5 h-5" />
            02-866-6571
          </a>
        </div>
      </section>
    </div>
  );
}
