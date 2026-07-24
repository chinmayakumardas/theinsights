import CategoryCard from "@/components/category/CategoryCard";
import Container from "@/components/layout/Container";

const categories = [
  {
    name: "Development",
    slug: "development",
    description:
      "Programming, frameworks and software engineering.",
    count: 12,
  },
  {
    name: "Technology",
    slug: "technology",
    description:
      "Latest trends, tools and technology insights.",
    count: 8,
  },
  {
    name: "SaaS",
    slug: "saas",
    description:
      "Building and scaling software products.",
    count: 6,
  },
];

export default function Categories() {
  return (
    <section className="py-16">
      <Container>
        <h2 className="mb-8 text-3xl font-bold">
          Categories
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard
              key={category.slug}
              {...category}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}