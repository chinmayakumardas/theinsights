


"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Container from "@/components/layout/Container";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    // Fake delay to feel real
    await new Promise((resolve) => setTimeout(resolve, 800));

    setStatus("success");
    setEmail("");
  };

  return (
    <section className="py-10">
      <Container>
        <div className="relative overflow-hidden rounded-[1rem] bg-muted px-8 py-14 text-center sm:px-12 lg:px-20 lg:py-20">
          {/* Decorative gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />

          <div className="relative mx-auto max-w-xl">
            {status === "success" ? (
              /* Success state */
              <div className="flex flex-col items-center">
                <div className="mb-5 flex size-14 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle2 className="size-7 text-primary" />
                </div>
                <h2 className="mb-3 text-2xl font-bold tracking-tight sm:text-3xl">
                  You&apos;re subscribed!
                </h2>
                <p className="mb-6 text-[15px] leading-relaxed text-muted-foreground">
                  Thanks for joining. You&apos;ll get the best articles every
                  week — no spam.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-sm font-medium text-primary transition-opacity hover:opacity-80"
                >
                  Subscribe another email
                </button>
              </div>
            ) : (
              /* Form state */
              <>
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-primary">
                  Stay Updated
                </p>

                <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
                  Get the best articles in your inbox
                </h2>

                <p className="mb-8 text-[15px] leading-relaxed text-muted-foreground">
                  Join 12,000+ developers. No spam — just high-quality insights
                  delivered every week.
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    disabled={status === "loading"}
                    className="h-12 flex-1 rounded-full border bg-background px-5 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:opacity-60"
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-70"
                  >
                    {status === "loading" ? (
                      "Subscribing..."
                    ) : (
                      <>
                        Subscribe
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>

                <p className="mt-5 text-xs text-muted-foreground">
                  Free forever. Unsubscribe anytime.
                </p>
              </>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}