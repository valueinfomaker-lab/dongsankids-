import { NextRequest, NextResponse } from "next/server";
import { signToken, sessionCookieOptions } from "@/lib/auth";

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminPassword) {
      return NextResponse.json({ error: "서버 설정 오류" }, { status: 500 });
    }

    if (password !== adminPassword) {
      return NextResponse.json({ error: "비밀번호가 틀렸습니다" }, { status: 401 });
    }

    const token = await signToken({ role: "admin" });
    const response = NextResponse.json({ ok: true });
    response.cookies.set(sessionCookieOptions(token));
    return response;
  } catch {
    return NextResponse.json({ error: "요청 처리 오류" }, { status: 400 });
  }
}
