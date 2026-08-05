export type GalleryCategory = "전체" | "교육활동" | "자연체험" | "행사";

export interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: Exclude<GalleryCategory, "전체">;
}

// 사이트의 모든 사진은 한 곳에서만 사용한다.
// 섹션 페이지(특색교육·방과후 등)에 실린 사진은 여기 넣지 않는다 —
// 사진첩은 관리자 페이지에서 업로드한 사진 전용.
export const galleryItems: GalleryItem[] = [];

export const categories: GalleryCategory[] = ["전체", "교육활동", "자연체험", "행사"];
