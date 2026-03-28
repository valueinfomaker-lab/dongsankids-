import { NextResponse } from "next/server";
import { readMetadata } from "@/lib/gallery-blob";

export async function GET() {
  const items = await readMetadata();
  return NextResponse.json({ items });
}
