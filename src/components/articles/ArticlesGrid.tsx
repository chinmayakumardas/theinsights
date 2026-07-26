




import { Article } from "@/sanity/lib/types";
import ArticleCard from "./ArticleCard";

interface ArticlesGridProps {
  articles: Article[];
}

export default function ArticlesGrid({
  articles,
}: ArticlesGridProps) {
  if (!articles || articles.length === 0) {
    return (
      <div className="py-20 text-center">
        <p className="text-lg font-medium">No articles found</p>

        <p className="mt-2 text-sm text-muted-foreground">
          Try changing the category or search term.
        </p>
      </div>
    );
  }

  return (
    <section className="mt-10">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard
            key={article._id}
            article={article}
          />
        ))}
      </div>
    </section>
  );
}