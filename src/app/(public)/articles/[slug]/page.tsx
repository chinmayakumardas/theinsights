

import { notFound } from "next/navigation";

import { client } from "@/sanity/lib/client";
import { articleBySlugQuery } from "@/sanity/lib/queries";

import ArticleDetailPage from "@/components/articles/ArticleDetailPage";
import PageWrapper from "@/components/layout/PageWrapper";

export const revalidate = 60;

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;

  const article = await client.fetch(articleBySlugQuery, {
    slug,
  });
  if (!article) {
    notFound();
  }

  return (
    <main>
      <PageWrapper>
        <ArticleDetailPage article={article} />
      </PageWrapper>
    </main>
  );
}