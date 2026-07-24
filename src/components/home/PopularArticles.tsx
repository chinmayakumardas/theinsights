import Link from "next/link";
import Container from "@/components/layout/Container";

const popularArticles = [
  {
    title: "Next.js Project Structure Guide",
    slug: "nextjs-project-structure-guide",
  },
  {
    title: "Building Secure APIs",
    slug: "building-secure-apis",
  },
  {
    title: "React Performance Tips",
    slug: "react-performance-tips",
  },
];

export default function PopularArticles() {
  return (
    <section className="py-16">
      <Container>
        <h2 className="mb-8 text-3xl font-bold">
          Popular Articles
        </h2>

        <div className="space-y-4">
          {popularArticles.map((article, index) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="flex items-center gap-4 rounded-lg border p-4 hover:bg-gray-50"
            >
              <span className="text-xl font-bold text-gray-400">
                0{index + 1}
              </span>

              <span className="font-medium">
                {article.title}
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}