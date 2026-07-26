import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";

import { cn } from "@/lib/utils";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});
const GOOGLE_SITE_VERIFICATION =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const metadata: Metadata = {
  metadataBase: new URL("https://insights.chinmayakumardas.com"), // Change to your domain

  title: {
    default: "Insights-Chinmaya Kumar das",
    template: "%s | Insights",
  },

  description:
    "Insights is a modern blog covering SEO, AI, web development, Next.js, technology, digital marketing, and programming tutorials.",

  keywords: [
    "SEO",
    "Local SEO",
    "AI",
    "Next.js",
    "React",
    "Programming",
    "Web Development",
    "Digital Marketing",
    "Technology",
    "JavaScript",
    "TypeScript",
  ],

  applicationName: "Insights",

  authors: [
    {
      name: "Insights",
    },
  ],

  creator: "Insights",

  publisher: "Insights",

  category: "Technology",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  verification: {
    google: GOOGLE_SITE_VERIFICATION,
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://insights.chinmayakumardas.com",
    siteName: "Insights",
    title: "Insights",
    description:
      "Read expert articles on SEO, AI, web development, Next.js, programming, and digital marketing.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Insights",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Insights",
    description:
      "Latest insights on SEO, AI, web development, and technology.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: Readonly<RootLayoutProps>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("font-sans", geist.variable)}
    >
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
        {GA_MEASUREMENT_ID && (
          <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
        )}
      </body>
    </html>
  );
}