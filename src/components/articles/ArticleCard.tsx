
"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { urlFor } from "@/sanity/lib/image";
import { Article } from "@/sanity/lib/types";

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  const router = useRouter();

  const image =
    article.mainImage?.asset?._ref
      ? urlFor(article.mainImage).width(800).height(500).url()
      : "/images/blog.jpg";

  return (
    <article
      onClick={() => router.push(`/articles/${article.slug}`)}
      className="group cursor-pointer"
    >
      {/* Image */}
      <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded-2xl">
        <Image
          src={image}
          alt={article.mainImage?.alt || article.title}
          fill
          sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Category + Read Time */}
      <div className="mb-2 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
        <span className="text-primary">
          {article.category?.title ?? "General"}
        </span>

        <span>·</span>

      </div>

      {/* Title */}
      <h3 className="mb-2 text-[16px] font-semibold leading-snug transition-colors group-hover:text-primary">
        {article.title}
      </h3>

      {/* Excerpt */}
      <p className="mb-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
        {article.excerpt}
      </p>

      {/* Date */}
      <p className="text-xs text-muted-foreground">
        {article.publishedAt &&
          new Date(article.publishedAt).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
      </p>
    </article>
  );
}