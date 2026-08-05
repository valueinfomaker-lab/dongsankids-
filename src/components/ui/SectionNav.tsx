"use client";

import { useEffect, useState } from "react";

type SectionNavProps = {
  items: { label: string; href: string }[];
};

// 페이지 상단 세부항목 목차 — 스크롤을 따라 상단에 고정되고,
// 현재 보고 있는 섹션의 칩에 색이 켜진다.
export default function SectionNav({ items }: SectionNavProps) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const ids = items
      .map((item) => item.href.split("#")[1])
      .filter((id): id is string => Boolean(id));

    const onScroll = () => {
      let current: string | null = null;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) current = id;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [items]);

  return (
    <nav
      aria-label="페이지 세부항목"
      className="sticky top-16 z-30 bg-white/95 backdrop-blur-sm border-b border-[#E2E8F0] py-3 px-4"
    >
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-2">
        {items.map((item) => {
          const id = item.href.split("#")[1];
          const isActive = id === active;
          return (
            <a
              key={item.href}
              href={item.href}
              aria-current={isActive ? "true" : undefined}
              className={`text-sm font-medium px-4 py-1.5 rounded-full border transition-colors ${
                isActive
                  ? "bg-[#4A9EE0] border-[#4A9EE0] text-white shadow-sm"
                  : "border-[#E2E8F0] bg-[#FAFBFF] text-[#64748B] hover:border-[#4A9EE0] hover:text-[#4A9EE0] hover:bg-[#F0F5FF]"
              }`}
            >
              {item.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
