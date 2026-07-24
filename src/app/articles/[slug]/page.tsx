import Link from "next/link";

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

const articles = [
  {
    title: "Building Modern Web Applications with Next.js",
    slug: "building-modern-web-applications-nextjs",
    category: "Development",
    date: "July 2026",
    content: `
      Next.js is a modern React framework used to build fast,
      scalable and production-ready web applications.

      It provides features like server components,
      routing, SEO optimization and performance improvements.
    `,
  },

  {
    title: "How SaaS Products Are Built",
    slug: "how-saas-products-are-built",
    category: "SaaS",
    date: "July 2026",
    content: `
      Building a SaaS product requires proper planning,
      architecture, authentication, database design and scaling.
    `,
  },
];

export default async function ArticlePage({
  params,
}: ArticlePageProps) {
  const { slug } = await params;

  const article = articles.find(
    (item) => item.slug === slug
  );

  if (!article) {
    return (
      <main className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-3xl font-bold">
          Article Not Found
        </h1>

        <Link
          href="/articles/all"
          className="mt-5 inline-block text-sm underline"
        >
          Back to Articles
        </Link>
      </main>
    );
  }

  return (
    <main>
      <article className="mx-auto max-w-4xl px-6 py-16">
        <div>
          <p className="text-sm text-gray-500">
            {article.category}
          </p>

          <h1 className="mt-3 text-4xl font-bold leading-tight">
            {article.title}
          </h1>

          <p className="mt-3 text-sm text-gray-400">
            {article.date}
          </p>
        </div>

        <div className="prose mt-10 max-w-none">
          {article.content
            .split("\n")
            .map((paragraph, index) => (
              <p key={index}>
                {paragraph}
              </p>
            ))}
        </div>
      </article>
    </main>
  );
}