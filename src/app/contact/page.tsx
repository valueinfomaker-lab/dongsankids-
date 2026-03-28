import { Phone, MapPin, Clock } from "lucide-react";

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
              href="tel:02-866-6571"
              className="font-display text-3xl md:text-4xl font-bold text-white hover:underline"
            >
              02-866-6571
            </a>
            <p className="text-white/70 text-sm mt-2">평일 07:30 ~ 19:30</p>
          </div>

          {/* 기본 정보 */}
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3 bg-[#FAFBFF] rounded-xl p-5">
              <MapPin className="w-5 h-5 text-[#4A9EE0] mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-sm font-medium text-[#1E293B]">주소</div>
                <div className="text-sm text-[#64748B]">
                  서울시 금천구 시흥대로 152길 35 동산유치원
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-[#FAFBFF] rounded-xl p-5">
              <Phone className="w-5 h-5 text-[#4A9EE0] mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-sm font-medium text-[#1E293B]">전화</div>
                <a
                  href="tel:02-866-6571"
                  className="text-sm text-[#4A9EE0] hover:underline font-medium"
                >
                  02-866-6571
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-[#FAFBFF] rounded-xl p-5">
              <Clock className="w-5 h-5 text-[#4A9EE0] mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-sm font-medium text-[#1E293B]">운영시간</div>
                <div className="text-sm text-[#64748B]">평일 07:30 ~ 19:30</div>
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
        </div>
      </section>
    </div>
  );
}
