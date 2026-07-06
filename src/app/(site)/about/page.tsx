import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "유치원 소개",
  description: "동산유치원의 교육 철학과 시설을 소개합니다. 아이 한 명 한 명의 속도를 존중합니다.",
};

const values = [
  {
    emoji: "🎮",
    title: "놀이",
    desc: "놀이는 아이의 언어입니다. 자유로운 놀이 속에서 아이는 세상을 배우고, 관계를 익히고, 자신을 발견합니다.",
    color: "#4A9EE0",
    bg: "#EBF5FF",
  },
  {
    emoji: "🌿",
    title: "자연",
    desc: "흙을 만지고, 풀을 뜯고, 벌레를 관찰하는 경험이 아이의 감수성과 탐구력을 키워줍니다.",
    color: "#5BB85D",
    bg: "#F0FFF4",
  },
  {
    emoji: "🤝",
    title: "관계",
    desc: "선생님과 친구들과의 따뜻한 관계 속에서 아이는 정서적 안정을 찾고 사회성을 기릅니다.",
    color: "#F47B5A",
    bg: "#FFF5F2",
  },
];

const facilities = [
  { emoji: "🏫", name: "교실", desc: "햇살이 드는 밝고 넓은 놀이 공간" },
  { emoji: "📚", name: "도서관", desc: "아이들이 언제든 찾는 책 공간" },
  { emoji: "🌳", name: "야외 놀이터", desc: "안전한 자연 놀이 환경" },
  { emoji: "🥦", name: "텃밭", desc: "직접 심고 수확하는 생태 교육" },
  { emoji: "🍱", name: "급식실", desc: "영양사가 구성하는 균형 잡힌 식단" },
  { emoji: "🛏️", name: "낮잠실", desc: "편안한 휴식과 낮잠 공간" },
];

export default function AboutPage() {
  return (
    <div>
      {/* 페이지 헤더 */}
      <section className="bg-gradient-to-br from-[#EBF5FF] to-[#F0FFF4] py-16 px-4 text-center">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-[#1E293B] mb-3">
          유치원 소개
        </h1>
        <p className="text-[#64748B] text-lg">
          동산유치원을 소개합니다
        </p>
      </section>

      {/* 원장 인사말 */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            {/* 유치원 전경 사진 */}
            <div className="flex-shrink-0 w-full md:w-80">
              <div className="relative w-full h-56 md:h-64 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/building.png"
                  alt="동산유치원 전경"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 320px"
                />
              </div>
            </div>
            <div>
              <div className="inline-block bg-[#EBF5FF] text-[#4A9EE0] text-sm font-medium px-3 py-1 rounded-full mb-4">
                원장 인사말
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-[#1E293B] mb-4">
                아이 한 명 한 명의 속도를
                <br />
                존중합니다
              </h2>
              <p className="text-[#64748B] leading-relaxed mb-4">
                동산유치원은 모든 아이가 저마다의 속도로 자라고 있다고 믿습니다.
                빠르지 않아도 괜찮고, 남들과 달라도 괜찮습니다. 중요한 것은
                아이가 자신을 믿고, 세상을 탐구할 수 있는 힘을 기르는 것입니다.
              </p>
              <p className="text-[#64748B] leading-relaxed mb-6">
                저희 선생님들은 아이의 곁에서 함께 웃고, 함께 궁금해하며
                성장을 응원합니다. 안심하고 맡겨주세요. 우리가 함께합니다.
              </p>
              <p className="font-display text-[#4A9EE0] font-bold">
                동산유치원 원장 드림
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 교육 철학 3가지 가치 */}
      <section className="py-16 px-4 bg-[#FAFBFF]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-[#1E293B] mb-2">
              동산의 세 가지 가치
            </h2>
            <p className="text-[#64748B]">이 세 가지가 동산유치원 모든 교육의 중심입니다</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl p-8 text-center"
                style={{ backgroundColor: v.bg }}
              >
                <div className="text-5xl mb-4">{v.emoji}</div>
                <h3
                  className="font-display text-xl font-bold mb-3"
                  style={{ color: v.color }}
                >
                  {v.title}
                </h3>
                <p className="text-sm text-[#64748B] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 시설 안내 */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-[#1E293B] mb-2">
              시설 안내
            </h2>
            <p className="text-[#64748B]">아이들이 하루를 보내는 공간을 소개합니다</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {facilities.map((f) => (
              <div
                key={f.name}
                className="bg-[#FAFBFF] border border-[#E2E8F0] rounded-2xl p-6 text-center hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-3">{f.emoji}</div>
                <h3 className="font-bold text-[#1E293B] mb-1">{f.name}</h3>
                <p className="text-xs text-[#64748B]">{f.desc}</p>
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
