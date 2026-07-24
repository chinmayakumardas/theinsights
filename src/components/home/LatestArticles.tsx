import ArticleCard from "@/components/article/ArticleCard";
import Container from "@/components/layout/Container";

const latestArticles = [
  {
    title: "Getting Started With TypeScript",
    excerpt:
      "Understand why TypeScript improves reliability and developer experience.",
    slug: "getting-started-with-typescript",
    category: "Programming",
    date: "July 2026",
  },
  {
    title: "Frontend Performance Optimization",
    excerpt:
      "Techniques to improve website speed and user experience.",
    slug: "frontend-performance-optimization",
    category: "Frontend",
    date: "July 2026",
  },
  {
    title: "Introduction to Cloud Deployment",
    excerpt:
      "Learn the basics of deploying applications to production servers.",
    slug: "cloud-deployment-basics",
    category: "Cloud",
    date: "July 2026",
  },
];

export default function LatestArticles() {
  return (
    <section className="py-16 ">
      <Container >
        <div className="mb-8">
          <h2 className="text-3xl font-bold">
            Latest Articles
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {latestArticles.map((article) => (
            <ArticleCard
              key={article.slug}
              {...article}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}