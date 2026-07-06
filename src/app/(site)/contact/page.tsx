import type { Metadata } from "next";
import { Phone, MapPin, Clock } from "lucide-react";
import InquiryForm from "@/components/contact/InquiryForm";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "문의 및 오시는 길",
  description:
    "동산유치원 전화 문의, 주소, 운영시간 안내. 온라인 입학 문의도 남기실 수 있습니다.",
};

export default function ContactPage() {
  return (
    <div>
      {/* 페이지 헤더 */}
      <section className="bg-gradient-to-br from-[#EBF5FF] to-[#F0F5FF] py-16 px-4 text-center">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-[#1E293B] mb-3">
          문의
        </h1>
        <p className="text-[#64748B] text-lg">
          궁금한 점이 있으시면 언제든지 연락주세요
        </p>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          {/* 전화 강조 */}
          <div className="bg-gradient-to-r from-[#F47B5A] to-[#e5633f] rounded-2xl p-8 text-center mb-8">
            <p className="text-white/80 text-sm mb-2">전화로 바로 문의하세요</p>
            <a
              href={siteConfig.phoneHref}
              className="font-display text-3xl md:text-4xl font-bold text-white hover:underline"
            >
              {siteConfig.phone}
            </a>
            <p className="text-white/70 text-sm mt-2">평일 {siteConfig.hours}</p>
          </div>

          {/* 기본 정보 */}
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3 bg-[#FAFBFF] rounded-xl p-5">
              <MapPin className="w-5 h-5 text-[#4A9EE0] mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-sm font-medium text-[#1E293B]">주소</div>
                <div className="text-sm text-[#64748B]">
                  {siteConfig.address} 동산유치원
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-[#FAFBFF] rounded-xl p-5">
              <Phone className="w-5 h-5 text-[#4A9EE0] mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-sm font-medium text-[#1E293B]">전화</div>
                <a
                  href={siteConfig.phoneHref}
                  className="text-sm text-[#4A9EE0] hover:underline font-medium"
                >
                  {siteConfig.phone}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-[#FAFBFF] rounded-xl p-5">
              <Clock className="w-5 h-5 text-[#4A9EE0] mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-sm font-medium text-[#1E293B]">운영시간</div>
                <div className="text-sm text-[#64748B]">평일 {siteConfig.hours}</div>
              </div>
            </div>
          </div>

          {/* 구글 지도 */}
          <div className="w-full rounded-2xl overflow-hidden border border-[#E2E8F0] mb-4" style={{ height: "400px" }}>
            <iframe
              src="https://maps.google.com/maps?q=서울시+금천구+시흥대로+152길+35+동산유치원&output=embed&hl=ko&z=17&t=m"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="동산유치원 위치"
            />
          </div>
          <a
            href="https://maps.google.com/maps?q=서울시+금천구+시흥대로+152길+35+동산유치원"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center text-sm text-[#4A9EE0] hover:underline mb-8"
          >
            Google 지도에서 열기 →
          </a>

          {/* 온라인 입학 문의 */}
          <section id="inquiry" className="relative pt-8 border-t border-[#F1F5F9]">
            <h2 className="font-display text-2xl font-bold text-[#1E293B] text-center mb-2">
              온라인 입학 문의
            </h2>
            <p className="text-sm text-[#64748B] text-center mb-8">
              연락처를 남겨주시면 확인 후 연락드립니다
            </p>
            <InquiryForm />
          </section>
        </div>
      </section>
    </div>
  );
}
