import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { noticeSchema } from "@/lib/validation/notice";
import { createNotice, readNotices, sortNotices } from "@/lib/notice-blob";

export async function GET() {
  try {
    const items = await readNotices();
    return NextResponse.json({ items: sortNotices(items) });
  } catch (err) {
    console.error("Notice list error:", err);
    return NextResponse.json(
      { error: "공지사항을 불러오지 못했습니다" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  if (!(await isAuthenticated(request))) {
    return NextResponse.json({ error: "인증이 필요합니다" }, { status: 401 });
  }

  try {
    const parsed = noticeSchema.safeParse(await request.json());
    if (!parsed.success) {
      const message = parsed.error.issues[0]?.message ?? "입력값을 확인해주세요";
      return NextResponse.json({ error: message }, { status: 400 });
    }

    const item = await createNotice(parsed.data);
    return NextResponse.json({ ok: true, item });
  } catch (err) {
    console.error("Notice create error:", err);
    return NextResponse.json(
      { error: "공지 등록 중 오류가 발생했습니다" },
      { status: 500 }
    );
  }
}
