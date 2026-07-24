import Link from "next/link";

interface CategoryCardProps {
  name: string;
  slug: string;
  description?: string;
  count?: number;
}

export default function CategoryCard({
  name,
  slug,
  description,
  count,
}: CategoryCardProps) {
  return (
    <Link
      href={`/category/${slug}`}
      className="block rounded-xl border bg-white p-6 transition hover:shadow-md"
    >
      <h3 className="text-xl font-semibold">
        {name}
      </h3>

      {description && (
        <p className="mt-2 text-sm text-gray-600">
          {description}
        </p>
      )}

      {count !== undefined && (
        <p className="mt-4 text-sm text-gray-400">
          {count} Articles
        </p>
      )}
    </Link>
  );
}