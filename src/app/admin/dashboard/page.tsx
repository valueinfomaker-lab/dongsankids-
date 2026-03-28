"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Trash2, Upload, LogOut, ImagePlus } from "lucide-react";
import type { GalleryBlobItem, GalleryCategory } from "@/lib/gallery-blob";

const CATEGORIES: GalleryCategory[] = ["교육활동", "자연체험", "행사"];
const CATEGORY_COLORS: Record<GalleryCategory, string> = {
  교육활동: "bg-[#EBF5FF] text-[#4A9EE0] border-[#4A9EE0]",
  자연체험: "bg-[#F0FFF4] text-[#5BB85D] border-[#5BB85D]",
  행사: "bg-[#FFF5F2] text-[#F47B5A] border-[#F47B5A]",
};

export default function AdminDashboard() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [items, setItems] = useState<GalleryBlobItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<GalleryCategory | "전체">("전체");

  // 업로드 상태
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>("교육활동");
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [uploading, setUploading] = useState(false);
  const [uploadMsg, setUploadMsg] = useState("");

  // 삭제 확인
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);

  // 드래그앤드롭
  const [dragOver, setDragOver] = useState(false);

  const fetchItems = useCallback(async () => {
    try {
      const res = await fetch("/api/gallery");
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

  // 파일 선택 처리
  function handleFiles(files: FileList | null) {
    if (!files) return;
    const arr = Array.from(files).filter((f) => f.type.startsWith("image/"));
    setSelectedFiles(arr);
    setPreviews(arr.map((f) => URL.createObjectURL(f)));
    setUploadMsg("");
  }

  // 업로드
  async function handleUpload() {
    if (selectedFiles.length === 0) return;
    setUploading(true);
    setUploadMsg("");

    let successCount = 0;
    for (const file of selectedFiles) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("category", selectedCategory);
      formData.append("alt", selectedCategory);

      const res = await fetch("/api/gallery/upload", { method: "POST", body: formData });
      if (res.ok) successCount++;
    }

    setUploading(false);
    setSelectedFiles([]);
    setPreviews([]);
    setUploadMsg(`${successCount}장 업로드 완료!`);
    await fetchItems();
  }

  // 삭제
  async function handleDelete(id: string) {
    setDeleting(true);
    const res = await fetch("/api/gallery/delete", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    setDeleting(false);
    setConfirmDeleteId(null);
    if (res.ok) await fetchItems();
  }

  // 로그아웃
  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin");
  }

  const filtered = activeTab === "전체" ? items : items.filter((i) => i.category === activeTab);

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* 상단 바 */}
      <header className="bg-white border-b border-[#E2E8F0] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/images/logo.jpg" alt="동산유치원" width={36} height={36} className="rounded-lg" />
          <span className="font-bold text-[#1E293B]">동산유치원 관리자</span>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-sm text-[#64748B] hover:text-[#1E293B] transition-colors"
        >
          <LogOut className="w-4 h-4" />
          로그아웃
        </button>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-8">
        {/* 왼쪽: 업로드 폼 */}
        <div className="bg-white rounded-2xl shadow-sm border border-[#E2E8F0] p-6 h-fit">
          <h2 className="font-bold text-[#1E293B] text-lg mb-5 flex items-center gap-2">
            <ImagePlus className="w-5 h-5 text-[#4A9EE0]" />
            사진 올리기
          </h2>

          {/* 카테고리 선택 */}
          <div className="mb-4">
            <p className="text-sm font-medium text-[#374151] mb-2">카테고리</p>
            <div className="flex gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`flex-1 text-xs font-medium py-2 px-1 rounded-lg border transition-all ${
                    selectedCategory === cat
                      ? CATEGORY_COLORS[cat] + " border-current"
                      : "bg-white text-[#64748B] border-[#E2E8F0]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* 드래그앤드롭 영역 */}
          <div
            onClick={() => fileInputRef.current?.click()}
            onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
            onDragLeave={() => setDragOver(false)}
            onDrop={(e) => {
              e.preventDefault();
              setDragOver(false);
              handleFiles(e.dataTransfer.files);
            }}
            className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-colors mb-4 ${
              dragOver ? "border-[#4A9EE0] bg-[#EBF5FF]" : "border-[#E2E8F0] hover:border-[#4A9EE0] hover:bg-[#FAFBFF]"
            }`}
          >
            <Upload className="w-8 h-8 text-[#94A3B8] mx-auto mb-2" />
            <p className="text-sm text-[#64748B]">클릭하거나 사진을 끌어다 놓으세요</p>
            <p className="text-xs text-[#94A3B8] mt-1">JPG, PNG, WEBP · 최대 10MB</p>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              onChange={(e) => handleFiles(e.target.files)}
            />
          </div>

          {/* 미리보기 */}
          {previews.length > 0 && (
            <div className="grid grid-cols-3 gap-2 mb-4">
              {previews.map((src, i) => (
                <div key={i} className="relative aspect-square rounded-lg overflow-hidden bg-[#F1F5F9]">
                  <img src={src} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          )}

          {uploadMsg && (
            <p className="text-sm text-[#5BB85D] font-medium text-center mb-3">{uploadMsg}</p>
          )}

          <button
            onClick={handleUpload}
            disabled={uploading || selectedFiles.length === 0}
            className="w-full bg-[#4A9EE0] hover:bg-[#2B7BC8] disabled:bg-[#E2E8F0] disabled:text-[#94A3B8] text-white font-bold py-3 rounded-xl transition-colors text-sm"
          >
            {uploading ? "올리는 중..." : `올리기 ${selectedFiles.length > 0 ? `(${selectedFiles.length}장)` : ""}`}
          </button>
        </div>

        {/* 오른쪽: 사진 목록 */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-[#1E293B] text-lg">등록된 사진</h2>
            <span className="text-sm text-[#64748B]">총 {items.length}장</span>
          </div>

          {/* 탭 */}
          <div className="flex gap-2 mb-4">
            {(["전체", ...CATEGORIES] as const).map((tab) => {
              const count = tab === "전체" ? items.length : items.filter((i) => i.category === tab).length;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    activeTab === tab
                      ? "bg-[#4A9EE0] text-white"
                      : "bg-white text-[#64748B] border border-[#E2E8F0] hover:bg-[#F0F5FF]"
                  }`}
                >
                  {tab} ({count})
                </button>
              );
            })}
          </div>

          {loading ? (
            <div className="text-center py-16 text-[#64748B]">불러오는 중...</div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-16 text-[#94A3B8] bg-white rounded-2xl border border-[#E2E8F0]">
              사진이 없습니다
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {filtered.map((item) => (
                <div key={item.id} className="relative group aspect-square rounded-xl overflow-hidden bg-[#F1F5F9]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                  {/* 카테고리 뱃지 */}
                  <span className="absolute top-1.5 left-1.5 text-[10px] font-medium bg-black/50 text-white px-1.5 py-0.5 rounded-full">
                    {item.category}
                  </span>
                  {/* 삭제 버튼 */}
                  <button
                    onClick={() => setConfirmDeleteId(item.id)}
                    className="absolute top-1.5 right-1.5 w-7 h-7 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md"
                    aria-label="삭제"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 삭제 확인 모달 */}
      {confirmDeleteId && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-xl">
            <h3 className="font-bold text-[#1E293B] text-lg mb-2">사진 삭제</h3>
            <p className="text-[#64748B] text-sm mb-6">이 사진을 삭제할까요? 되돌릴 수 없습니다.</p>
            <div className="flex gap-3">
              <button
                onClick={() => setConfirmDeleteId(null)}
                className="flex-1 py-2.5 rounded-xl border border-[#E2E8F0] text-[#64748B] font-medium text-sm hover:bg-[#F8FAFC]"
              >
                취소
              </button>
              <button
                onClick={() => handleDelete(confirmDeleteId)}
                disabled={deleting}
                className="flex-1 py-2.5 rounded-xl bg-red-500 hover:bg-red-600 text-white font-medium text-sm disabled:bg-red-300"
              >
                {deleting ? "삭제 중..." : "삭제"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
