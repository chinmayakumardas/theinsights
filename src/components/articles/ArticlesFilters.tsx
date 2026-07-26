import { Search } from "lucide-react";

interface ArticlesFiltersProps {
  categories: string[];
  activeCategory: string;
  search: string;
  onCategoryChange: (category: string) => void;
  onSearchChange: (value: string) => void;
}

export default function ArticlesFilters({
  categories,
  activeCategory,
  search,
  onCategoryChange,
  onSearchChange,
}: ArticlesFiltersProps) {
  return (
    <div className="mb-10 space-y-5">
      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search articles..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="h-11 w-full rounded-full border bg-background pl-11 pr-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
              activeCategory === category
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}