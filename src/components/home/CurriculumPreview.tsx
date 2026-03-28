import Link from "next/link";

const previewItems = [
  {
    emoji: "🌿",
    title: "자연생태교육",
    desc: "계절마다 숲, 텃밭, 흙에서 배워요",
    href: "/curriculum",
    bg: "from-[#E8F5E9] to-[#F1F8E9]",
    color: "#5BB85D",
  },
  {
    emoji: "🎨",
    title: "놀이프로젝트",
    desc: "아이가 궁금한 것을 함께 탐구해요",
    href: "/curriculum",
    bg: "from-[#E3F2FD] to-[#E8F4FF]",
    color: "#4A9EE0",
  },
  {
    emoji: "💛",
    title: "인성교육",
    desc: "이달의 덕목으로 바른 마음을 키워요",
    href: "/curriculum",
    bg: "from-[#FFFDE7] to-[#FFF8E1]",
    color: "#F9A825",
  },
];

export default function CurriculumPreview() {
  return (
    <section className="py-16 px-4 bg-[#FAFBFF]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-[#1E293B] mb-2">
              동산만의 교육과정
            </h2>
            <p className="text-[#64748B]">
              아이가 묻고, 탐구하고, 스스로 배웁니다
            </p>
          </div>
          <Link
            href="/curriculum"
            className="text-sm text-[#4A9EE0] hover:underline font-medium"
          >
            전체 교육과정 보기 →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {previewItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className={`bg-gradient-to-br ${item.bg} rounded-2xl p-7 hover:shadow-lg transition-all duration-200 hover:-translate-y-1 group`}
            >
              <div className="text-5xl mb-4">{item.emoji}</div>
              <h3
                className="font-display text-xl font-bold mb-2"
                style={{ color: item.color }}
              >
                {item.title}
              </h3>
              <p className="text-sm text-[#64748B] leading-relaxed mb-4">
                {item.desc}
              </p>
              <span
                className="text-sm font-medium group-hover:underline"
                style={{ color: item.color }}
              >
                자세히 보기 →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
