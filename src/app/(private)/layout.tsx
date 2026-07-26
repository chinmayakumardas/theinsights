import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Content Studio",
  description: "Manage website content",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

interface StudioLayoutProps {
  children: ReactNode;
}

export default function StudioLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}