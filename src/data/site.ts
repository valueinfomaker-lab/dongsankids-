export const siteConfig = {
  name: "동산유치원",
  slogan: "아이가 행복한 곳, 부모가 안심하는 곳",
  description:
    "동산유치원은 놀이와 자연 속에서 아이가 스스로 자랄 수 있도록 돕습니다. 4~7세 소규모 놀이중심 유치원. 입학 상담 문의 환영합니다.",
  phone: "02-866-6571",
  phoneHref: "tel:02-866-6571",
  address: "서울시 금천구 시흥대로 152길 35",
  hours: "07:30 ~ 19:30",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://dongsanweb.vercel.app",
} as const;
