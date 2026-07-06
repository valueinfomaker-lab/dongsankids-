export type GalleryCategory = "전체" | "교육활동" | "자연체험" | "행사";

export interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: Exclude<GalleryCategory, "전체">;
}

export const galleryItems: GalleryItem[] = [
  // 교육활동
  { id: 1,  src: "/images/gallery/ppt2_009.jpg", alt: "교육 활동", category: "교육활동" },
  { id: 2,  src: "/images/gallery/ppt2_010.jpg", alt: "교육 활동", category: "교육활동" },
  { id: 3,  src: "/images/gallery/ppt2_012.jpg", alt: "교육 활동", category: "교육활동" },
  { id: 4,  src: "/images/gallery/ppt2_014.jpg", alt: "교육 활동", category: "교육활동" },
  { id: 5,  src: "/images/gallery/ppt2_016.jpg", alt: "교육 활동", category: "교육활동" },
  { id: 6,  src: "/images/gallery/ppt2_055.jpg", alt: "교육 활동", category: "교육활동" },
  { id: 7,  src: "/images/gallery/ppt2_056.jpg", alt: "교육 활동", category: "교육활동" },
  { id: 8,  src: "/images/gallery/ppt2_057.jpg", alt: "교육 활동", category: "교육활동" },
  { id: 9,  src: "/images/gallery/ppt2_058.jpg", alt: "교육 활동", category: "교육활동" },
  { id: 10, src: "/images/gallery/ppt2_060.jpg", alt: "교육 활동", category: "교육활동" },
  { id: 11, src: "/images/gallery/ppt2_061.jpg", alt: "교육 활동", category: "교육활동" },
  { id: 12, src: "/images/gallery/ppt2_063.jpg", alt: "교육 활동", category: "교육활동" },
  { id: 13, src: "/images/gallery/ppt2_065.jpg", alt: "교육 활동", category: "교육활동" },
  { id: 14, src: "/images/gallery/ppt2_066.jpg", alt: "교육 활동", category: "교육활동" },
  { id: 15, src: "/images/gallery/dance.jpg", alt: "댄스 활동", category: "교육활동" },

  // 자연체험
  { id: 16, src: "/images/gallery/ppt2_019.jpg", alt: "자연 체험", category: "자연체험" },
  { id: 17, src: "/images/gallery/ppt2_020.jpg", alt: "자연 체험", category: "자연체험" },
  { id: 18, src: "/images/gallery/ppt2_021.jpg", alt: "자연 체험", category: "자연체험" },
  { id: 19, src: "/images/gallery/ppt2_022.jpg", alt: "자연 체험", category: "자연체험" },
  { id: 20, src: "/images/gallery/ppt2_023.jpg", alt: "자연 체험", category: "자연체험" },
  { id: 21, src: "/images/gallery/ppt2_031.jpg", alt: "자연 체험", category: "자연체험" },
  { id: 22, src: "/images/gallery/ppt2_033.jpg", alt: "자연 체험", category: "자연체험" },
  { id: 23, src: "/images/gallery/ppt2_034.jpg", alt: "자연 체험", category: "자연체험" },
  { id: 24, src: "/images/gallery/ppt2_036.jpg", alt: "자연 체험", category: "자연체험" },
  { id: 25, src: "/images/gallery/ppt2_037.jpg", alt: "자연 체험", category: "자연체험" },
  { id: 26, src: "/images/gallery/ppt2_038.jpg", alt: "자연 체험", category: "자연체험" },

  // 행사
  { id: 27, src: "/images/gallery/ppt2_039.jpg", alt: "행사", category: "행사" },
  { id: 28, src: "/images/gallery/ppt2_044.jpg", alt: "행사", category: "행사" },
  { id: 29, src: "/images/gallery/ppt2_045.jpg", alt: "행사", category: "행사" },
  { id: 30, src: "/images/gallery/ppt2_046.jpg", alt: "행사", category: "행사" },
  { id: 31, src: "/images/gallery/ppt2_070.jpg", alt: "행사", category: "행사" },
];

export const categories: GalleryCategory[] = ["전체", "교육활동", "자연체험", "행사"];
