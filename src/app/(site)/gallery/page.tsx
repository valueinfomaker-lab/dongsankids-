import type { Metadata } from "next";
import GalleryGrid, {
  type GalleryDisplayItem,
} from "@/components/gallery/GalleryGrid";
import { galleryItems } from "@/data/gallery";
import { readMetadata } from "@/lib/gallery-blob";

export const metadata: Metadata = {
  title: "사진첩",
  description:
    "동산유치원 아이들의 교육활동, 자연체험, 행사 사진을 모았습니다.",
};

// 관리자가 업로드한 사진이 바로 보이도록 요청 시 렌더링
export const dynamic = "force-dynamic";

export default async function GalleryPage() {
  const blobItems = await readMetadata();

  const uploaded: GalleryDisplayItem[] = [...blobItems]
    .sort((a, b) => b.uploadedAt.localeCompare(a.uploadedAt))
    .map((item) => ({
      id: `blob-${item.id}`,
      src: item.src,
      alt: item.alt,
      category: item.category,
    }));

  const staticItems: GalleryDisplayItem[] = galleryItems.map((item) => ({
    id: `static-${item.id}`,
    src: item.src,
    alt: item.alt,
    category: item.category,
  }));

  const items = [...uploaded, ...staticItems];

  return (
    <div>
      {/* 페이지 헤더 */}
      <section className="bg-gradient-to-br from-[#EBF5FF] to-[#F0FFF4] py-16 px-4 text-center">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-[#1E293B] mb-3">
          사진첩
        </h1>
        <p className="text-[#64748B] text-lg">
          동산유치원 아이들의 행복한 순간들
        </p>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <GalleryGrid items={items} />
        </div>
      </section>
    </div>
  );
}
