import Link from "next/link";
import { School, Lightbulb, Sun, Footprints } from "lucide-react";

const links = [
  {
    icon: School,
    title: "유치원 소개",
    desc: "아이들의 행복한 하루를 정성껏 만들어가는 동산유치원의 이야기를 만나보세요.",
    href: "/about",
    color: "#4A9EE0",
    bg: "#EBF5FF",
  },
  {
    icon: Lightbulb,
    title: "교육 이야기",
    desc: "놀이와 경험을 통해 생각과 마음이 자라는 교육과정을 소개합니다.",
    href: "/curriculum",
    color: "#5BB85D",
    bg: "#F0FFF4",
  },
  {
    icon: Sun,
    title: "아이들의 하루",
    desc: "웃고, 뛰놀고, 배우며 성장하는 아이들의 소중한 순간을 만나보세요.",
    href: "/daily",
    color: "#F4A93B",
    bg: "#FFF8EB",
  },
  {
    icon: Footprints,
    title: "행복한 첫걸음",
    desc: "입학과 교육과정에 관한 자세한 내용을 안내해 드립니다.",
    href: "/admission",
    color: "#F47B5A",
    bg: "#FFF5F2",
  },
];

export default function QuickLinks() {
  return (
    <section className="py-16 px-4 bg-[#FAFBFC]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group rounded-2xl p-6 bg-white border border-[#E2E8F0] hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                style={{ backgroundColor: link.bg }}
              >
                <link.icon className="w-7 h-7" style={{ color: link.color }} />
              </div>
              <h3
                className="font-bold text-lg mb-2 group-hover:underline decoration-2 underline-offset-4"
                style={{ color: link.color }}
              >
                {link.title}
              </h3>
              <p className="text-sm text-[#64748B] leading-relaxed">{link.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
