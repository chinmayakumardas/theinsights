
import { notFound } from "next/navigation";
import ArticleCard from "@/components/article/ArticleCard";
import Container from "@/components/layout/Container";

import { categories } from "@/data/categories";
import { articles } from "@/data/articles";

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CategoryPage({
  params,
}: CategoryPageProps) {
  const { slug } = await params;

  const category = categories.find(
    (item) => item.slug === slug
  );

  if (!category) {
    notFound();
  }

  const filteredArticles =
    slug === "all"
      ? articles
      : articles.filter(
          (article) => article.category === slug
        );

  return (
    <main>
      {/* Category Header */}
      <section className="border-b bg-white">
        <Container className="py-16">
          <h1 className="text-4xl font-bold">
            {category.name}
          </h1>

          <p className="mt-4 text-gray-600">
            {category.description}
          </p>
        </Container>
      </section>

      {/* Articles */}
      <section className="py-16">
        <Container>
          {filteredArticles.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-3">
              {filteredArticles.map((article) => (
                <ArticleCard
                  key={article.slug}
                  {...article}
                />
              ))}
            </div>
          ) : (
            <p className="text-gray-500">
              No articles found.
            </p>
          )}
        </Container>
      </section>
    </main>
  );
}