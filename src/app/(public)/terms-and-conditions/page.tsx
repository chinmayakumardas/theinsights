import Container from "@/components/layout/Container";
import PageWrapper from "@/components/layout/PageWrapper";

export default function TermsPage() {
  return (
    <main>
              <PageWrapper >
      <section>
        
        <Container className="py-16">
          {/* Header */}
          <header className="mx-auto mb-12 max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Terms and Conditions
            </h1>

            <p className="mt-4 text-sm text-gray-600">
              Last updated: July 24, 2026
            </p>
          </header>

          {/* Content */}
          <article className="mx-auto max-w-3xl space-y-10 leading-8 text-gray-700">
            <p>
              Welcome to <strong>Insights</strong>. By accessing or using this
              website, you agree to be bound by these Terms and Conditions. If
              you do not agree with any part of these Terms, please discontinue
              using the website.
            </p>

            <section className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900">
                Use of the Website
              </h2>

              <p>
                You agree to use this website only for lawful purposes and in a
                manner that does not violate applicable laws or interfere with
                the operation of the website or the rights of others.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900">
                Intellectual Property
              </h2>

              <p>
                Unless otherwise stated, all content on this website,
                including articles, text, graphics, logos, images, and other
                materials, is the property of Insights and is protected by
                applicable intellectual property laws.
              </p>

              <p>
                You may access and share our content for personal,
                non-commercial use. You may not reproduce, modify, distribute,
                or republish any content without prior written permission.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900">
                User Content
              </h2>

              <p>
                If you submit comments, feedback, or other content, you remain
                responsible for your submissions. You agree that your content
                will not violate any laws or infringe the rights of others.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900">
                Third-Party Links
              </h2>

              <p>
                Our website may contain links to third-party websites. These
                links are provided for convenience only. We are not responsible
                for the content, privacy policies, or practices of external
                websites.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900">
                Disclaimer
              </h2>

              <p>
                The information provided on this website is for general
                informational purposes only. While we strive to keep the content
                accurate and up to date, we make no warranties regarding its
                completeness, accuracy, or reliability.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900">
                Limitation of Liability
              </h2>

              <p>
                To the fullest extent permitted by law, Insights shall not be
                liable for any direct, indirect, incidental, consequential, or
                special damages arising from your use of this website.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900">
                Changes to These Terms
              </h2>

              <p>
                We may update these Terms and Conditions from time to time. Any
                changes will become effective immediately after they are posted
                on this page. Your continued use of the website constitutes your
                acceptance of the revised Terms.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900">
                Contact Us
              </h2>

              <p>
                If you have any questions about these Terms and Conditions,
                please contact us:
              </p>

              <p className="font-medium text-gray-900">
Email: chinmayakumardas2000@gmail.com              </p>
            </section>
          </article>
        </Container>
      </section>
      </PageWrapper>
    </main>
  );
}