

import Hero from "@/components/home/Hero";
import LatestArticles from "@/components/home/LatestArticles";
import Newsletter from "@/components/home/Newsletter";
import PageWrapper from "@/components/layout/PageWrapper";

export default function HomePage() {
  return (
    <main>
      <PageWrapper>
        <Hero />
       
        <LatestArticles />
       <Newsletter />
      </PageWrapper>
    </main>
  );
}