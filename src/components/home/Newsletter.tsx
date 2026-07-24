import Container from "@/components/layout/Container";

export default function Newsletter() {
  return (

     <section className="py-10">
      <Container>
<div className="rounded-2xl border bg-muted/30 px-6 py-12 text-center md:px-12">

        <h2 className="text-3xl font-bold">
          Stay Updated
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Get the latest articles about Next.js, React,
          TypeScript, AI, and modern software engineering.
        </p>


        <form className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
          <input
            type="email"
            placeholder="Enter your email"
            className="h-11 flex-1 rounded-md border bg-background px-4 text-sm outline-none focus:ring-2 focus:ring-primary"
          />

          <button
            type="submit"
            className="h-11 rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            Subscribe
          </button>
        </form>


        <p className="mt-4 text-xs text-muted-foreground">
          No spam. Only useful engineering content.
        </p>

      </div>
      </Container>
     </section>
  );
}