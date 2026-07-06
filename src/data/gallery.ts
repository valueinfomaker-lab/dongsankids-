export type GalleryCategory = "전체" | "교육활동" | "자연체험" | "행사";

export interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: Exclude<GalleryCategory, "전체">;
}

export const galleryItems: GalleryItem[] = [
  // 교육활동
  { id: 1,  src: "/images/gallery/ppt2_009.jpg", alt: "교실에서 그림책을 읽는 아이들", category: "교육활동" },
  { id: 2,  src: "/images/gallery/ppt2_010.jpg", alt: "책상에 앉아 그림책을 읽는 아이들", category: "교육활동" },
  { id: 3,  src: "/images/gallery/ppt2_012.jpg", alt: "미역을 만지며 탐색하는 아이들", category: "교육활동" },
  { id: 4,  src: "/images/gallery/ppt2_014.jpg", alt: "색연필로 그림을 그리는 아이", category: "교육활동" },
  { id: 5,  src: "/images/gallery/ppt2_016.jpg", alt: "그림 그리기 활동을 하는 아이들", category: "교육활동" },
  { id: 6,  src: "/images/gallery/ppt2_055.jpg", alt: "차량 운전석에 앉아보는 안전 체험", category: "교육활동" },
  { id: 7,  src: "/images/gallery/ppt2_056.jpg", alt: "고글을 쓰고 발자국 길을 걷는 아이", category: "교육활동" },
  { id: 8,  src: "/images/gallery/ppt2_057.jpg", alt: "강당에서 안전교육을 듣는 아이들", category: "교육활동" },
  { id: 9,  src: "/images/gallery/ppt2_058.jpg", alt: "구명조끼를 입고 하는 수상안전 체험", category: "교육활동" },
  { id: 10, src: "/images/gallery/ppt2_060.jpg", alt: "교통안전 체험관을 걷는 아이들", category: "교육활동" },
  { id: 11, src: "/images/gallery/ppt2_061.jpg", alt: "심폐소생술 안전교육 시연 모습", category: "교육활동" },
  { id: 12, src: "/images/gallery/ppt2_063.jpg", alt: "공책에 글씨를 쓰는 아이", category: "교육활동" },
  { id: 13, src: "/images/gallery/ppt2_065.jpg", alt: "감사 일기 그림이 담긴 공책", category: "교육활동" },
  { id: 14, src: "/images/gallery/ppt2_066.jpg", alt: "그림일기를 쓰는 아이", category: "교육활동" },
  { id: 15, src: "/images/gallery/dance.jpg", alt: "강당에서 율동하는 아이들", category: "교육활동" },

  // 자연체험
  { id: 16, src: "/images/gallery/ppt2_019.jpg", alt: "성 모형에서 공 던지기 놀이하는 아이들", category: "자연체험" },
  { id: 17, src: "/images/gallery/ppt2_020.jpg", alt: "성벽 무대 앞에서 포즈하는 아이들", category: "자연체험" },
  { id: 18, src: "/images/gallery/ppt2_021.jpg", alt: "닭 머리띠를 쓰고 동극 놀이하는 아이들", category: "자연체험" },
  { id: 19, src: "/images/gallery/ppt2_022.jpg", alt: "수레를 끌며 동극 놀이하는 아이", category: "자연체험" },
  { id: 20, src: "/images/gallery/ppt2_023.jpg", alt: "독서 골든벨 메달을 받은 아이들", category: "자연체험" },
  { id: 21, src: "/images/gallery/ppt2_031.jpg", alt: "책꽂이에서 그림책을 고르는 아이", category: "자연체험" },
  { id: 22, src: "/images/gallery/ppt2_033.jpg", alt: "스케치북에 토끼를 그리는 아이", category: "자연체험" },
  { id: 23, src: "/images/gallery/ppt2_034.jpg", alt: "무지개와 꽃을 그린 어린이 그림", category: "자연체험" },
  { id: 24, src: "/images/gallery/ppt2_036.jpg", alt: "쇼앤텔에서 공룡 책을 소개하는 아이", category: "자연체험" },
  { id: 25, src: "/images/gallery/ppt2_037.jpg", alt: "쇼앤텔 시간에 발표하는 아이", category: "자연체험" },
  { id: 26, src: "/images/gallery/ppt2_038.jpg", alt: "마이크를 들고 발표하는 아이", category: "자연체험" },

  // 행사
  { id: 27, src: "/images/gallery/ppt2_039.jpg", alt: "지도를 보며 발표 수업하는 아이들", category: "행사" },
  { id: 28, src: "/images/gallery/ppt2_044.jpg", alt: "요리사 모자를 쓰고 간식 만드는 아이들", category: "행사" },
  { id: 29, src: "/images/gallery/ppt2_045.jpg", alt: "떡 만들기 체험을 하는 아이", category: "행사" },
  { id: 30, src: "/images/gallery/ppt2_046.jpg", alt: "직접 만든 요리를 맛보는 아이들", category: "행사" },
  { id: 31, src: "/images/gallery/ppt2_070.jpg", alt: "알록달록한 동산유치원 건물 외관", category: "행사" },
];

export const categories: GalleryCategory[] = ["전체", "교육활동", "자연체험", "행사"];
