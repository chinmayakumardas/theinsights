import Link from "next/link";
import Container from "@/components/layout/Container";

export default function Hero() {
  return (
    <section className=" bg-white">
      <Container className="py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Insights, tutorials and ideas for modern technology
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            Explore practical articles about development, tools,
            engineering, business and technology trends.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="/articles"
              className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white"
            >
              Explore Articles
            </Link>

            <Link
              href="/categories"
              className="rounded-lg border px-6 py-3 text-sm font-medium"
            >
              Browse Categories
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}


