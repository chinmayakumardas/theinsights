// import ArticleCard from "@/components/article/ArticleCard";
// import Container from "@/components/layout/Container";
// import { articles } from "@/data/articles";

// export default function FeaturedArticles() {
//   const featuredArticles = articles.filter(
//     (article) => article.featured
//   );

//   return (
//     <section className="py-16">
//       <Container>
//         <div className="mb-8">
//           <h2 className="text-3xl font-bold">
//             Featured Articles
//           </h2>

//           <p className="mt-2 text-gray-600">
//             Hand-picked articles and important insights.
//           </p>
//         </div>

//         <div className="grid gap-6 md:grid-cols-3">
//           {featuredArticles.map((article) => (
//             <ArticleCard
//               key={article.id}
//               title={article.title}
//               excerpt={article.excerpt}
//               slug={article.slug}
//               category={article.category}
//               date={article.publishedAt}
//               image={article.coverImage}
//             />
//           ))}
//         </div>
//       </Container>
//     </section>
//   );
// }


"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

interface FeaturedArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  category: string;
  publishedAt: string;
  readingTime: string;
  author: {
    name: string;
    avatar: string;
  };
}

const featuredArticles: FeaturedArticle[] = [
  {
    id: "1",
    slug: "mastering-nextjs-app-router",
    title: "Mastering the Next.js App Router",
    excerpt:
      "Learn how to build scalable applications with the modern Next.js App Router architecture and React Server Components.",
    coverImage: "/images/blog.jpg",
    category: "Next.js",
    publishedAt: "24 Jul 2026",
    readingTime: "8 min",
    author: {
      name: "Alex Rivera",
      avatar: "/avatars/alex.jpg",
    },
  },
  {
    id: "2",
    slug: "future-of-ai",
    title: "Future of AI in Software Development",
    excerpt:
      "Understanding how artificial intelligence is changing the future of software engineering and developer productivity.",
    coverImage: "/images/blog.jpg",
    category: "AI",
    publishedAt: "15 Jul 2026",
    readingTime: "9 min",
    author: {
      name: "Alex Rivera",
      avatar: "/avatars/alex.jpg",
    },
  },
];

function FeaturedArticleCard({ article }: { article: FeaturedArticle }) {
  return (
    <Link href={`/articles/${article.slug}`} className="group block">
      <Card className="overflow-hidden border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        {/* Cover Image */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <CardContent className="flex flex-col gap-4 p-6">
          {/* Meta */}
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <Badge variant="secondary" className="font-medium">
              {article.category}
            </Badge>
            <span>{article.publishedAt}</span>
            <span>·</span>
            <span>{article.readingTime}</span>
          </div>

          {/* Title & Excerpt */}
          <div className="space-y-2">
            <h3 className="text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary md:text-2xl">
              {article.title}
            </h3>
            <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
              {article.excerpt}
            </p>
          </div>

          <Separator />

          {/* Author + Arrow */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src={article.author.avatar} alt={article.author.name} />
                <AvatarFallback>
                  {article.author.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium text-foreground">
                {article.author.name}
              </span>
            </div>

            <div className="flex h-9 w-9 items-center justify-center rounded-full border bg-background transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export default function Hero() {
  return (
    <section className="w-full bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 lg:py-32">
        {/* Hero Content */}
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center animate-in fade-in duration-700">
          {/* Badge */}
          <Badge
            variant="secondary"
            className="mb-6 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide"
          >
            Developer Notes • AI • Web Development
          </Badge>

          {/* Heading */}
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Thoughtful Articles on AI, Web Development & Technology.
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Explore practical tutorials, development tips, architecture guides,
            and technical insights to help you build better software.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href="/articles">Browse Articles</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8">
              <Link href="/about">About Me</Link>
            </Button>
          </div>
        </div>

        {/* Featured Articles */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2 md:mt-24">
          {featuredArticles.map((article) => (
            <FeaturedArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}