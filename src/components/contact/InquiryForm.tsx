"use client";

import { useState } from "react";
import { inquirySchema, CHILD_AGES } from "@/lib/validation/inquiry";

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-[#E2E8F0] text-sm text-[#1E293B] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#4A9EE0] focus:border-transparent bg-white";

type Status =
  | { state: "idle" }
  | { state: "submitting" }
  | { state: "success" }
  | { state: "error"; message: string };

export default function InquiryForm() {
  const [status, setStatus] = useState<Status>({ state: "idle" });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const raw = {
      name: String(formData.get("name") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      childAge: String(formData.get("childAge") ?? ""),
      message: String(formData.get("message") ?? ""),
    };
    const website = String(formData.get("website") ?? "");

    const parsed = inquirySchema.safeParse(raw);
    if (!parsed.success) {
      setStatus({
        state: "error",
        message: parsed.error.issues[0]?.message ?? "입력값을 확인해주세요",
      });
      return;
    }

    setStatus({ state: "submitting" });
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...parsed.data, website }),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus({
          state: "error",
          message: data.error ?? "문의 접수 중 오류가 발생했습니다",
        });
        return;
      }

      form.reset();
      setStatus({ state: "success" });
    } catch {
      setStatus({
        state: "error",
        message: "네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요",
      });
    }
  }

  if (status.state === "success") {
    return (
      <div className="bg-[#F0FFF4] border border-[#5BB85D]/30 rounded-2xl p-8 text-center">
        <div className="text-4xl mb-3">✅</div>
        <p className="font-bold text-[#1E293B] mb-1">
          문의가 접수되었습니다
        </p>
        <p className="text-sm text-[#64748B]">
          확인 후 빠르게 연락드리겠습니다. 감사합니다!
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="inquiry-name" className="block text-sm font-medium text-[#1E293B] mb-1.5">
            학부모 성함 <span className="text-[#F47B5A]">*</span>
          </label>
          <input
            id="inquiry-name"
            name="name"
            type="text"
            maxLength={30}
            placeholder="홍길동"
            className={inputClass}
            required
          />
        </div>
        <div>
          <label htmlFor="inquiry-phone" className="block text-sm font-medium text-[#1E293B] mb-1.5">
            연락처 <span className="text-[#F47B5A]">*</span>
          </label>
          <input
            id="inquiry-phone"
            name="phone"
            type="tel"
            placeholder="010-1234-5678"
            className={inputClass}
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="inquiry-age" className="block text-sm font-medium text-[#1E293B] mb-1.5">
          자녀 연령 <span className="text-[#F47B5A]">*</span>
        </label>
        <select id="inquiry-age" name="childAge" className={inputClass} defaultValue="" required>
          <option value="" disabled>
            선택해주세요
          </option>
          {CHILD_AGES.map((age) => (
            <option key={age} value={age}>
              {age}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="inquiry-message" className="block text-sm font-medium text-[#1E293B] mb-1.5">
          문의 내용
        </label>
        <textarea
          id="inquiry-message"
          name="message"
          rows={4}
          maxLength={1000}
          placeholder="궁금한 점을 자유롭게 남겨주세요 (선택)"
          className={`${inputClass} resize-y`}
        />
      </div>

      {/* 허니팟: 사람에게는 보이지 않는 필드 */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="inquiry-website">웹사이트</label>
        <input
          id="inquiry-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {status.state === "error" && (
        <p className="text-sm text-[#DC2626] bg-[#FEF2F2] rounded-xl px-4 py-3" role="alert">
          {status.message}
        </p>
      )}

      <button
        type="submit"
        disabled={status.state === "submitting"}
        className="w-full bg-[#F47B5A] hover:bg-[#e5633f] disabled:opacity-60 text-white font-bold py-4 rounded-full text-base shadow-md transition-colors"
      >
        {status.state === "submitting" ? "접수 중..." : "문의 남기기"}
      </button>
    </form>
  );
}
