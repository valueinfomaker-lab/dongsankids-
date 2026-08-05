export const afterschoolIntro = {
  title: "교육과 돌봄이 함께하는 편안한 시간",
  paragraphs: [
    "방과후 과정은 교육과정 이후에도 아이들이 가정과 같은 편안함을 느끼며 안전하게 생활할 수 있도록 운영합니다.",
    "충분한 휴식과 자유놀이, 간식, 그림책 읽기, 실내외 활동을 조화롭게 운영하며 아이들의 건강 상태와 마음을 세심하게 살핍니다.",
    "아이들이 지치지 않고 즐거운 마음으로 하루를 마무리할 수 있도록 따뜻하게 돌보겠습니다.",
  ],
};

export const afterschoolActivities = [
  { label: "편안한 휴식", emoji: "😴" },
  { label: "자유로운 실내외 놀이", emoji: "🎈" },
  { label: "맛있고 건강한 간식", emoji: "🧁" },
  { label: "요일별활동 (미술)", emoji: "🎨" },
  { label: "요일별활동 (신체)", emoji: "🤸" },
  { label: "요일별활동 (한글)", emoji: "✏️" },
  { label: "요일별활동 (수학)", emoji: "🔢" },
  { label: "요일별활동 (음악)", emoji: "🎵" },
  { label: "안전한 귀가 지도", emoji: "🚌" },
];

export const specialtyIntro = {
  title: "아이의 가능성을 발견하고 꿈을 키워가는 특별한 배움",
  paragraphs: [
    "동산유치원은 유아의 흥미와 발달 수준을 고려한 다양한 특성화 프로그램을 운영하여 아이들이 즐겁게 배우고 스스로 성장하는 기쁨을 경험하도록 돕습니다.",
    "전문 강사와 함께하는 다양한 활동을 통해 신체, 예술, 창의, 감성 등 여러 영역을 균형 있게 발달시키며, 아이들의 잠재력과 자신감을 키워갑니다.",
  ],
};

export type SpecialtyProgram = {
  id: string;
  title: string;
  emoji: string;
  color: string;
  description: string;
  images: string[];
};

export const specialtyPrograms: SpecialtyProgram[] = [
  {
    id: "english",
    title: "영어",
    emoji: "🌎",
    color: "#4A9EE0",
    description:
      "노래와 율동, 동화, 게임 등 다양한 놀이 활동을 통해 영어를 자연스럽게 접하며, 외국어에 대한 흥미와 자신감을 키웁니다.",
    images: [],
  },
  {
    id: "kpop",
    title: "K-POP",
    emoji: "💃",
    color: "#E96BA8",
    description:
      "신나는 음악에 맞춰 몸을 자유롭게 표현하며 리듬감과 표현력을 기르고, 다양한 동작을 익히며 자신감과 즐겁게 참여하는 태도를 키웁니다.",
    images: ["/images/afterschool/kpop-1.jpg", "/images/afterschool/kpop-2.jpg"],
  },
  {
    id: "pe",
    title: "체육",
    emoji: "🤸",
    color: "#5BB85D",
    description:
      "다양한 신체활동과 놀이를 통해 기초 체력을 기르고, 균형감각과 협응력, 도전정신을 키우며 건강한 생활 습관을 형성합니다.",
    images: ["/images/afterschool/pe-1.jpg", "/images/afterschool/pe-2.jpg"],
  },
  {
    id: "pottery",
    title: "도예",
    emoji: "🏺",
    color: "#B0793B",
    description:
      "흙을 직접 만지고 빚으며 다양한 작품을 만들어 보는 활동을 통해 창의력과 소근육 발달을 돕고, 집중력과 성취감을 기릅니다.",
    images: ["/images/afterschool/pottery-1.jpg", "/images/afterschool/pottery-2.gif"],
  },
  {
    id: "senses",
    title: "오감퍼포먼스",
    emoji: "🌈",
    color: "#9B7FE8",
    description:
      "보고, 듣고, 만지고, 느끼고, 표현하는 다양한 오감 체험 활동을 통해 풍부한 감성과 창의력을 키우며 즐거운 놀이 속에서 배움을 경험합니다.",
    images: [],
  },
  {
    id: "block",
    title: "블록",
    emoji: "🧱",
    color: "#F47B5A",
    description:
      "다양한 블록을 활용하여 만들고 탐색하는 활동을 통해 공간지각력과 창의적 사고력을 기르고, 친구들과 함께 협력하며 문제를 해결하는 경험을 쌓습니다.",
    images: [
      "/images/afterschool/block-1.jpg",
      "/images/afterschool/block-2.jpg",
      "/images/afterschool/block-3.jpg",
    ],
  },
];
