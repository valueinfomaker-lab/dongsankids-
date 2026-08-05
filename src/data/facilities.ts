export const facilitiesIntro = {
  title: "안전하고 쾌적한 공간에서 마음껏 꿈을 키웁니다",
  paragraphs: [
    "동산유치원은 유아의 안전과 건강을 최우선으로 고려하여 밝고 쾌적한 교육환경을 조성하고 있습니다.",
    "각 교실은 유아가 스스로 놀잇감을 선택하고 다양한 놀이를 펼칠 수 있도록 구성되어 있으며, 유아의 흥미와 놀이 주제에 따라 공간을 유연하게 변화시킵니다.",
  ],
  image: "/images/facilities/overview.jpg",
};

export type Facility = {
  id: string;
  title: string;
  emoji: string;
  color: string;
  headline?: string;
  paragraphs: string[];
  image?: string;
};

export const facilities: Facility[] = [
  {
    id: "classroom",
    title: "교실",
    emoji: "🏫",
    color: "#4A9EE0",
    headline: "따뜻하고 밝은 교실",
    paragraphs: [
      "햇빛과 신선한 공기가 머무는 쾌적한 교실에서 아이들이 편안하게 생활합니다.",
      "역할놀이, 쌓기놀이, 미술, 언어, 과학 등 다양한 놀이를 즐길 수 있도록 연령과 발달에 적합한 교구와 자료를 준비합니다.",
    ],
  },
  {
    id: "indoor-playground",
    title: "실내 놀이공간",
    emoji: "🤸",
    color: "#5BB85D",
    paragraphs: [
      "날씨와 관계없이 유아들이 안전하게 신체활동과 협동놀이를 즐길 수 있는 공간입니다.",
      "대근육 활동, 음악과 움직임, 공동체 놀이, 행사 등 다양한 활동이 이루어집니다.",
    ],
  },
  {
    id: "kitchen",
    title: "조리실",
    emoji: "🍚",
    color: "#F47B5A",
    paragraphs: [
      "위생적이고 안전한 급식 제공을 위해 조리시설과 식재료를 철저히 관리합니다.",
      "정기적인 위생 점검과 소독을 실시하고 안전한 식생활 환경을 유지합니다.",
    ],
  },
];
