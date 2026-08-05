import type { Metadata } from "next";
import { Phone, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/data/site";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "문의 및 오시는 길",
  description:
    "동산유치원 전화 문의, 주소, 운영시간, 오시는 길 안내. 네이버지도와 카카오맵으로 길찾기를 도와드립니다.",
};

const MAP_QUERY = encodeURIComponent(`${siteConfig.address} 동산유치원`);
const NAVER_MAP_URL = `https://map.naver.com/p/search/${MAP_QUERY}`;
const KAKAO_MAP_URL = `https://map.kakao.com/link/search/${MAP_QUERY}`;

export default function ContactPage() {
  return (
    <div>
      {/* 페이지 헤더 */}
      <PageHeader
        title="문의"
        subtitle="궁금한 점이 있으시면 언제든지 연락주세요"
        gradient="from-[#EBF5FF] to-[#F0F5FF]"
      />

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

          {/* 오시는 길 */}
          <h2 className="font-display text-xl font-bold text-[#1E293B] text-center mb-4">
            오시는 길
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              href={NAVER_MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#03C75A] hover:bg-[#02b350] text-white font-bold px-6 py-4 rounded-full transition-all duration-200 hover:-translate-y-0.5 shadow-md"
            >
              <MapPin className="w-5 h-5" />
              네이버지도로 길찾기
            </a>
            <a
              href={KAKAO_MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#FEE500] hover:bg-[#f5db00] text-[#191919] font-bold px-6 py-4 rounded-full transition-all duration-200 hover:-translate-y-0.5 shadow-md"
            >
              <MapPin className="w-5 h-5" />
              카카오맵으로 길찾기
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
