

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/layout/Container";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { featuredArticlesQuery } from "@/sanity/lib/queries";

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

export default async function Hero() {
  const articles: Article[] = await client.fetch(featuredArticlesQuery);
  const article = articles?.[0];

  if (!article) {
    return (
      <section className="py-10">
        <Container>
          <div className="rounded-[1rem] bg-muted p-10 text-center text-muted-foreground">
            No featured article yet.
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="py-10">
      <Container>
        <Link href={`/articles/${article.slug}`} className="group block">
          <article className="relative overflow-hidden rounded-[1rem] bg-muted">
            <div className="grid lg:grid-cols-2">
              {/* Image - fixed size, only image scales */}
              <div className="relative h-[300px] overflow-hidden sm:h-[380px] lg:h-[520px]">
                <Image
                  src={
                    article.mainImage
                      ? urlFor(article.mainImage).width(1200).height(800).url()
                      : "/images/blog.jpg"
                  }
                  alt={article.title}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/10" />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-12 xl:p-14">
                <div>
                  <div className="mb-5 flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-primary px-3.5 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary-foreground">
                      Featured
                    </span>
                    {article.category?.title && (
                      <span className="text-sm text-muted-foreground">
                        {article.category.title}
                      </span>
                    )}
                  </div>

                  <h1 className="max-w-lg text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.75rem]">
                    {article.title}
                  </h1>

                  {article.excerpt && (
                    <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted-foreground">
                      {article.excerpt}
                    </p>
                  )}
                </div>

                <div className="mt-10 flex items-center gap-2 text-sm font-medium">
                  Read the article
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>
          </article>
        </Link>
      </Container>
    </section>
  );
}