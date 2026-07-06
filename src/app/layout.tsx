import type { Metadata } from "next";
import { Noto_Sans_KR, Jua } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/seo/JsonLd";
import { siteConfig } from "@/data/site";

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
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.slogan}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: "동산유치원, 유치원, 입학, 놀이중심교육, 자연체험, 소규모유치원",
  openGraph: {
    locale: "ko_KR",
    type: "website",
    siteName: siteConfig.name,
    url: siteConfig.url,
    title: `${siteConfig.name} | ${siteConfig.slogan}`,
    description: "동산유치원은 놀이와 자연 속에서 아이가 스스로 자랄 수 있도록 돕습니다.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.slogan}`,
    description: "동산유치원은 놀이와 자연 속에서 아이가 스스로 자랄 수 있도록 돕습니다.",
    images: ["/images/og-image.jpg"],
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
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
