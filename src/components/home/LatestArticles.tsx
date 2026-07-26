


import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/layout/Container";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { latestArticlesQuery } from "@/sanity/lib/queries";

interface Article {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  mainImage?: any;
  publishedAt: string;
  category?: {
    title: string;
  };
}

export default async function LatestArticles() {
  const articles: Article[] = await client.fetch(latestArticlesQuery);

  if (!articles?.length) return null;

  return (
    <section className="py-10">
      <Container>
        {/* Header */}
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-widest text-primary">
              Fresh
            </p>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Latest Articles
            </h2>
          </div>

          <Link
            href="/articles"
            className="hidden items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:flex"
          >
            View all
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* List */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {articles.map((article) => (
            <Link
              key={article._id}
              href={`/articles/${article.slug}`}
              className="group"
            >
              <article>
                <div className="relative mb-4 aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src={
                      article.mainImage
                        ? urlFor(article.mainImage).width(600).height(450).url()
                        : "/images/blog.jpg"
                    }
                    alt={article.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                <div className="mb-2 flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  <span className="text-primary">
                    {article.category?.title || "Article"}
                  </span>
                  <span>
                    {new Date(article.publishedAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>

                <h3 className="mb-2 text-[15px] font-semibold leading-snug transition-colors group-hover:text-primary">
                  {article.title}
                </h3>
              </article>
            </Link>
          ))}
        </div>

        {/* Mobile view all */}
        <div className="mt-8 sm:hidden">
          <Link
            href="/articles"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            View all
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}