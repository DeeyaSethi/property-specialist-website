import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.example.com";
  return [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/about`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/developers`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/investors`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/buyers`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/finance`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/podcast`, changeFrequency: "weekly", priority: 0.6 },
    { url: `${base}/contact`, changeFrequency: "monthly", priority: 0.6 },
  ];
}


