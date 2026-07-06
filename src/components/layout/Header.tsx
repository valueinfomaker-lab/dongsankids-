"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";

const navItems = [
  { label: "홈", href: "/" },
  { label: "유치원 소개", href: "/about" },
  { label: "교육과정", href: "/curriculum" },
  { label: "하루 일과", href: "/daily" },
  { label: "입학안내", href: "/admission" },
  { label: "문의", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 메뉴 열릴 때 스크롤 방지
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md" : "bg-white/90 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* 로고 */}
          <Link href="/" className="flex items-center" onClick={() => setMenuOpen(false)}>
            <Image
              src="/images/logo.jpg"
              alt="동산유치원 로고"
              width={140}
              height={56}
              className="h-14 w-auto object-contain"
              priority
            />
          </Link>

          {/* 데스크톱 네비게이션 */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-[#1E293B] hover:text-[#4A9EE0] transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* 데스크톱 CTA + 전화번호 */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={siteConfig.phoneHref}
              className="flex items-center gap-1 text-sm text-[#64748B] hover:text-[#4A9EE0] transition-colors"
            >
              <Phone className="w-4 h-4" />
              {siteConfig.phone}
            </a>
            <a
              href={siteConfig.phoneHref}
              className="bg-[#F47B5A] hover:bg-[#e5633f] text-white text-sm font-medium px-5 py-2 rounded-full transition-colors"
            >
              전화 문의
            </a>
          </div>

          {/* 모바일: 전화 + 햄버거 */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href={siteConfig.phoneHref}
              className="flex items-center justify-center w-9 h-9 rounded-full bg-[#F0F5FF] text-[#4A9EE0]"
              aria-label="전화 연결"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center justify-center w-9 h-9 rounded-full bg-[#F0F5FF] text-[#1E293B]"
              aria-label="메뉴 열기"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* 모바일 드로어 */}
      <div
        className={`fixed inset-0 z-30 md:hidden transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* 배경 오버레이 */}
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setMenuOpen(false)}
        />
        {/* 드로어 패널 */}
        <nav
          className={`absolute right-0 top-0 h-full w-72 bg-white shadow-2xl flex flex-col transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="h-16 flex items-center justify-between px-6 border-b border-gray-100">
            <Image src="/images/logo.jpg" alt="동산유치원 로고" width={90} height={36} className="h-9 w-auto object-contain" />
            <button onClick={() => setMenuOpen(false)} aria-label="메뉴 닫기">
              <X className="w-5 h-5 text-[#64748B]" />
            </button>
          </div>
          <ul className="flex-1 overflow-y-auto py-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-6 py-4 text-base font-medium text-[#1E293B] hover:bg-[#F0F5FF] hover:text-[#4A9EE0] transition-colors border-b border-gray-50"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="p-6 border-t border-gray-100">
            <a
              href={siteConfig.phoneHref}
              onClick={() => setMenuOpen(false)}
              className="block w-full text-center bg-[#F47B5A] hover:bg-[#e5633f] text-white font-medium py-3 rounded-full transition-colors"
            >
              📞 {siteConfig.phone}
            </a>
          </div>
        </nav>
      </div>

      {/* 헤더 높이만큼 여백 */}
      <div className="h-16" />
    </>
  );
}
