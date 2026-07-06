import { NextRequest, NextResponse } from "next/server";
import { signToken, sessionCookieOptions } from "@/lib/auth";
import { checkRateLimit, recordAttempt, clientIpFrom } from "@/lib/rate-limit";

const LOGIN_LIMIT = 5;
const LOGIN_WINDOW_MS = 15 * 60 * 1000;

export async function POST(request: NextRequest) {
  try {
    const key = `login:${clientIpFrom(request.headers)}`;
    const { allowed } = checkRateLimit(key, LOGIN_LIMIT, LOGIN_WINDOW_MS);
    if (!allowed) {
      return NextResponse.json(
        { error: "시도 횟수가 너무 많습니다. 15분 후 다시 시도해주세요" },
        { status: 429 }
      );
    }

    const { password } = await request.json();
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminPassword) {
      return NextResponse.json({ error: "서버 설정 오류" }, { status: 500 });
    }

    if (password !== adminPassword) {
      recordAttempt(key, LOGIN_WINDOW_MS);
      return NextResponse.json({ error: "비밀번호가 틀렸습니다" }, { status: 401 });
    }

    const token = await signToken({ role: "admin" });
    const response = NextResponse.json({ ok: true });
    response.cookies.set(sessionCookieOptions(token));
    return response;
  } catch (err) {
    console.error("Login error:", err);
    return NextResponse.json({ error: "요청 처리 오류" }, { status: 400 });
  }
}
