import { z } from "zod";

export const noticeSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, "제목을 입력해주세요")
    .max(100, "제목은 100자 이내로 입력해주세요"),
  body: z
    .string()
    .trim()
    .min(1, "내용을 입력해주세요")
    .max(5000, "내용은 5000자 이내로 입력해주세요"),
  date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "날짜 형식이 올바르지 않습니다"),
  pinned: z.boolean().default(false),
});

export type NoticeInput = z.infer<typeof noticeSchema>;
