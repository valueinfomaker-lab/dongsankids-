import Image from "next/image";
import { Metadata } from "next";
import { busRoutes, type ScheduleItem } from "@/data/daily";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "하루 일과",
  description: "동산유치원의 하루 일과 및 통학버스 안내",
};

const morningSchedule: ScheduleItem[] = [
  { time: "07:30", label: "등원", icon: "🌅", desc: "등원 및 자유선택 활동" },
  { time: "09:00", label: "아침 모임", icon: "🌞", desc: "인사 나누기, 날씨·날짜 알기" },
  { time: "09:30", label: "자유놀이", icon: "🎮", desc: "실내 자유선택 활동", photo: "/images/daily_freeplay.jpg" },
  { time: "10:30", label: "이야기 나누기", icon: "💬", desc: "주제 탐구, 언어·수학 활동", photo: "/images/daily_reading.png" },
  { time: "11:30", label: "바깥 활동", icon: "🌳", desc: "실외놀이, 텃밭, 산책", photo: "/images/daily_outdoor.png" },
  { time: "12:30", label: "점심 식사", icon: "🍱", desc: "영양사 선생님의 균형 잡힌 식단" },
];

const afternoonSchedule: ScheduleItem[] = [
  { time: "13:30", label: "낮잠·휴식", icon: "😴", desc: "휴식 및 조용한 활동" },
  { time: "14:30", label: "오후 활동", icon: "🎨", desc: "특성화 교육, 프로젝트 활동", photo: "/images/daily_play.jpg" },
  { time: "15:30", label: "간식·하원 준비", icon: "🧁", desc: "간식 먹기, 하원 준비", photo: "/images/daily_snack.png" },
];

const eveningSchedule: ScheduleItem[] = [
  { time: "16:00", label: "방과후 활동", icon: "⭐", desc: "방과후 특기활동 (선택)" },
  { time: "19:30", label: "하원", icon: "🌙", desc: "통학버스 및 개별 하원" },
];

const sections: { title: string; color: string; bg: string; badge: string; dot: string; items: ScheduleItem[] }[] = [
  {
    title: "오전",
    color: "#F59E0B",
    bg: "from-[#FFFBEB] to-[#FFF7ED]",
    badge: "bg-amber-100 text-amber-700",
    dot: "bg-amber-400",
    items: morningSchedule,
  },
  {
    title: "오후",
    color: "#4A9EE0",
    bg: "from-[#EFF6FF] to-[#F0FFF4]",
    badge: "bg-blue-100 text-blue-700",
    dot: "bg-blue-400",
    items: afternoonSchedule,
  },
  {
    title: "저녁",
    color: "#8B5CF6",
    bg: "from-[#F5F3FF] to-[#EFF6FF]",
    badge: "bg-violet-100 text-violet-700",
    dot: "bg-violet-400",
    items: eveningSchedule,
  },
];

export default function DailyPage() {
  return (
    <div>
      {/* 페이지 헤더 */}
      <section className="bg-gradient-to-br from-[#FFF7ED] to-[#EBF5FF] py-16 px-4 text-center">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-[#1E293B] mb-3">
          하루 일과
        </h1>
        <p className="text-[#64748B] text-lg max-w-md mx-auto">
          아이의 하루를 함께 들여다보세요
        </p>
      </section>

      {/* 일과표 */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto space-y-14">
          {sections.map((section) => (
            <div key={section.title}>
              {/* 섹션 헤더 */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                  style={{ backgroundColor: section.color }}
                >
                  {section.title}
                </div>
                <div className="flex-1 h-px" style={{ backgroundColor: `${section.color}40` }} />
              </div>

              <div className="space-y-4">
                {section.items.map((item, i) => (
                  <div
                    key={i}
                    className={`rounded-2xl overflow-hidden border border-[#E2E8F0] bg-gradient-to-br ${section.bg}`}
                  >
                    {item.photo ? (
                      /* 사진 있는 카드: 사진 + 텍스트 */
                      <div className="flex flex-col sm:flex-row">
                        <div className="relative sm:w-48 h-40 sm:h-auto flex-shrink-0">
                          <Image
                            src={item.photo}
                            alt={item.label}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, 192px"
                          />
                        </div>
                        <div className="flex items-center gap-4 p-5 flex-1">
                          <div
                            className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                            style={{ backgroundColor: `${section.color}15` }}
                          >
                            {item.icon}
                          </div>
                          <div>
                            <span
                              className="text-xs font-bold"
                              style={{ color: section.color }}
                            >
                              {item.time}
                            </span>
                            <p className="font-bold text-[#1E293B] text-base mt-0.5">{item.label}</p>
                            <p className="text-[#64748B] text-sm mt-1">{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* 사진 없는 카드: 텍스트만 */
                      <div className="flex items-center gap-4 p-5">
                        <div
                          className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                          style={{ backgroundColor: `${section.color}15` }}
                        >
                          {item.icon}
                        </div>
                        <div>
                          <span
                            className="text-xs font-bold"
                            style={{ color: section.color }}
                          >
                            {item.time}
                          </span>
                          <p className="font-bold text-[#1E293B] text-base mt-0.5">{item.label}</p>
                          <p className="text-[#64748B] text-sm mt-1">{item.desc}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 통학버스 안내 */}
      <section className="py-16 px-4 bg-[#F8FAFF]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-[#1E293B] mb-2 text-center">
            🚌 통학버스 안내
          </h2>
          <p className="text-center text-[#64748B] mb-4 text-sm">
            안전하고 편리한 통학버스를 운행하고 있습니다
          </p>
          <div className="flex justify-center gap-3 mb-8">
            <span className="bg-[#4A9EE0]/10 text-[#4A9EE0] text-sm font-semibold px-4 py-1.5 rounded-full">
              🌅 등원 08:20 ~ 09:30
            </span>
            <span className="bg-[#F47B5A]/10 text-[#F47B5A] text-sm font-semibold px-4 py-1.5 rounded-full">
              🌙 하원 15:50 ~ 17:30
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {busRoutes.map((route) => (
              <div
                key={route.id}
                className="bg-white rounded-2xl p-5 border border-[#E2E8F0] shadow-sm"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-[#4A9EE0] text-white font-bold text-base flex items-center justify-center flex-shrink-0">
                    {route.id}
                  </div>
                  <div>
                    <p className="font-bold text-[#1E293B] text-sm">{route.name}</p>
                    <p className="text-[#64748B] text-xs">{route.direction}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  {route.stops.map((stop, i) => (
                    <div key={i} className="flex items-center gap-2">
                      {i < route.stops.length - 1 ? (
                        <span className="text-[#4A9EE0] text-xs w-3 text-center">●</span>
                      ) : (
                        <span className="text-[#F47B5A] text-xs w-3 text-center">★</span>
                      )}
                      <span className="text-sm text-[#334155]">{stop}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-[#94A3B8] text-xs mt-5">
            * 2026학년도 입학 유아에 따라 노선이 변경될 수 있습니다
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-gradient-to-r from-[#4A9EE0] to-[#2B7BC8] text-center">
        <h2 className="font-display text-xl md:text-2xl font-bold text-white mb-3">
          궁금한 점이 있으신가요?
        </h2>
        <p className="text-white/80 mb-6">언제든지 전화로 문의해 주세요</p>
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
