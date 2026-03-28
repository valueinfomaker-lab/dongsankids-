import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Clock } from "lucide-react";

const quickLinks = [
  { label: "유치원 소개", href: "/about" },
  { label: "교육과정", href: "/curriculum" },
  { label: "하루 일과", href: "/daily" },
  { label: "입학안내", href: "/admission" },
  { label: "문의", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1E293B] text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 브랜드 */}
          <div>
            <div className="mb-4 inline-block bg-white rounded-xl p-2">
              <Image
                src="/images/logo.jpg"
                alt="동산유치원 로고"
                width={120}
                height={48}
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              아이가 행복한 곳,
              <br />
              부모가 안심하는 곳.
              <br />
              놀이와 자연 속에서 스스로 자랍니다.
            </p>
          </div>

          {/* 빠른 링크 */}
          <div>
            <h3 className="font-bold text-sm text-white/50 uppercase tracking-wider mb-4">
              바로가기
            </h3>
            <ul className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 연락처 */}
          <div>
            <h3 className="font-bold text-sm text-white/50 uppercase tracking-wider mb-4">
              연락처
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-white/70">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#4A9EE0]" />
                서울시 금천구 시흥대로 152길 35
              </li>
              <li>
                <a
                  href="tel:02-866-6571"
                  className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 flex-shrink-0 text-[#4A9EE0]" />
                  02-866-6571
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/70">
                <Clock className="w-4 h-4 flex-shrink-0 text-[#4A9EE0]" />
                운영시간 07:30 ~ 19:30
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <p>© 2026 동산유치원. All rights reserved.</p>
          <p>개인정보처리방침</p>
        </div>
      </div>
    </footer>
  );
}
