import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { isAuthenticated } from "@/lib/auth";
import { noticeSchema } from "@/lib/validation/notice";
import { updateNotice } from "@/lib/notice-blob";

const updateSchema = noticeSchema.extend({
  id: z.string().min(1),
});

export async function PATCH(request: NextRequest) {
  if (!(await isAuthenticated(request))) {
    return NextResponse.json({ error: "인증이 필요합니다" }, { status: 401 });
  }

  try {
    const parsed = updateSchema.safeParse(await request.json());
    if (!parsed.success) {
      const message = parsed.error.issues[0]?.message ?? "입력값을 확인해주세요";
      return NextResponse.json({ error: message }, { status: 400 });
    }

    const { id, ...input } = parsed.data;
    const item = await updateNotice(id, input);
    if (!item) {
      return NextResponse.json({ error: "공지를 찾을 수 없습니다" }, { status: 404 });
    }

    return NextResponse.json({ ok: true, item });
  } catch (err) {
    console.error("Notice update error:", err);
    return NextResponse.json(
      { error: "공지 수정 중 오류가 발생했습니다" },
      { status: 500 }
    );
  }
}
