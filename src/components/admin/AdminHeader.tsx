"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function AdminHeader() {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin");
  }

  return (
    <header className="bg-white border-b border-[#E2E8F0] px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Image src="/images/logo.jpg" alt={siteConfig.name} width={36} height={36} className="rounded-lg" />
        <span className="font-bold text-[#1E293B]">{siteConfig.name} 관리자</span>
      </div>
      <button
        onClick={handleLogout}
        className="flex items-center gap-2 text-sm text-[#64748B] hover:text-[#1E293B] transition-colors"
      >
        <LogOut className="w-4 h-4" />
        로그아웃
      </button>
    </header>
  );
}
