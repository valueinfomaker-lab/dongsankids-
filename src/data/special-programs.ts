export type SpecialProgram = {
  id: string;
  title: string;
  headline: string;
  emoji: string;
  color: string;
  paragraphs: string[];
  images: string[];
};

export const specialPrograms: SpecialProgram[] = [
  {
    id: "play",
    title: "아이가 주인공이 되는 놀이교육",
    headline: "아이의 작은 관심에서 큰 배움이 시작됩니다",
    emoji: "🎈",
    color: "#4A9EE0",
    paragraphs: [
      "아이들이 관심을 보이는 사물과 이야기, 놀이에서 교육을 시작합니다.",
      "교사는 아이가 놀이를 스스로 선택하고 이어갈 수 있도록 기다려주며, 필요한 자료와 환경을 지원합니다.",
      "아이들은 놀이 속에서 자신의 생각을 표현하고 친구와 협력하며 새로운 것을 발견하는 기쁨을 느낍니다.",
    ],
    images: ["/images/programs/play-1.jpg"],
  },
  {
    id: "eco",
    title: "자연과 마음을 나누는 생태교육",
    headline: "자연 속에서 몸과 마음이 건강하게 자랍니다",
    emoji: "🌿",
    color: "#5BB85D",
    paragraphs: [
      "계절에 따라 달라지는 햇빛과 바람, 꽃과 나무, 작은 생명들을 가까이에서 만나봅니다.",
      "산책, 텃밭 가꾸기, 숲 체험, 자연물 놀이를 통해 생명의 소중함을 느끼고 자연을 보호하는 따뜻한 마음을 키웁니다.",
    ],
    images: ["/images/programs/eco-1.jpg", "/images/programs/eco-2.jpg"],
  },
  {
    id: "character",
    title: "마음이 자라는 인성교육",
    headline: "나를 사랑하고 친구를 존중합니다",
    emoji: "💛",
    color: "#FFD34E",
    paragraphs: [
      "인사하기, 차례 기다리기, 친구의 이야기를 들어주기, 고마운 마음 표현하기 등 일상생활 속에서 바른 인성을 배웁니다.",
      "갈등이 생겼을 때 자신의 마음을 말하고 친구의 생각을 들어보며 서로 좋은 해결 방법을 찾아가도록 돕습니다.",
    ],
    images: [
      "/images/programs/character-1.jpg",
      "/images/programs/character-2.jpg",
      "/images/programs/character-3.jpg",
      "/images/programs/character-4.jpg",
    ],
  },
  {
    id: "reading",
    title: "독서교육",
    headline: "책과 함께 생각이 자라는 아이",
    emoji: "📚",
    color: "#F47B5A",
    paragraphs: [
      "매일 책을 가까이하는 환경을 조성하여 유아가 책 읽기의 즐거움을 느끼도록 합니다.",
      "그림책 읽기, 동화 감상, 책과 연계한 놀이, 독후 표현활동 등을 통해 상상력과 언어 표현력을 키웁니다.",
      "책 속에서 다양한 사람과 세상을 만나며 다른 사람의 생각과 감정을 이해하는 마음도 함께 기릅니다.",
    ],
    images: [
      "/images/programs/reading-1.jpg",
      "/images/programs/reading-2.jpg",
      "/images/programs/reading-3.jpg",
      "/images/programs/reading-4.jpg",
      "/images/programs/reading-5.jpg",
    ],
  },
  {
    id: "art",
    title: "자유롭게 표현하는 예술교육",
    headline: "정답 없이 마음껏 상상하고 표현합니다",
    emoji: "🎨",
    color: "#E96BA8",
    paragraphs: [
      "다양한 미술 재료와 음악, 움직임, 극놀이를 통해 자신의 생각과 느낌을 자유롭게 표현합니다.",
      "완성된 작품보다 표현하는 과정과 아이의 독창적인 생각을 소중히 여기고 따뜻하게 격려합니다.",
    ],
    images: [
      "/images/programs/art-1.jpg",
      "/images/programs/art-2.jpg",
      "/images/programs/art-3.jpg",
    ],
  },
  {
    id: "transition",
    title: "유·초 연계교육",
    headline: "설렘과 자신감으로 새로운 출발을 준비합니다",
    emoji: "🎒",
    color: "#4A9EE0",
    paragraphs: [
      "만 5세 아이들이 초등학교 생활을 두려워하지 않고 긍정적인 기대를 가질 수 있도록 돕습니다.",
      "초등학교 둘러보기, 학교생활 이야기 나누기, 준비물 챙기기, 자신의 생각 발표하기 등의 경험을 통해 자연스럽게 새로운 환경을 준비합니다.",
      "선행학습보다 스스로 생활하는 힘과 자신감, 친구와 함께하는 태도를 기르는 데 중점을 둡니다.",
    ],
    images: [
      "/images/programs/transition-1.jpg",
      "/images/programs/transition-2.jpg",
      "/images/programs/transition-3.jpg",
    ],
  },
];
