
"use client";

import { useState, useMemo } from "react";
import Container from "@/components/layout/Container";
import ArticlesHeader from "./ArticlesHeader";
import ArticlesFilters from "./ArticlesFilters";
import ArticlesGrid from "./ArticlesGrid";
import ArticlesPagination from "./ArticlesPagination";
import { Article } from "@/sanity/lib/types";

const ARTICLES_PER_PAGE = 6;

interface ArticlesPageProps {
  initialArticles: Article[];
}

export default function ArticlesPage({ initialArticles }: ArticlesPageProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Get unique categories from Sanity data
  const categories = useMemo(() => {
    const cats = initialArticles
      .map((article) => article.category?.title)
      .filter(Boolean) as string[];

    return ["All", ...Array.from(new Set(cats))];
  }, [initialArticles]);

  const filteredArticles = useMemo(() => {
    return initialArticles.filter((article) => {
      const matchesCategory =
        activeCategory === "All" ||
        article.category?.title === activeCategory;

      const matchesSearch =
        article.title.toLowerCase().includes(search.toLowerCase()) ||
        (article.excerpt || "")
          .toLowerCase()
          .includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [initialArticles, activeCategory, search]);

  const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE);

  const paginatedArticles = filteredArticles.slice(
    (currentPage - 1) * ARTICLES_PER_PAGE,
    currentPage * ARTICLES_PER_PAGE
  );

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const handleSearch = (value: string) => {
    setSearch(value);
    setCurrentPage(1);
  };

  return (
    <section className="py-10 lg:py-14">
      <Container>
        <ArticlesHeader />

        <ArticlesFilters
          categories={categories}
          activeCategory={activeCategory}
          search={search}
          onCategoryChange={handleCategoryChange}
          onSearchChange={handleSearch}
        />

        <ArticlesGrid articles={paginatedArticles} />

        {totalPages > 1 && (
          <ArticlesPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </Container>
    </section>
  );
}