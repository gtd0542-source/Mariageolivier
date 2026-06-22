import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://olivier-et-celine.com"; // [PLACEHOLDER] domaine définitif (Hostinger)
  return [
    {
      url: siteUrl,
      lastModified: new Date(0),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
