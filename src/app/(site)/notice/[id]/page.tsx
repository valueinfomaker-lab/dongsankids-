import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Pin } from "lucide-react";
import { readNotices } from "@/lib/notice-blob";

interface NoticeDetailProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: NoticeDetailProps): Promise<Metadata> {
  const { id } = await params;
  const notice = (await readNotices()).find((n) => n.id === id);
  if (!notice) return { title: "공지사항" };

  return {
    title: notice.title,
    description: notice.body.slice(0, 80),
  };
}

export default async function NoticeDetailPage({ params }: NoticeDetailProps) {
  const { id } = await params;
  const notice = (await readNotices()).find((n) => n.id === id);
  if (!notice) notFound();

  return (
    <div>
      <section className="py-16 px-4 bg-white min-h-[60vh]">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/notice"
            className="inline-flex items-center gap-1 text-sm text-[#4A9EE0] hover:underline mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            공지사항 목록
          </Link>

          <div className="border-b border-[#F1F5F9] pb-6 mb-8">
            {notice.pinned && (
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#F47B5A] bg-[#FFF5F2] px-2.5 py-1 rounded-full mb-3">
                <Pin className="w-3 h-3" />
                고정
              </span>
            )}
            <h1 className="font-display text-2xl md:text-3xl font-bold text-[#1E293B] mb-3">
              {notice.title}
            </h1>
            <time dateTime={notice.date} className="text-sm text-[#94A3B8]">
              {notice.date}
            </time>
          </div>

          <div className="text-[#334155] leading-relaxed whitespace-pre-wrap">
            {notice.body}
          </div>
        </div>
      </section>
    </div>
  );
}
