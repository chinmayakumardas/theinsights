import Link from "next/link";
import { Home, FileQuestion } from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";

export default function NotFound() {
  return (
      <PageWrapper>
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-md text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-muted">
          <FileQuestion className="h-10 w-10 text-muted-foreground" />
        </div>

        <h1 className="text-7xl font-bold tracking-tight">404</h1>

        <h2 className="mt-4 text-2xl font-semibold">
          Page Not Found
        </h2>

        <p className="mt-3 text-muted-foreground">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
        >
          <Home className="h-4 w-4" />
          Back to Home
        </Link>
      </div>
    </main>
        </PageWrapper>
  );
}