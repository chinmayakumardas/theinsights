import type { MetadataRoute } from "next";
import { groq } from "next-sanity";

import { client } from "@/sanity/lib/client";

const BASE_URL = "https://insights.chinmayakumardas.com";

const sitemapArticlesQuery = groq`
*[
  _type == "article" &&
  defined(slug.current)
]{
  "slug": slug.current,
  _updatedAt
}
`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await client.fetch<
    {
      slug: string;
      _updatedAt: string;
    }[]
  >(sitemapArticlesQuery);

  return [
    // Static Pages
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${BASE_URL}/articles`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms-and-conditions`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },

    // Dynamic Articles
    ...articles.map((article) => ({
      url: `${BASE_URL}/articles/${article.slug}`,
      lastModified: new Date(article._updatedAt),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}