"use client";

import Image from "next/image";
import { useState } from "react";
import { categories, type GalleryCategory } from "@/data/gallery";

export interface GalleryDisplayItem {
  id: string;
  src: string;
  alt: string;
  category: Exclude<GalleryCategory, "전체">;
}

interface GalleryGridProps {
  items: GalleryDisplayItem[];
}

export default function GalleryGrid({ items }: GalleryGridProps) {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("전체");

  const filtered =
    activeCategory === "전체"
      ? items
      : items.filter((item) => item.category === activeCategory);

  return (
    <div>
      {/* 카테고리 탭 */}
      <div
        className="flex flex-wrap items-center justify-center gap-2 mb-10"
        role="tablist"
        aria-label="사진 카테고리"
      >
        {categories.map((category) => (
          <button
            key={category}
            role="tab"
            aria-selected={activeCategory === category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === category
                ? "bg-[#4A9EE0] text-white"
                : "bg-[#F0F5FF] text-[#64748B] hover:bg-[#E0EDFF]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* 사진 그리드 */}
      {filtered.length === 0 ? (
        <p className="text-center text-[#64748B] py-16">
          등록된 사진이 없습니다.
        </p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="relative aspect-square rounded-2xl overflow-hidden bg-[#F0F5FF] hover:shadow-md transition-all duration-200 group"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
