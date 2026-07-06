import { z } from "zod";

export const CHILD_AGES = ["만 3세", "만 4세", "만 5세", "기타"] as const;

export const inquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "이름을 입력해주세요")
    .max(30, "이름은 30자 이내로 입력해주세요"),
  phone: z
    .string()
    .trim()
    .regex(/^0\d{1,2}-?\d{3,4}-?\d{4}$/, "올바른 전화번호를 입력해주세요 (예: 010-1234-5678)"),
  childAge: z.enum(CHILD_AGES, { message: "자녀 연령을 선택해주세요" }),
  message: z
    .string()
    .trim()
    .max(1000, "문의 내용은 1000자 이내로 입력해주세요")
    .optional()
    .default(""),
});

export type InquiryInput = z.infer<typeof inquirySchema>;
