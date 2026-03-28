const points = [
  {
    emoji: "🌿",
    title: "자연 체험 중심 교육",
    desc: "숲, 텃밭, 계절 자연에서 몸으로 배웁니다",
    color: "#5BB85D",
    bg: "#F0FFF4",
  },
  {
    emoji: "👨‍👩‍👧",
    title: "소규모 담임제 운영",
    desc: "적은 인원으로 아이 한 명 한 명을 세심하게 돌봅니다",
    color: "#4A9EE0",
    bg: "#EBF5FF",
  },
  {
    emoji: "🎮",
    title: "놀이 중심 교육과정",
    desc: "국가 표준 누리과정 기반 놀이 중심으로 운영합니다",
    color: "#F47B5A",
    bg: "#FFF5F2",
  },
  {
    emoji: "🕗",
    title: "07:30 ~ 19:30 운영",
    desc: "맞벌이 가정도 안심할 수 있는 넓은 운영시간",
    color: "#9B7FE8",
    bg: "#F5F0FF",
  },
];

export default function TrustPoints() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#1E293B] mb-2">
            왜 동산유치원인가요?
          </h2>
          <p className="text-[#64748B]">학부모님이 가장 많이 묻는 질문에 답합니다</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {points.map((point) => (
            <div
              key={point.title}
              className="rounded-2xl p-6 hover:shadow-md transition-shadow duration-200"
              style={{ backgroundColor: point.bg }}
            >
              <div className="text-4xl mb-4">{point.emoji}</div>
              <h3
                className="font-bold text-base mb-2"
                style={{ color: point.color }}
              >
                {point.title}
              </h3>
              <p className="text-sm text-[#64748B] leading-relaxed">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
