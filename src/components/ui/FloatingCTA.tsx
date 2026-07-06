"use client";

import { Phone } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-4 z-50 md:hidden">
      <a
        href={siteConfig.phoneHref}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#F47B5A] shadow-lg hover:shadow-xl transition-shadow"
        aria-label="전화 문의"
      >
        <Phone className="w-6 h-6 text-white" />
      </a>
    </div>
  );
}
