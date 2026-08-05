export type GalleryCategory = "전체" | "교육활동" | "자연체험" | "행사";

export interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: Exclude<GalleryCategory, "전체">;
}

export const galleryItems: GalleryItem[] = [
  // 교육활동
  { id: 1,  src: "/images/programs/play-1.jpg", alt: "교실에서 역할놀이를 하는 아이들", category: "교육활동" },
  { id: 2,  src: "/images/programs/reading-1.jpg", alt: "그림책을 읽는 아이들", category: "교육활동" },
  { id: 3,  src: "/images/programs/reading-2.jpg", alt: "책을 골라 읽는 독서 시간", category: "교육활동" },
  { id: 4,  src: "/images/programs/reading-3.jpg", alt: "친구와 함께 그림책을 보는 아이들", category: "교육활동" },
  { id: 5,  src: "/images/programs/reading-4.jpg", alt: "독서 활동에 집중하는 아이", category: "교육활동" },
  { id: 6,  src: "/images/programs/reading-5.jpg", alt: "책과 연계한 표현활동 모습", category: "교육활동" },
  { id: 7,  src: "/images/programs/character-1.jpg", alt: "친구와 마음을 나누는 인성교육 활동", category: "교육활동" },
  { id: 8,  src: "/images/programs/character-2.jpg", alt: "함께 어울리며 배려를 배우는 아이들", category: "교육활동" },
  { id: 9,  src: "/images/programs/character-3.jpg", alt: "고마운 마음을 표현하는 활동", category: "교육활동" },
  { id: 10, src: "/images/programs/character-4.jpg", alt: "바른 인성을 배우는 놀이 활동", category: "교육활동" },
  { id: 11, src: "/images/programs/art-1.jpg", alt: "미술 재료로 자유롭게 표현하는 아이들", category: "교육활동" },
  { id: 12, src: "/images/programs/art-2.jpg", alt: "예술 표현활동을 하는 아이들", category: "교육활동" },
  { id: 13, src: "/images/programs/art-3.jpg", alt: "완성한 작품을 소개하는 아이", category: "교육활동" },
  { id: 14, src: "/images/programs/transition-1.jpg", alt: "초등학교 생활을 준비하는 유초연계 활동", category: "교육활동" },
  { id: 15, src: "/images/programs/transition-2.jpg", alt: "자신의 생각을 발표하는 아이", category: "교육활동" },
  { id: 16, src: "/images/programs/transition-3.jpg", alt: "학교생활 이야기를 나누는 아이들", category: "교육활동" },
  { id: 17, src: "/images/afterschool/block-1.jpg", alt: "블록으로 만들기 활동을 하는 아이", category: "교육활동" },
  { id: 18, src: "/images/afterschool/block-2.jpg", alt: "친구와 협력하며 블록을 쌓는 아이들", category: "교육활동" },
  { id: 19, src: "/images/afterschool/block-3.jpg", alt: "블록 작품을 완성한 아이", category: "교육활동" },

  // 자연체험
  { id: 20, src: "/images/programs/eco-1.jpg", alt: "자연을 가까이에서 관찰하는 생태교육", category: "자연체험" },
  { id: 21, src: "/images/programs/eco-2.jpg", alt: "자연물을 탐색하는 아이들", category: "자연체험" },
  { id: 22, src: "/images/curriculum/field-trip-1.jpg", alt: "교실 밖 세상을 경험하는 현장체험학습", category: "자연체험" },
  { id: 23, src: "/images/curriculum/field-trip-2.jpg", alt: "현장체험학습에서 즐거워하는 아이들", category: "자연체험" },

  // 행사
  { id: 24, src: "/images/afterschool/kpop-1.jpg", alt: "신나는 음악에 맞춰 K-POP 율동을 하는 아이들", category: "행사" },
  { id: 25, src: "/images/afterschool/kpop-2.jpg", alt: "무대에서 자신 있게 춤추는 아이들", category: "행사" },
  { id: 26, src: "/images/afterschool/pottery-1.jpg", alt: "흙을 빚으며 도예 작품을 만드는 아이들", category: "행사" },
  { id: 27, src: "/images/afterschool/pottery-2.gif", alt: "도예 활동에 집중하는 아이", category: "행사" },
  { id: 28, src: "/images/afterschool/pe-1.jpg", alt: "체육 활동으로 기초 체력을 기르는 아이들", category: "행사" },
  { id: 29, src: "/images/afterschool/pe-2.jpg", alt: "즐겁게 신체활동에 참여하는 아이들", category: "행사" },
];

export const categories: GalleryCategory[] = ["전체", "교육활동", "자연체험", "행사"];
