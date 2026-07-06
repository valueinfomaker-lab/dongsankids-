import type { Metadata } from "next";
import { Noto_Sans_KR, Jua } from "next/font/google";
import "./globals.css";

const noto = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto",
  display: "swap",
});

const jua = Jua({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-jua",
  display: "swap",
});

export const metadata: Metadata = {
  title: "동산유치원 | 아이가 행복한 곳, 부모가 안심하는 곳",
  description:
    "동산유치원은 놀이와 자연 속에서 아이가 스스로 자랄 수 있도록 돕습니다. 4~7세 소규모 놀이중심 유치원. 입학 상담 문의 환영합니다.",
  keywords: "동산유치원, 유치원, 입학, 놀이중심교육, 자연체험, 소규모유치원",
  openGraph: {
    locale: "ko_KR",
    type: "website",
    title: "동산유치원 | 아이가 행복한 곳, 부모가 안심하는 곳",
    description:
      "동산유치원은 놀이와 자연 속에서 아이가 스스로 자랄 수 있도록 돕습니다.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${noto.variable} ${jua.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
