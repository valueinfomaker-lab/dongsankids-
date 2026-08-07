import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

// [보안권고문 2026.8] 관리자 대시보드 접근 가드.
// API 라우트는 각자 인증을 검사하므로 여기서는 화면 진입만 차단한다 (optimistic check).
export async function proxy(request: NextRequest) {
  const token = request.cookies.get("admin_session")?.value;
  const loginUrl = new URL("/admin", request.url);

  if (!token) return NextResponse.redirect(loginUrl);

  const secret = process.env.JWT_SECRET;
  if (!secret) return NextResponse.redirect(loginUrl);

  try {
    await jwtVerify(token, new TextEncoder().encode(secret));
    return NextResponse.next();
  } catch {
    return NextResponse.redirect(loginUrl);
  }
}

export const config = {
  matcher: "/admin/dashboard/:path*",
};
