import { ChevronLeft, ChevronRight } from "lucide-react";

interface ArticlesPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function ArticlesPagination({
  currentPage,
  totalPages,
  onPageChange,
}: ArticlesPaginationProps) {
  if (totalPages <= 1) return null;

  const getVisiblePages = () => {
    const pages: (number | string)[] = [];

    // Always show first page
    pages.push(1);

    // Left ellipsis
    if (currentPage > 3) {
      pages.push("...");
    }

    // Pages around current
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      if (!pages.includes(i)) {
        pages.push(i);
      }
    }

    // Right ellipsis
    if (currentPage < totalPages - 2) {
      pages.push("...");
    }

    // Always show last page
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    // Remove duplicates while preserving order
    return [...new Set(pages)];
  };

  const visiblePages = getVisiblePages();

  return (
    <div className="mt-14 flex items-center justify-center gap-1.5">
      {/* Previous Icon */}
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="flex h-10 w-10 items-center justify-center rounded-full border transition-colors disabled:cursor-not-allowed disabled:opacity-40 hover:bg-muted"
        aria-label="Previous page"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>

      {/* Page Numbers */}
      {visiblePages.map((page, index) =>
        page === "..." ? (
          <span
            key={`ellipsis-${index}`}
            className="flex h-10 w-10 items-center justify-center text-sm text-muted-foreground"
          >
            ...
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(page as number)}
            className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium transition-all ${
              currentPage === page
                ? "bg-primary text-primary-foreground"
                : "hover:bg-muted"
            }`}
          >
            {page}
          </button>
        )
      )}

      {/* Next Icon */}
      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="flex h-10 w-10 items-center justify-center rounded-full border transition-colors disabled:cursor-not-allowed disabled:opacity-40 hover:bg-muted"
        aria-label="Next page"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}