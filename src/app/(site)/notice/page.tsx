import type { Metadata } from "next";
import Link from "next/link";
import { Pin } from "lucide-react";
import { readNotices, sortNotices } from "@/lib/notice-blob";

export const metadata: Metadata = {
  title: "공지사항",
  description: "동산유치원의 행사, 휴원 안내 등 주요 소식을 알려드립니다.",
};

export default async function NoticePage() {
  const notices = sortNotices(await readNotices());

  return (
    <div>
      {/* 페이지 헤더 */}
      <section className="bg-gradient-to-br from-[#F5F0FF] to-[#EBF5FF] py-16 px-4 text-center">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-[#1E293B] mb-3">
          공지사항
        </h1>
        <p className="text-[#64748B] text-lg">
          동산유치원의 소식을 전해드립니다
        </p>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          {notices.length === 0 ? (
            <p className="text-center text-[#64748B] py-16">
              등록된 공지사항이 없습니다.
            </p>
          ) : (
            <ul className="divide-y divide-[#F1F5F9] border-y border-[#F1F5F9]">
              {notices.map((notice) => (
                <li key={notice.id}>
                  <Link
                    href={`/notice/${notice.id}`}
                    className="flex items-center gap-3 px-2 py-5 hover:bg-[#FAFBFF] transition-colors"
                  >
                    {notice.pinned && (
                      <span className="flex items-center gap-1 flex-shrink-0 text-xs font-bold text-[#F47B5A] bg-[#FFF5F2] px-2.5 py-1 rounded-full">
                        <Pin className="w-3 h-3" />
                        고정
                      </span>
                    )}
                    <span className="flex-1 font-medium text-[#1E293B] truncate">
                      {notice.title}
                    </span>
                    <time
                      dateTime={notice.date}
                      className="flex-shrink-0 text-sm text-[#94A3B8]"
                    >
                      {notice.date}
                    </time>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </div>
  );
}
