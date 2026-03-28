import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { uploadImage, GalleryCategory } from "@/lib/gallery-blob";

const ALLOWED_CATEGORIES: GalleryCategory[] = ["교육활동", "자연체험", "행사"];
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

export async function POST(request: NextRequest) {
  if (!(await isAuthenticated(request))) {
    return NextResponse.json({ error: "인증이 필요합니다" }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;
    const category = formData.get("category") as string | null;
    const alt = (formData.get("alt") as string) || "";

    if (!file) {
      return NextResponse.json({ error: "파일이 없습니다" }, { status: 400 });
    }
    if (!category || !ALLOWED_CATEGORIES.includes(category as GalleryCategory)) {
      return NextResponse.json({ error: "올바른 카테고리를 선택하세요" }, { status: 400 });
    }
    if (!file.type.startsWith("image/")) {
      return NextResponse.json({ error: "이미지 파일만 업로드할 수 있습니다" }, { status: 400 });
    }
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json({ error: "파일 크기는 10MB 이하여야 합니다" }, { status: 400 });
    }

    const buffer = await file.arrayBuffer();
    const item = await uploadImage(buffer, file.name, file.type, category as GalleryCategory, alt);

    return NextResponse.json({ ok: true, item });
  } catch (err) {
    console.error("Upload error:", err);
    return NextResponse.json({ error: "업로드 중 오류가 발생했습니다" }, { status: 500 });
  }
}
