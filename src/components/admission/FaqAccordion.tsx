"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

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

export default function FaqAccordion() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden"
        >
          <button
            className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-[#FAFBFF] transition-colors"
            onClick={() => setOpenFaq(openFaq === index ? null : index)}
            aria-expanded={openFaq === index}
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
  );
}
