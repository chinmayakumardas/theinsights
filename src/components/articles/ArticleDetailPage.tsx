


"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Clock,
  Calendar,
  List,
  Share2,
  Link2,
  Check,
} from "lucide-react";
import Container from "@/components/layout/Container";
import { urlFor } from "@/sanity/lib/image";
import { PortableText, PortableTextComponents } from "@portabletext/react";

interface Article {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content: any[];
  mainImage?: any;
  publishedAt: string;
  featured?: boolean;
  category?: {
    title: string;
    slug: string;
  };
  author?: {
    name: string;
    image?: any;
    bio?: string;
  };
}

interface ArticleDetailPageProps {
  article: Article;
}

// Calculate read time from Portable Text content
function getReadTime(content: any[]): string {
  if (!content?.length) return "1 min";

  const text = content
    .filter((block) => block._type === "block")
    .map((block) =>
      block.children?.map((child: any) => child.text || "").join("") || ""
    )
    .join(" ");

  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200)); // 200 wpm
  return `${minutes} min`;
}

const portableTextComponents: PortableTextComponents = {
  block: {
    h1: ({ children, value }) => (
      <h1 id={value?._key} className="scroll-mt-24">
        {children}
      </h1>
    ),
    h2: ({ children, value }) => (
      <h2
        id={value?._key}
        className="mt-12 mb-4 scroll-mt-24 text-2xl font-bold tracking-tight"
      >
        {children}
      </h2>
    ),
    h3: ({ children, value }) => (
      <h3
        id={value?._key}
        className="mt-8 mb-3 scroll-mt-24 text-xl font-semibold"
      >
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="mb-6 text-base leading-8 text-muted-foreground">
        {children}
      </p>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold">{children}</strong>
    ),
    em: ({ children }) => <em>{children}</em>,
    code: ({ children }) => (
      <code className="rounded bg-muted px-1.5 py-0.5 text-sm">
        {children}
      </code>
    ),
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary underline underline-offset-4"
      >
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-6 list-disc space-y-2 pl-6">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="mb-6 list-decimal space-y-2 pl-6">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      return (
        <div className="my-10 overflow-hidden rounded-xl">
          <Image
            src={urlFor(value).width(1200).url()}
            alt={value.alt || ""}
            width={1200}
            height={675}
            className="h-auto w-full object-cover"
          />
        </div>
      );
    },
  },
};

export default function ArticleDetailPage({
  article,
}: ArticleDetailPageProps) {
  const [activeId, setActiveId] = useState("");
  const [copied, setCopied] = useState(false);

  const readTime = getReadTime(article.content);

  const headings =
    article.content
      ?.filter(
        (block: any) => block._type === "block" && block.style === "h2"
      )
      .map((block: any) => ({
        id: block._key,
        text: block.children?.map((child: any) => child.text).join("") || "",
      })) || [];

  useEffect(() => {
    if (!headings.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-25% 0px -60% 0px",
        threshold: 0.2,
      }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  const shareUrl =
    typeof window !== "undefined" ? window.location.href : "";

  const shareLinks = [
    {
      name: "X",
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        article.title
      )}&url=${encodeURIComponent(shareUrl)}`,
    },
    {
      name: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        shareUrl
      )}`,
    },
    {
      name: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        shareUrl
      )}`,
    },
  ];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback silent
    }
  };

  return (
    <article className="pb-20 lg:pb-28">
      <Container>
        {/* ========== TOP SECTION ========== */}
        <div className="pt-10 lg:pt-14">
          <Link
            href="/articles"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to articles
          </Link>

          {article.category?.title && (
            <div className="mb-4">
              <span className="rounded-full bg-primary px-3.5 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary-foreground">
                {article.category.title}
              </span>
            </div>
          )}

          <h1 className="mb-5 max-w-3xl text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.75rem]">
            {article.title}
          </h1>

          {/* Meta + Share */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {new Date(article.publishedAt).toLocaleDateString()}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {readTime} read
              </div>
              {article.author?.name && (
                <span>By {article.author.name}</span>
              )}
            </div>

            {/* Share */}
            <div className="flex items-center gap-2">
              <Share2 className="h-4 w-4 text-muted-foreground" />
              {shareLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md px-2.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5" />
                    Copied
                  </>
                ) : (
                  <>
                    <Link2 className="h-3.5 w-3.5" />
                    Copy
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* ========== IMAGE ========== */}
        <div className="relative mb-12 aspect-[16/9] overflow-hidden rounded-2xl sm:rounded-3xl">
          <Image
            src={
              article.mainImage
                ? urlFor(article.mainImage).width(1400).url()
                : "/images/blog.jpg"
            }
            alt={article.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        </div>

        {/* ========== CONTENT + TOC ========== */}
        <div className="grid gap-12 lg:grid-cols-[1fr_240px]">
          <div>
            <div
              className="prose prose-neutral dark:prose-invert max-w-none
              prose-headings:scroll-mt-24
              prose-headings:font-bold
              prose-headings:tracking-tight
              prose-h2:mt-12
              prose-h2:mb-4
              prose-h2:text-2xl
              prose-p:text-[16px]
              prose-p:leading-relaxed"
            >
              <PortableText
                value={article.content}
                components={portableTextComponents}
              />
            </div>
          </div>

          {/* Table of Contents */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <div className="mb-4 flex items-center gap-2 text-sm font-semibold">
                <List className="h-4 w-4" />
                On this page
              </div>
              <nav className="space-y-1 border-l">
                {headings.map((heading) => (
                  <a
                    key={heading.id}
                    href={`#${heading.id}`}
                    className={`block border-l-2 py-1.5 pl-4 text-sm transition-colors ${
                      activeId === heading.id
                        ? "border-primary font-medium text-primary"
                        : "border-transparent text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {heading.text}
                  </a>
                ))}
              </nav>
            </div>
          </aside>
        </div>
      </Container>
    </article>
  );
}