"use client";

import { ArrowUp, Heart } from "lucide-react";
import { socialLinks } from "@/lib/data";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:px-8 md:flex-row">
        <a href="#home" className="group flex items-center gap-2.5">
          <span className="font-display flex size-9 items-center justify-center rounded-xl bg-primary text-sm font-extrabold text-primary-foreground transition-transform duration-300 group-hover:rotate-6">
            {site.initials}
          </span>
          <span className="font-display text-base font-bold tracking-tight">
            {site.shortName}
            <span className="text-primary">.</span>
          </span>
        </a>

        <div className="text-center text-sm text-muted-foreground">
          <p>© 2026 {site.name}</p>
          <p className="mt-1 inline-flex items-center gap-1.5">
            Built with Next.js &
            <Heart className="size-3.5 fill-primary text-primary" aria-label="love" />
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >
              <social.icon className="size-[18px]" />
            </a>
          ))}
          <a
            href="#home"
            aria-label="Back to top"
            className="ml-1 flex size-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition-all duration-300 hover:-translate-y-1 dark:bg-foreground dark:text-background"
          >
            <ArrowUp className="size-[18px]" />
          </a>
        </div>
      </div>
    </footer>
  );
}
