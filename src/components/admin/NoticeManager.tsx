"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Trash2, Pin, PinOff, Pencil, Megaphone } from "lucide-react";
import type { NoticeItem } from "@/lib/notice-blob";
import ConfirmDialog from "@/components/admin/ConfirmDialog";

const inputClass =
  "w-full px-3.5 py-2.5 rounded-xl border border-[#E2E8F0] text-sm text-[#1E293B] focus:outline-none focus:ring-2 focus:ring-[#4A9EE0] focus:border-transparent";

interface FormState {
  title: string;
  date: string;
  pinned: boolean;
  body: string;
}

function todayString(): string {
  return new Date().toISOString().slice(0, 10);
}

const emptyForm = (): FormState => ({
  title: "",
  date: todayString(),
  pinned: false,
  body: "",
});

export default function NoticeManager() {
  const router = useRouter();
  const [items, setItems] = useState<NoticeItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState<FormState>(emptyForm());
  const [editingId, setEditingId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [formMsg, setFormMsg] = useState("");
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);

  const fetchItems = useCallback(async () => {
    try {
      const res = await fetch("/api/notice");
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

  function startEdit(item: NoticeItem) {
    setEditingId(item.id);
    setForm({ title: item.title, date: item.date, pinned: item.pinned, body: item.body });
    setFormMsg("");
  }

  function cancelEdit() {
    setEditingId(null);
    setForm(emptyForm());
    setFormMsg("");
  }

  async function handleSave() {
    setSaving(true);
    setFormMsg("");

    const isEdit = editingId !== null;
    const res = await fetch(isEdit ? "/api/notice/update" : "/api/notice", {
      method: isEdit ? "PATCH" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(isEdit ? { id: editingId, ...form } : form),
    });
    const data = await res.json();
    setSaving(false);

    if (!res.ok) {
      setFormMsg(data.error ?? "저장에 실패했습니다");
      return;
    }

    cancelEdit();
    setFormMsg(isEdit ? "수정되었습니다" : "등록되었습니다");
    await fetchItems();
  }

  async function togglePin(item: NoticeItem) {
    const res = await fetch("/api/notice/update", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: item.id,
        title: item.title,
        date: item.date,
        body: item.body,
        pinned: !item.pinned,
      }),
    });
    if (res.ok) await fetchItems();
  }

  async function handleDelete(id: string) {
    setDeleting(true);
    const res = await fetch("/api/notice/delete", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    setDeleting(false);
    setConfirmDeleteId(null);
    if (res.ok) {
      if (editingId === id) cancelEdit();
      await fetchItems();
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-8">
      {/* 왼쪽: 작성/수정 폼 */}
      <div className="bg-white rounded-2xl shadow-sm border border-[#E2E8F0] p-6 h-fit">
        <h2 className="font-bold text-[#1E293B] text-lg mb-5 flex items-center gap-2">
          <Megaphone className="w-5 h-5 text-[#4A9EE0]" />
          {editingId ? "공지 수정" : "공지 작성"}
        </h2>

        <div className="space-y-4">
          <div>
            <label htmlFor="notice-title" className="block text-sm font-medium text-[#374151] mb-1.5">
              제목
            </label>
            <input
              id="notice-title"
              type="text"
              maxLength={100}
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className={inputClass}
              placeholder="예: 여름방학 안내"
            />
          </div>

          <div className="flex items-center gap-3">
            <div className="flex-1">
              <label htmlFor="notice-date" className="block text-sm font-medium text-[#374151] mb-1.5">
                날짜
              </label>
              <input
                id="notice-date"
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className={inputClass}
              />
            </div>
            <label className="flex items-center gap-2 text-sm text-[#374151] pt-6 cursor-pointer">
              <input
                type="checkbox"
                checked={form.pinned}
                onChange={(e) => setForm({ ...form, pinned: e.target.checked })}
                className="w-4 h-4 accent-[#F47B5A]"
              />
              상단 고정
            </label>
          </div>

          <div>
            <label htmlFor="notice-body" className="block text-sm font-medium text-[#374151] mb-1.5">
              내용
            </label>
            <textarea
              id="notice-body"
              rows={8}
              maxLength={5000}
              value={form.body}
              onChange={(e) => setForm({ ...form, body: e.target.value })}
              className={`${inputClass} resize-y`}
              placeholder="공지 내용을 입력하세요"
            />
          </div>

          {formMsg && (
            <p className="text-sm text-center font-medium text-[#5BB85D]">{formMsg}</p>
          )}

          <div className="flex gap-2">
            {editingId && (
              <button
                onClick={cancelEdit}
                className="flex-1 py-3 rounded-xl border border-[#E2E8F0] text-[#64748B] font-medium text-sm hover:bg-[#F8FAFC]"
              >
                취소
              </button>
            )}
            <button
              onClick={handleSave}
              disabled={saving || !form.title.trim() || !form.body.trim()}
              className="flex-1 bg-[#4A9EE0] hover:bg-[#2B7BC8] disabled:bg-[#E2E8F0] disabled:text-[#94A3B8] text-white font-bold py-3 rounded-xl transition-colors text-sm"
            >
              {saving ? "저장 중..." : editingId ? "수정 저장" : "등록"}
            </button>
          </div>
        </div>
      </div>

      {/* 오른쪽: 공지 목록 */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-[#1E293B] text-lg">등록된 공지</h2>
          <span className="text-sm text-[#64748B]">총 {items.length}건</span>
        </div>

        {loading ? (
          <div className="text-center py-16 text-[#64748B]">불러오는 중...</div>
        ) : items.length === 0 ? (
          <div className="text-center py-16 text-[#94A3B8] bg-white rounded-2xl border border-[#E2E8F0]">
            등록된 공지가 없습니다
          </div>
        ) : (
          <ul className="space-y-3">
            {items.map((item) => (
              <li
                key={item.id}
                className="bg-white rounded-2xl border border-[#E2E8F0] p-5 flex items-start gap-3"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    {item.pinned && (
                      <span className="flex items-center gap-1 text-[10px] font-bold text-[#F47B5A] bg-[#FFF5F2] px-2 py-0.5 rounded-full flex-shrink-0">
                        <Pin className="w-3 h-3" />
                        고정
                      </span>
                    )}
                    <span className="font-bold text-[#1E293B] truncate">{item.title}</span>
                  </div>
                  <p className="text-xs text-[#94A3B8] mb-2">{item.date}</p>
                  <p className="text-sm text-[#64748B] line-clamp-2 whitespace-pre-wrap">
                    {item.body}
                  </p>
                </div>
                <div className="flex flex-col gap-1.5 flex-shrink-0">
                  <button
                    onClick={() => togglePin(item)}
                    className="p-2 rounded-lg text-[#64748B] hover:bg-[#F0F5FF] hover:text-[#4A9EE0] transition-colors"
                    aria-label={item.pinned ? "고정 해제" : "상단 고정"}
                    title={item.pinned ? "고정 해제" : "상단 고정"}
                  >
                    {item.pinned ? <PinOff className="w-4 h-4" /> : <Pin className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={() => startEdit(item)}
                    className="p-2 rounded-lg text-[#64748B] hover:bg-[#F0F5FF] hover:text-[#4A9EE0] transition-colors"
                    aria-label="수정"
                    title="수정"
                  >
                    <Pencil className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setConfirmDeleteId(item.id)}
                    className="p-2 rounded-lg text-[#64748B] hover:bg-red-50 hover:text-red-500 transition-colors"
                    aria-label="삭제"
                    title="삭제"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {confirmDeleteId && (
        <ConfirmDialog
          title="공지 삭제"
          description="이 공지를 삭제할까요? 되돌릴 수 없습니다."
          busy={deleting}
          onCancel={() => setConfirmDeleteId(null)}
          onConfirm={() => handleDelete(confirmDeleteId)}
        />
      )}
    </div>
  );
}
