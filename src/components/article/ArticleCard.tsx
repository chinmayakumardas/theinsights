import Image from "next/image";
import Link from "next/link";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  slug: string;
  image?: string;
  category?: string;
  date?: string;
}

export default function ArticleCard({
  title,
  excerpt,
  slug,
  image,
  category,
  date,
}: ArticleCardProps) {
  return (
    <article className="group overflow-hidden rounded-xl border bg-white">
      {image && (
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition duration-300 group-hover:scale-105"
          />
        </div>
      )}

      <div className="p-5">
        {category && (
          <p className="text-sm font-medium text-gray-500">
            {category}
          </p>
        )}

        <h3 className="mt-2 text-xl font-semibold leading-tight">
          <Link
            href={`/articles/${slug}`}
            className="hover:text-gray-700"
          >
            {title}
          </Link>
        </h3>

        <p className="mt-3 text-sm text-gray-600">
          {excerpt}
        </p>

        {date && (
          <time className="mt-4 block text-xs text-gray-400">
            {date}
          </time>
        )}
      </div>
    </article>
  );
}