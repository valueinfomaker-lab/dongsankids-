import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { inquirySchema } from "@/lib/validation/inquiry";
import {
  addInquiry,
  readInquiries,
  isInquiryStoreConfigured,
} from "@/lib/inquiry-blob";
import { checkRateLimit, recordAttempt, clientIpFrom } from "@/lib/rate-limit";

const INQUIRY_LIMIT = 3;
const INQUIRY_WINDOW_MS = 60 * 60 * 1000;

export async function POST(request: NextRequest) {
  try {
    const key = `inquiry:${clientIpFrom(request.headers)}`;
    const { allowed } = checkRateLimit(key, INQUIRY_LIMIT);
    if (!allowed) {
      return NextResponse.json(
        { error: "문의가 너무 잦습니다. 잠시 후 다시 시도해주세요" },
        { status: 429 }
      );
    }

    const body = await request.json();

    // 허니팟: 봇이 채운 경우 조용히 성공 응답 (저장하지 않음)
    if (typeof body.website === "string" && body.website !== "") {
      return NextResponse.json({ ok: true });
    }

    const parsed = inquirySchema.safeParse(body);
    if (!parsed.success) {
      const message = parsed.error.issues[0]?.message ?? "입력값을 확인해주세요";
      return NextResponse.json({ error: message }, { status: 400 });
    }

    if (!isInquiryStoreConfigured()) {
      return NextResponse.json(
        { error: "온라인 문의가 일시적으로 불가합니다. 전화로 문의해주세요" },
        { status: 503 }
      );
    }

    await addInquiry(parsed.data);
    recordAttempt(key, INQUIRY_WINDOW_MS);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Inquiry create error:", err);
    return NextResponse.json(
      { error: "문의 접수 중 오류가 발생했습니다" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  if (!(await isAuthenticated(request))) {
    return NextResponse.json({ error: "인증이 필요합니다" }, { status: 401 });
  }

  try {
    const items = await readInquiries();
    const sorted = [...items].sort((a, b) =>
      b.createdAt.localeCompare(a.createdAt)
    );
    return NextResponse.json({ items: sorted });
  } catch (err) {
    console.error("Inquiry list error:", err);
    return NextResponse.json(
      { error: "문의 목록을 불러오지 못했습니다" },
      { status: 500 }
    );
  }
}
