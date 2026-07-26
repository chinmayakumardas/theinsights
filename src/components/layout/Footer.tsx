

import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";
import { Heart } from "lucide-react";
import Container from "./Container";

const footerLinks = [
  {
    title: "Explore",
    links: [
      { name: "Home", href: "/" },
      { name: "Articles", href: "/articles" },
    ],
  },
  {
    title: "Links",
    links: [
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms & Conditions", href: "/terms-and-conditions" },
    ],
  },
];

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/chinmayakumardas2",
    icon: FaLinkedin,
  },
  {
    name: "X",
    href: "https://x.com/chinmayakmrdas",
    icon: FaXTwitter,
  },
  {
    name: "GitHub",
    href: "https://github.com/chinmayakumardas",
    icon: FaGithub,
  },
];

export default function Footer() {
  return (
    <footer className="border-t  border-dashed border-border/60 bg-background">
      <Container className="border-x border-dashed border-border/60">
        <div className="grid gap-10 py-12 md:grid-cols-4">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-xl font-bold tracking-tight"
            >
              Insights
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-6 text-muted-foreground">
  Independent writing on technology, ideas, innovation, and the
  evolving digital landscape.
</p>

            <div className="mt-5 flex items-center gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="rounded-md p-2 text-muted-foreground transition-colors duration-200 hover:bg-muted hover:text-foreground"
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 text-sm font-semibold text-foreground">
                {section.title}
              </h3>

              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
       

        <div className="flex flex-col gap-2 border-t border-dashed py-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
  <p>
    © {new Date().getFullYear()} Insights.• All rights reserved.
  </p>

  <p className="flex items-center gap-1.5">
    Managed by
    <Heart className="h-4 w-4 fill-red-500 text-red-500" />
    by{" "}
    <Link
      href="https://chinmayakumardas.com"
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-foreground transition-colors hover:text-primary"
    >
      Chinmaya Kumar Das
    </Link>
  </p>
</div>
      </Container>
    </footer>
  );
}