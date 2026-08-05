// 크레용 손그림 낙서 SVG 세트 — 돈보스꼬 레퍼런스의 "크레용 낙서" 언어.
// 모두 장식용이므로 aria-hidden 처리.

type DoodleProps = {
  className?: string;
};

export function DoodleSun({ className = "" }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="32" cy="32" r="12" stroke="#F4A93B" strokeWidth="3" strokeLinecap="round" fill="#FFD34E" fillOpacity="0.35" />
      <path d="M32 10v6M32 48v6M10 32h6M48 32h6M17 17l4.4 4.4M42.6 42.6L47 47M47 17l-4.4 4.4M21.4 42.6L17 47" stroke="#F4A93B" strokeWidth="3" strokeLinecap="round" />
      <circle cx="27.5" cy="30" r="1.4" fill="#B0793B" />
      <circle cx="36.5" cy="30" r="1.4" fill="#B0793B" />
      <path d="M27 35.5c1.6 1.8 3.4 2.6 5 2.6s3.4-.8 5-2.6" stroke="#B0793B" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

export function DoodleCloud({ className = "" }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 96 52"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M22 42c-8 1-14-4-12.5-11C11 24.5 17 22 22 23.5 22.5 15 30 11 37 13.5 42 6.5 53 6 58.5 12c7-2.5 14 1 15 8.5 7 .5 11 6 9.5 12-1.5 5.5-7 8.5-13 7.5"
        stroke="#7FB8E8"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="#EBF5FF"
        fillOpacity="0.6"
      />
    </svg>
  );
}

export function DoodleFlower({ className = "" }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 48 64"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path d="M24 34v22" stroke="#5BB85D" strokeWidth="3" strokeLinecap="round" />
      <path d="M24 46c-4-1-8-4-9-8M24 50c4-1 7-3 8.5-6" stroke="#5BB85D" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="24" cy="20" r="5" fill="#FFD34E" stroke="#F4A93B" strokeWidth="2" />
      <path
        d="M24 8c2.5 0 4.5 2.5 3.5 5M33 12c2 1.8 1.8 5-.8 6.5M35 22c1 2.5-1 5.5-4 5.5M30 31c-1 2.5-4.5 3.2-6.4 1.3M18 31c-2.5-.5-4-4-2.5-6M13 21.5c-1-2.7 1.3-5.6 4.2-5.3M15.5 12c1.8-2.2 5.2-1.8 6.5.7"
        stroke="#E96BA8"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function DoodleButterfly({ className = "" }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 56 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path d="M28 16c-3-6-10-10-15-8-5.5 2-4.5 10 1 14-6 2-7.5 9-3 12 4.5 3 12 0 15-6" stroke="#9B7FE8" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M28 16c3-6 10-10 15-8 5.5 2 4.5 10-1 14 6 2 7.5 9 3 12-4.5 3-12 0-15-6" stroke="#9B7FE8" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M28 13v18" stroke="#6B4FB8" strokeWidth="3" strokeLinecap="round" />
      <path d="M26 12c-1.5-2-3-3.5-5-4M30 12c1.5-2 3-3.5 5-4" stroke="#6B4FB8" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// 제목 아래에 긋는 크레용 물결 밑줄
export function CrayonUnderline({
  className = "",
  color = "#FFD34E",
}: DoodleProps & { color?: string }) {
  return (
    <svg
      viewBox="0 0 120 10"
      preserveAspectRatio="none"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M3 6.5C20 3.5 38 8 58 5.5c18-2.2 40 2.5 59-1.5"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

// 색종이를 가위로 오린 듯한 스캘럽(물결) 섹션 경계
export function ScallopDivider({
  className = "",
  fill = "#FAFBFC",
}: DoodleProps & { fill?: string }) {
  const bumps = Array.from({ length: 20 }, (_, i) => {
    const x = i * 60;
    return `Q${x + 30},0 ${x + 60},22`;
  }).join(" ");
  return (
    <svg
      viewBox="0 0 1200 40"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      <path d={`M0,40 L0,22 ${bumps} L1200,40 Z`} fill={fill} />
    </svg>
  );
}
