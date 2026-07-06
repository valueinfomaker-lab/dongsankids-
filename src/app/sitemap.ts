import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

const staticPaths = [
  "",
  "/about",
  "/curriculum",
  "/daily",
  "/admission",
  "/contact",
  "/gallery",
] as const;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return staticPaths.map((path) => ({
    url: `${siteConfig.url}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
