import Link from "next/link";
import Image from "next/image";
import { galleryItems } from "@/data/gallery";

export default function GalleryPreview() {
  // 홈에서는 처음 6장만 미리보기
  const previewItems = galleryItems.slice(0, 6);

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-[#1E293B] mb-2">
              아이들의 하루
            </h2>
            <p className="text-[#64748B]">동산유치원에서의 행복한 순간들</p>
          </div>
          <Link
            href="/gallery"
            className="text-sm text-[#4A9EE0] hover:underline font-medium"
          >
            전체 사진 보기 →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {previewItems.map((item) => (
            <Link
              key={item.id}
              href="/gallery"
              className="relative aspect-square rounded-2xl overflow-hidden bg-[#F0F5FF] hover:shadow-md transition-all duration-200 hover:scale-[1.02] group"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200 rounded-2xl" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
