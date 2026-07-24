"use client";

import Link from "next/link";
import { Menu, Search } from "lucide-react";

import Container from "./Container";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Categories",
    href: "/category/all",
  },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-dashed bg-background/80 backdrop-blur">
      <Container className="border-x border-dashed border-border/60">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold tracking-tight"
          >
            Insights
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-2 md:flex">
            <Button
              variant="ghost"
              size="icon"
            >
              <Search className="size-5" />
            </Button>
          </div>

          {/* Mobile */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right">
              <nav className="mt-10 flex flex-col gap-6">
                {navItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="text-base font-medium"
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}


