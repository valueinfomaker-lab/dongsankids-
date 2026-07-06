"use client";

import { useState } from "react";
import AdminHeader from "@/components/admin/AdminHeader";
import GalleryManager from "@/components/admin/GalleryManager";
import InquiryManager from "@/components/admin/InquiryManager";
import NoticeManager from "@/components/admin/NoticeManager";

const TABS = [
  { key: "gallery", label: "사진 관리" },
  { key: "inquiry", label: "입학 문의" },
  { key: "notice", label: "공지사항" },
] as const;

type TabKey = (typeof TABS)[number]["key"];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<TabKey>("gallery");

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <AdminHeader />

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* 섹션 탭 */}
        <div className="flex gap-2 mb-8 border-b border-[#E2E8F0]">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-5 py-3 text-sm font-bold transition-colors border-b-2 -mb-px ${
                activeTab === tab.key
                  ? "text-[#4A9EE0] border-[#4A9EE0]"
                  : "text-[#64748B] border-transparent hover:text-[#1E293B]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === "gallery" && <GalleryManager />}
        {activeTab === "inquiry" && <InquiryManager />}
        {activeTab === "notice" && <NoticeManager />}
      </div>
    </div>
  );
}
