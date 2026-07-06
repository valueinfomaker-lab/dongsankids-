import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { readNotices } from "@/lib/notice-blob";

const staticPaths = [
  "",
  "/about",
  "/curriculum",
  "/daily",
  "/admission",
  "/contact",
  "/gallery",
  "/notice",
] as const;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${siteConfig.url}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  try {
    const notices = await readNotices();
    const noticeEntries: MetadataRoute.Sitemap = notices.map((notice) => ({
      url: `${siteConfig.url}/notice/${notice.id}`,
      lastModified: notice.updatedAt,
      changeFrequency: "yearly",
      priority: 0.5,
    }));
    return [...staticEntries, ...noticeEntries];
  } catch {
    return staticEntries;
  }
}
