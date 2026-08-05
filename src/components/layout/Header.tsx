"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { siteConfig } from "@/data/site";

type NavChild = { label: string; href: string };
type NavItem = { label: string; href: string; children?: NavChild[] };

const navItems: NavItem[] = [
  { label: "홈", href: "/" },
  {
    label: "유치원 소개",
    href: "/about",
    children: [
      { label: "원장인사말", href: "/about#greeting" },
      { label: "설립이념", href: "/about#philosophy" },
      { label: "원훈", href: "/about#motto" },
      { label: "교육목표", href: "/about#goals" },
    ],
  },
  {
    label: "교육환경",
    href: "/facilities",
    children: [
      { label: "시설소개", href: "/facilities#intro" },
      { label: "교실", href: "/facilities#classroom" },
      { label: "실내 놀이공간", href: "/facilities#indoor-playground" },
      { label: "조리실", href: "/facilities#kitchen" },
    ],
  },
  {
    label: "교육과정",
    href: "/curriculum",
    children: [
      { label: "교육과정안내", href: "/curriculum#intro" },
      { label: "행복한하루", href: "/curriculum#happy-day" },
      { label: "교외체험학습", href: "/curriculum#field-trip" },
    ],
  },
  {
    label: "특색교육",
    href: "/programs",
    children: [
      { label: "놀이교육", href: "/programs#play" },
      { label: "프로젝트교육", href: "/programs#project" },
      { label: "생태교육", href: "/programs#eco" },
      { label: "인성교육", href: "/programs#character" },
      { label: "독서교육", href: "/programs#reading" },
      { label: "예술교육", href: "/programs#art" },
      { label: "유·초연계교육", href: "/programs#transition" },
    ],
  },
  {
    label: "방과후과정",
    href: "/afterschool",
    children: [
      { label: "방과후과정안내", href: "/afterschool#intro" },
      { label: "방과후활동", href: "/afterschool#activities" },
      { label: "특성화프로그램", href: "/afterschool#specialty" },
    ],
  },
  {
    label: "학부모참여",
    href: "/parents",
    children: [
      { label: "가정연계교육", href: "/parents#family" },
      { label: "학부모상담", href: "/parents#counseling" },
      { label: "부모행복교실", href: "/parents#happy-class" },
      { label: "학부모참여수업", href: "/parents#open-class" },
    ],
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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

  // ESC 키로 드로어 닫기
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  // 라우트 변경 시 드로어 닫기 (렌더 중 상태 보정 패턴)
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    if (menuOpen) setMenuOpen(false);
  }

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
          <nav className="hidden md:flex items-center gap-4 lg:gap-5">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.href} className="relative group">
                  <Link
                    href={item.href}
                    className="flex items-center gap-0.5 text-sm text-[#1E293B] hover:text-[#4A9EE0] transition-colors font-medium py-2"
                  >
                    {item.label}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </Link>
                  <div className="absolute left-1/2 -translate-x-1/2 top-full hidden group-hover:block group-focus-within:block">
                    <div className="bg-white rounded-2xl shadow-lg border border-[#E2E8F0] py-2 w-44 mt-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-5 py-2.5 text-sm text-[#1E293B] hover:bg-[#F0F5FF] hover:text-[#4A9EE0] transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-[#1E293B] hover:text-[#4A9EE0] transition-colors font-medium"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* 데스크톱 CTA */}
          <div className="hidden md:flex items-center">
            <a
              href={siteConfig.phoneHref}
              className="flex items-center gap-1.5 bg-[#F47B5A] hover:bg-[#e5633f] text-white text-sm font-medium px-5 py-2 rounded-full transition-colors"
            >
              <Phone className="w-4 h-4" />
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
              aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
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
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="모바일 메뉴"
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
                  className="block px-6 py-3.5 text-base font-bold text-[#1E293B] hover:bg-[#F0F5FF] hover:text-[#4A9EE0] transition-colors border-b border-gray-50"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pb-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMenuOpen(false)}
                        className="block pl-10 pr-6 py-2 text-sm text-[#64748B] hover:bg-[#F0F5FF] hover:text-[#4A9EE0] transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
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
