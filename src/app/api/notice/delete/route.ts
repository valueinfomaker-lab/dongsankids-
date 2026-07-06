import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { isAuthenticated } from "@/lib/auth";
import { deleteNotice } from "@/lib/notice-blob";

const deleteSchema = z.object({
  id: z.string().min(1),
});

export async function DELETE(request: NextRequest) {
  if (!(await isAuthenticated(request))) {
    return NextResponse.json({ error: "인증이 필요합니다" }, { status: 401 });
  }

  try {
    const parsed = deleteSchema.safeParse(await request.json());
    if (!parsed.success) {
      return NextResponse.json({ error: "입력값을 확인해주세요" }, { status: 400 });
    }

    const ok = await deleteNotice(parsed.data.id);
    if (!ok) {
      return NextResponse.json({ error: "공지를 찾을 수 없습니다" }, { status: 404 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Notice delete error:", err);
    return NextResponse.json(
      { error: "공지 삭제 중 오류가 발생했습니다" },
      { status: 500 }
    );
  }
}
