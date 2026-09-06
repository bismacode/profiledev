import type { MetadataRoute } from "next";
import { services } from "@/data/services";

export const dynamic = "force-static";

const SITE_URL = "https://bismacode.my.id";

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceRoutes = services.map((service) => ({
    url: `${SITE_URL}/artikel/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/artikel`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...serviceRoutes,
  ];
}
