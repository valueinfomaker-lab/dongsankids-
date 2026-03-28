export type ScheduleItem = {
  time: string;
  label: string;
  icon: string;
  desc: string;
  photo?: string;
};

export const schedule: ScheduleItem[] = [
  { time: "07:30", label: "등원", icon: "🌅", desc: "등원 및 자유선택 활동" },
  { time: "09:00", label: "아침 모임", icon: "🌞", desc: "인사 나누기, 날씨·날짜 알기" },
  { time: "09:30", label: "자유놀이", icon: "🎮", desc: "실내 자유선택 활동" },
  { time: "10:30", label: "이야기 나누기", icon: "💬", desc: "주제 탐구, 언어·수학 활동" },
  { time: "11:30", label: "바깥 활동", icon: "🌳", desc: "실외놀이, 텃밭, 산책" },
  { time: "12:30", label: "점심 식사", icon: "🍱", desc: "영양사 선생님의 균형 잡힌 식단" },
  { time: "13:30", label: "낮잠·휴식", icon: "😴", desc: "휴식 및 조용한 활동" },
  { time: "14:30", label: "오후 활동", icon: "🎨", desc: "특성화 교육, 프로젝트 활동" },
  { time: "15:30", label: "간식·하원 준비", icon: "🧁", desc: "간식 먹기, 하원 준비" },
  { time: "16:00", label: "방과후 활동", icon: "⭐", desc: "방과후 특기활동 (선택)" },
  { time: "19:30", label: "하원", icon: "🌙", desc: "통학버스 및 개별 하원" },
];

export const busRoutes = [
  {
    id: "A",
    name: "A코스",
    direction: "20M 도로 방향",
    stops: ["남문시장 방면", "남부여성발전센터", "솔리힐아파트"],
  },
  {
    id: "B",
    name: "B코스",
    direction: "가산동 · 독산역 방향",
    stops: ["가산초등학교", "두산아파트", "이편한세상", "진도아파트", "현대아파트", "독산역롯데캐슬"],
  },
  {
    id: "C",
    name: "C코스",
    direction: "동작 방향",
    stops: ["뉴포레", "협성휴포레시그니처", "동작성원상떼빌아파트"],
  },
  {
    id: "D",
    name: "D코스",
    direction: "조원동 방향",
    stops: ["조원초등학교", "모두의학교", "목화아파트", "미성초등학교"],
  },
];
