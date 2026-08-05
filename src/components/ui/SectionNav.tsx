type SectionNavProps = {
  items: { label: string; href: string }[];
};

// 페이지 상단 세부항목 목차 — 칩을 누르면 해당 섹션으로 이동
export default function SectionNav({ items }: SectionNavProps) {
  return (
    <nav
      aria-label="페이지 세부항목"
      className="bg-white border-b border-[#E2E8F0] py-3 px-4"
    >
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-2">
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-sm font-medium px-4 py-1.5 rounded-full border border-[#E2E8F0] bg-[#FAFBFF] text-[#64748B] hover:border-[#4A9EE0] hover:text-[#4A9EE0] hover:bg-[#F0F5FF] transition-colors"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
