import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

const staticPaths = [
  "",
  "/about",
  "/facilities",
  "/curriculum",
  "/programs",
  "/afterschool",
  "/parents",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return staticPaths.map((path) => ({
    url: `${siteConfig.url}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
