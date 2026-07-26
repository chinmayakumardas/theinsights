
import { client } from "@/sanity/lib/client";
import { articlesQuery } from "@/sanity/lib/queries";
import ArticlesPage from "@/components/articles/ArticlesPage";
import PageWrapper from "@/components/layout/PageWrapper";

export const revalidate = 60;

export default async function Articles() {
  const articles = await client.fetch(articlesQuery);
  return (
    <main>
      <PageWrapper>
        <ArticlesPage initialArticles={articles ?? []} />
      </PageWrapper>
    </main>
  );
}