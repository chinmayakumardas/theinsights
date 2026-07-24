import ArticleCard from "@/components/article/ArticleCard";
import Container from "@/components/layout/Container";
import { articles } from "@/data/articles";

export default function FeaturedArticles() {
  const featuredArticles = articles.filter(
    (article) => article.featured
  );

  return (
    <section className="py-16">
      <Container>
        <div className="mb-8">
          <h2 className="text-3xl font-bold">
            Featured Articles
          </h2>

          <p className="mt-2 text-gray-600">
            Hand-picked articles and important insights.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featuredArticles.map((article) => (
            <ArticleCard
              key={article.id}
              title={article.title}
              excerpt={article.excerpt}
              slug={article.slug}
              category={article.category}
              date={article.publishedAt}
              image={article.coverImage}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}