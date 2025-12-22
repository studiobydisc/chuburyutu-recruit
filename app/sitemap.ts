import { MetadataRoute } from "next";

const buildUrl = (path?: string) =>
  `https://recruit.chuburyutu.co.jp/${path ?? ""}`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  return [
    {
      url: buildUrl(),
      lastModified: now,
    },
    {
      url: buildUrl("/environment"),
      lastModified: now,
    },
    {
      url: buildUrl("/team"),
      lastModified: now,
    },
    {
      url: buildUrl("/work"),
      lastModified: now,
    },
    {
      url: buildUrl("/job"),
      lastModified: now,
    },
  ];
}
