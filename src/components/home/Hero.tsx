// import Link from "next/link";
// import Container from "@/components/layout/Container";

// export default function Hero() {
//   return (
//     <section className=" bg-white">
//       <Container className="py-20">
//         <div className="max-w-3xl">
//           <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
//             Insights, tutorials and ideas for modern technology
//           </h1>

//           <p className="mt-6 text-lg leading-relaxed text-gray-600">
//             Explore practical articles about development, tools,
//             engineering, business and technology trends.
//           </p>

//           <div className="mt-8 flex gap-4">
//             <Link
//               href="/articles"
//               className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white"
//             >
//               Explore Articles
//             </Link>

//             <Link
//               href="/categories"
//               className="rounded-lg border px-6 py-3 text-sm font-medium"
//             >
//               Browse Categories
//             </Link>
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

import Container from "@/components/layout/Container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const articles = [
  {
    title: "Building Modern Web Applications with Next.js",
    category: "Next.js",
    readTime: "8 min read",
  },
  {
    title: "Master TypeScript for Large Scale Projects",
    category: "TypeScript",
    readTime: "6 min read",
  },
  {
    title: "Practical AI Tools Every Developer Should Know",
    category: "Artificial Intelligence",
    readTime: "5 min read",
  },
  {
    title: "Tailwind CSS Tips for Better UI Design",
    category: "CSS",
    readTime: "4 min read",
  },
  {
    title: "Deploy Your App Like a Professional",
    category: "DevOps",
    readTime: "7 min read",
  },
];

export default function Hero() {
  const router = useRouter();

  return (
    <section className="border-b">
      <Container>
        <div className="grid gap-6 py-8 lg:min-h-[520px] lg:grid-cols-[1.7fr_1fr]">
          {/* Featured Article */}
          <article
            onClick={() => router.push("/articles")}
            className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-3xl border bg-card"
          >
            <div className="relative aspect-[16/9] overflow-hidden lg:flex-1">
              <Image
                src="/images/blog.jpg"
                alt="Featured article"
                fill
                priority
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="space-y-4 p-6 md:p-8">
              <Badge>Featured Article</Badge>

              <h1 className="text-3xl font-bold leading-tight md:text-5xl">
                Building Modern Web Applications with Next.js
              </h1>

              <p className="line-clamp-3 max-w-2xl text-lg text-muted-foreground">
                Discover practical tutorials, development workflows,
                performance optimization, AI integration and software
                engineering insights for modern developers.
              </p>

              <div className="flex items-center justify-between border-t pt-5">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span>Next.js</span>
                  <span>•</span>
                  <span>8 min read</span>
                </div>

                <Button size="sm">
                  Read Article
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </div>
            </div>
          </article>

          {/* Recent Articles */}
          <aside className="grid gap-3 lg:grid-rows-5">
            {articles.slice(0, 5).map((article) => (
              <article
                key={article.title}
                onClick={() => router.push("/articles")}
                className="group flex cursor-pointer gap-4 overflow-hidden rounded-2xl border p-3 transition hover:bg-muted/40"
              >
                <div className="relative h-24 w-32 shrink-0 overflow-hidden rounded-xl">
                  <Image
                    src="/images/blog.jpg"
                    alt={article.title}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between py-1">
                  <div>
                    <p className="mb-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {article.category}
                    </p>

                    <h3 className="line-clamp-2 text-sm font-semibold leading-snug transition-colors group-hover:text-primary">
                      {article.title}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {article.readTime}
                    </span>

                    <ArrowRight className="size-4 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-primary" />
                  </div>
                </div>
              </article>
            ))}
          </aside>
        </div>
      </Container>
    </section>
  );
}