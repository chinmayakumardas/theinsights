
"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { Menu, Search, X } from "lucide-react";
import Container from "./Container";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchOpen) searchInputRef.current?.focus();
  }, [searchOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-dashed bg-background/80 backdrop-blur">
      <Container className="border-x border-dashed border-border/60">
        <div className="relative flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="cursor-pointer text-xl font-bold tracking-tight"
          >
            Insights
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="/about"
              className="cursor-pointer text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              About
            </Link>
            <Link
              href="/articles"
              className="cursor-pointer text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Articles
            </Link>
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setSearchOpen(true)}
              className="inline-flex size-9 cursor-pointer items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <Search className="size-5" />
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="inline-flex size-9 cursor-pointer items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground md:hidden"
            >
              {mobileOpen ? (
                <X className="size-5" />
              ) : (
                <Menu className="size-5" />
              )}
            </button>
          </div>

          {/* Mobile dropdown - floats under header */}
          {mobileOpen && (
            <>
              <div
                className="fixed inset-0 z-40 md:hidden"
                onClick={() => setMobileOpen(false)}
              />
              <div className="absolute left-0 right-0 top-full z-50 border-b border-dashed border-border bg-background shadow-md md:hidden">
                <nav className="flex flex-col gap-1 px-4 py-3">
                  <Link
                    href="/about"
                    onClick={() => setMobileOpen(false)}
                    className="cursor-pointer rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    About
                  </Link>
                  <Link
                    href="/articles"
                    onClick={() => setMobileOpen(false)}
                    className="cursor-pointer rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    Articles
                  </Link>
                </nav>
              </div>
            </>
          )}
        </div>
      </Container>

      {/* Search */}
      {searchOpen && (
        <div className="fixed inset-0 z-[80] flex items-start justify-center pt-[20vh]">
          <div
            className="absolute inset-0 cursor-pointer"
            onClick={() => setSearchOpen(false)}
          />
          <div className="relative z-10 w-full max-w-lg px-4">
            <div className="overflow-hidden rounded-xl border border-border bg-background shadow-lg">
              <div className="flex items-center gap-3 px-4">
                <Search className="size-5 shrink-0 text-muted-foreground" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search articles..."
                  className="h-12 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                  onKeyDown={(e) => {
                    if (e.key === "Escape") setSearchOpen(false);
                  }}
                />
                <button
                  onClick={() => setSearchOpen(false)}
                  className="cursor-pointer rounded-md p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <X className="size-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}