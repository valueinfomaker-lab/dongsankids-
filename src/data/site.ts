export const siteConfig = {
  name: "동산유치원",
  slogan: "아이의 오늘이 행복한 유치원",
  subSlogan: "놀이로 배우고 사랑으로 성장합니다",
  description:
    "동산유치원은 아이 한 명, 한 명의 생각과 마음을 존중하며, 놀이와 다양한 경험을 통해 아이들이 행복하게 배우고 건강하게 성장할 수 있도록 함께합니다.",
  intro:
    "아이들의 생각을 존중하고, 놀이의 가치를 소중히 여기며, 가정과 함께 행복한 성장을 만들어갑니다.",
  phone: "02-866-6571",
  phoneHref: "tel:02-866-6571",
  fax: "02-866-6572",
  email: "dongsan0p@naver.com",
  address: "서울특별시 금천구 시흥대로 152길 35",
  hours: "07:30 ~ 19:30",
  principal: "서은화",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://dongsanweb.vercel.app",
} as const;
