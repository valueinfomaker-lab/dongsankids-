"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Trash2, Phone, MailOpen, Mail } from "lucide-react";
import type { InquiryItem } from "@/lib/inquiry-blob";
import ConfirmDialog from "@/components/admin/ConfirmDialog";

function formatDate(iso: string): string {
  return iso.slice(0, 16).replace("T", " ");
}

export default function InquiryManager() {
  const router = useRouter();
  const [items, setItems] = useState<InquiryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);

  const fetchItems = useCallback(async () => {
    try {
      const res = await fetch("/api/inquiry");
      if (res.status === 401) { router.push("/admin"); return; }
      const data = await res.json();
      setItems(data.items || []);
    } catch {
      // ignore
    } finally {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  async function toggleRead(item: InquiryItem) {
    const res = await fetch("/api/inquiry/update", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: item.id, read: !item.read }),
    });
    if (res.ok) {
      setItems((prev) =>
        prev.map((i) => (i.id === item.id ? { ...i, read: !item.read } : i))
      );
    }
  }

  async function handleDelete(id: string) {
    setDeleting(true);
    const res = await fetch("/api/inquiry/delete", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    setDeleting(false);
    setConfirmDeleteId(null);
    if (res.ok) setItems((prev) => prev.filter((i) => i.id !== id));
  }

  const unreadCount = items.filter((i) => !i.read).length;

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-bold text-[#1E293B] text-lg">입학 문의</h2>
        <span className="text-sm text-[#64748B]">
          총 {items.length}건 {unreadCount > 0 && `· 안 읽음 ${unreadCount}건`}
        </span>
      </div>

      {loading ? (
        <div className="text-center py-16 text-[#64748B]">불러오는 중...</div>
      ) : items.length === 0 ? (
        <div className="text-center py-16 text-[#94A3B8] bg-white rounded-2xl border border-[#E2E8F0]">
          접수된 문의가 없습니다
        </div>
      ) : (
        <ul className="space-y-3">
          {items.map((item) => (
            <li
              key={item.id}
              className={`bg-white rounded-2xl border p-5 ${
                item.read ? "border-[#E2E8F0]" : "border-[#4A9EE0] shadow-sm"
              }`}
            >
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-2">
                {!item.read && (
                  <span className="text-[10px] font-bold text-white bg-[#4A9EE0] px-2 py-0.5 rounded-full">
                    NEW
                  </span>
                )}
                <span className="font-bold text-[#1E293B]">{item.name}</span>
                <span className="text-sm text-[#64748B]">{item.childAge}</span>
                <a
                  href={`tel:${item.phone}`}
                  className="flex items-center gap-1 text-sm text-[#4A9EE0] hover:underline"
                >
                  <Phone className="w-3.5 h-3.5" />
                  {item.phone}
                </a>
                <span className="ml-auto text-xs text-[#94A3B8]">
                  {formatDate(item.createdAt)}
                </span>
              </div>

              {item.message && (
                <p className="text-sm text-[#334155] whitespace-pre-wrap bg-[#FAFBFF] rounded-xl px-4 py-3 mb-3">
                  {item.message}
                </p>
              )}

              <div className="flex items-center gap-2">
                <button
                  onClick={() => toggleRead(item)}
                  className="flex items-center gap-1.5 text-xs font-medium text-[#64748B] hover:text-[#1E293B] border border-[#E2E8F0] rounded-full px-3 py-1.5 transition-colors"
                >
                  {item.read ? (
                    <>
                      <Mail className="w-3.5 h-3.5" />
                      안 읽음으로 표시
                    </>
                  ) : (
                    <>
                      <MailOpen className="w-3.5 h-3.5" />
                      읽음으로 표시
                    </>
                  )}
                </button>
                <button
                  onClick={() => setConfirmDeleteId(item.id)}
                  className="flex items-center gap-1.5 text-xs font-medium text-red-500 hover:text-red-600 border border-red-200 rounded-full px-3 py-1.5 transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  삭제
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {confirmDeleteId && (
        <ConfirmDialog
          title="문의 삭제"
          description="이 문의를 삭제할까요? 되돌릴 수 없습니다."
          busy={deleting}
          onCancel={() => setConfirmDeleteId(null)}
          onConfirm={() => handleDelete(confirmDeleteId)}
        />
      )}
    </div>
  );
}
