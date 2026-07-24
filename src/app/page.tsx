
import Hero from "@/components/home/Hero";
import FeaturedArticles from "@/components/home/FeaturedArticle";
import LatestArticles from "@/components/home/LatestArticles";
// import Categories from "@/components/home/CategoryGrid";
import PopularArticles from "@/components/home/PopularArticles";
import Newsletter from "@/components/home/Newsletter";
import PageWrapper from "@/components/layout/PageWrapper";

export default function HomePage() {
  return (
    <main>
      <PageWrapper>
        <Hero />

        <FeaturedArticles />

        <LatestArticles />

        {/* <Categories /> */}

        <PopularArticles />

        <Newsletter />
      </PageWrapper>
    </main>
  );
}

