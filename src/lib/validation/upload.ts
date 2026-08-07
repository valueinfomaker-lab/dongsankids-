// [보안권고문 2026.8] 이미지 업로드 화이트리스트 검증
// 확장자·MIME 화이트리스트 + 매직바이트(파일 시그니처) 검사로
// 웹쉘 등 스크립트 파일(JSP, PHP, ASP 등) 업로드를 차단한다.

const ALLOWED_TYPES: Record<string, string[]> = {
  "image/jpeg": ["jpg", "jpeg"],
  "image/png": ["png"],
  "image/webp": ["webp"],
  "image/gif": ["gif"],
};

function matchesMagicBytes(bytes: Uint8Array, contentType: string): boolean {
  const startsWith = (offset: number, sig: number[]) =>
    sig.every((b, i) => bytes[offset + i] === b);

  switch (contentType) {
    case "image/jpeg":
      return startsWith(0, [0xff, 0xd8, 0xff]);
    case "image/png":
      return startsWith(0, [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
    case "image/gif":
      // "GIF87a" 또는 "GIF89a"
      return (
        startsWith(0, [0x47, 0x49, 0x46, 0x38]) &&
        (bytes[4] === 0x37 || bytes[4] === 0x39) &&
        bytes[5] === 0x61
      );
    case "image/webp":
      // "RIFF" + 4바이트 크기 + "WEBP"
      return (
        startsWith(0, [0x52, 0x49, 0x46, 0x46]) &&
        startsWith(8, [0x57, 0x45, 0x42, 0x50])
      );
    default:
      return false;
  }
}

export type ImageValidationResult =
  | { ok: true; ext: string }
  | { ok: false; error: string };

export function validateImageFile(
  filename: string,
  contentType: string,
  buffer: ArrayBuffer
): ImageValidationResult {
  const allowedExts = ALLOWED_TYPES[contentType];
  if (!allowedExts) {
    return { ok: false, error: "JPG, PNG, WEBP, GIF 이미지만 업로드할 수 있습니다" };
  }

  const ext = filename.split(".").pop()?.toLowerCase() ?? "";
  if (!allowedExts.includes(ext)) {
    return { ok: false, error: "파일 확장자가 이미지 형식과 일치하지 않습니다" };
  }

  if (!matchesMagicBytes(new Uint8Array(buffer).subarray(0, 16), contentType)) {
    return { ok: false, error: "파일 내용이 이미지 형식이 아닙니다" };
  }

  return { ok: true, ext };
}
