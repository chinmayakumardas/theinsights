import Container from "@/components/layout/Container";
import PageWrapper from "@/components/layout/PageWrapper";

export default function AboutPage() {
  return (
    <main>
      <PageWrapper>
        <section>
          <Container className="py-16">
            {/* Header */}
            <header className="mx-auto mb-12 max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                About
              </h1>

              <p className="mt-4 text-gray-600">
                The story behind Insights and why I started writing.
              </p>
            </header>

            {/* Content */}
            <article className="mx-auto max-w-3xl space-y-12 leading-8 text-gray-700">
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">
                  Hi, I'm Chinmaya Kumar 
                </h2>

                <p>
                  I'm a software engineer who enjoys building digital products,
                  solving real-world problems, and continuously learning about
                  technology. Throughout my journey, I've realized that some of
                  the most valuable lessons come from sharing knowledge and
                  experiences with others.
                </p>

                <p>
                  That's why I created <strong>Insights</strong>—a place where I
                  can write about ideas, experiences, observations, and lessons
                  learned while exploring technology and the ever-changing
                  digital world.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">
                  Why This Blog Exists
                </h2>

                <p>
                  The internet is full of information, but not all of it is
                  meaningful. My goal isn't to publish as many articles as
                  possible—it's to publish content that is thoughtful, useful,
                  and worth reading.
                </p>

                <p>
                  Whether it's a new idea, an industry observation, or something
                  I've learned through experience, I hope each article helps
                  readers discover a new perspective or think about a topic in a
                  different way.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">
                  What You'll Find Here
                </h2>

                <p>
                  Insights is a collection of articles, opinions, practical
                  ideas, and thoughtful discussions inspired by technology,
                  innovation, software, and the digital world. Rather than
                  focusing on a single niche, I write about topics that I find
                  interesting, useful, and worth sharing.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">
                  My Approach
                </h2>

                <p>
                  Every article is written with curiosity, clarity, and honesty.
                  I value quality over quantity and believe that learning is a
                  continuous process. As technology evolves, so will the ideas
                  and conversations shared through Insights.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">
                  Let's Connect
                </h2>

                <p>
                  If you have feedback, suggestions, or simply want to start a
                  conversation, I'd love to hear from you. Feel free to reach
                  out anytime.
                </p>

                <p className="font-medium text-gray-900">
                  Email: chinmayakumardas2000@gmail.com
                </p>
              </section>
            </article>
          </Container>
        </section>
      </PageWrapper>
    </main>
  );
}