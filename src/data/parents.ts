export type ParentProgram = {
  id: string;
  title: string;
  emoji: string;
  color: string;
  headline?: string;
  paragraphs: string[];
};

export const parentPrograms: ParentProgram[] = [
  {
    id: "family",
    title: "가정 연계교육",
    emoji: "🏠",
    color: "#5BB85D",
    headline: "가정과 유치원이 함께할 때 아이의 행복은 더욱 커집니다",
    paragraphs: [
      "유아의 건강한 성장을 위해 가정과 유치원의 긴밀한 협력이 중요합니다.",
      "동산유치원은 가정통신문, 상담, 학부모 참여수업, 부모교육 등을 통해 유아의 생활과 발달을 함께 나누고 있습니다.",
      "학부모님의 의견에 귀 기울이며 서로 신뢰하고 소통하는 교육공동체를 만들어가겠습니다.",
    ],
  },
  {
    id: "counseling",
    title: "학부모 상담",
    emoji: "💬",
    color: "#4A9EE0",
    paragraphs: [
      "아이의 유치원 생활과 발달 모습을 솔직하고 따뜻하게 나누는 시간입니다.",
      "잘하는 모습뿐 아니라 어려움을 느끼는 부분도 함께 살펴보며, 아이에게 필요한 도움을 가정과 유치원이 함께 찾아갑니다.",
      "상담 내용은 소중히 보호하며 아이의 행복과 성장을 가장 먼저 생각합니다.",
    ],
  },
  {
    id: "happy-class",
    title: "부모 행복교실",
    emoji: "🌷",
    color: "#E96BA8",
    paragraphs: [
      "아이의 발달 특성, 놀이 지원, 생활 습관, 건강과 안전 등 자녀 양육에 도움이 되는 다양한 정보를 제공합니다.",
      "부모님께서 아이의 마음을 더욱 깊이 이해하고 따뜻하게 소통할 수 있도록 함께 배우고 성장합니다.",
    ],
  },
  {
    id: "open-class",
    title: "학부모 참여수업",
    emoji: "👨‍👩‍👧",
    color: "#F4A93B",
    paragraphs: [
      "아이와 부모님이 유치원에서 함께 놀이하며 서로의 마음을 가까이 느낄 수 있는 시간을 마련합니다.",
      "아이에게는 자랑스럽고 행복한 추억이 되고, 부모님께는 아이의 유치원 생활을 이해하는 특별한 시간이 됩니다.",
    ],
  },
];
