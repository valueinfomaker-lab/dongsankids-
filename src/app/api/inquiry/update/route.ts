import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { isAuthenticated } from "@/lib/auth";
import { updateInquiryRead } from "@/lib/inquiry-blob";

const updateSchema = z.object({
  id: z.string().min(1),
  read: z.boolean(),
});

export async function PATCH(request: NextRequest) {
  if (!(await isAuthenticated(request))) {
    return NextResponse.json({ error: "인증이 필요합니다" }, { status: 401 });
  }

  try {
    const parsed = updateSchema.safeParse(await request.json());
    if (!parsed.success) {
      return NextResponse.json({ error: "입력값을 확인해주세요" }, { status: 400 });
    }

    const ok = await updateInquiryRead(parsed.data.id, parsed.data.read);
    if (!ok) {
      return NextResponse.json({ error: "문의를 찾을 수 없습니다" }, { status: 404 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Inquiry update error:", err);
    return NextResponse.json(
      { error: "문의 상태 변경 중 오류가 발생했습니다" },
      { status: 500 }
    );
  }
}
