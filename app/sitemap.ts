import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

const ROUTES = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/realisations", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/services/conception-piscine", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/services/construction-piscine", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/services/renovation-piscine", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/services/amenagement-piscine", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/a-propos", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/devis", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((r) => ({
    url: SITE_URL + r.path,
    lastModified: new Date(),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
