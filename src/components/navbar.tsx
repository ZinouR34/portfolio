"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { FileText, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { navLinks, sectionIds } from "@/lib/data";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

/** Tracks which section is currently in the viewport. */
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? "home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-35% 0px -60% 0px" }
    );
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const active = useActiveSection(sectionIds);

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 32));

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4">
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        aria-label="Main navigation"
        className={cn(
          "mx-auto flex items-center justify-between gap-3 transition-all duration-500",
          scrolled
            ? "mt-3 max-w-5xl rounded-full border border-border/80 bg-background/85 py-2 pl-5 pr-2.5 shadow-[0_18px_45px_-20px_rgba(24,18,13,0.35)] backdrop-blur-xl"
            : "mt-0 max-w-6xl border border-transparent bg-transparent py-5 pl-1 pr-0"
        )}
      >
        {/* Logo */}
        <a
          href="#home"
          className="group flex items-center gap-2.5 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <span className="font-display flex size-9 items-center justify-center rounded-xl bg-primary text-sm font-extrabold text-primary-foreground shadow-[0_8px_20px_-8px_rgba(245,166,35,0.8)] transition-transform duration-300 group-hover:rotate-6">
            {site.initials}
          </span>
          <span className="font-display text-base font-bold tracking-tight">
            {site.shortName}
            <span className="text-primary">.</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "relative rounded-full px-3 py-2 text-sm font-medium transition-colors duration-300",
                    isActive
                      ? "text-secondary-foreground dark:text-background"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      className="absolute inset-0 rounded-full bg-secondary dark:bg-foreground"
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href={site.resumeUrl} target="_blank" rel="noopener noreferrer">
              <FileText className="size-4" />
              Resume
            </a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mx-auto mt-2 max-w-5xl rounded-3xl border border-border bg-background/95 p-4 shadow-2xl backdrop-blur-xl lg:hidden"
          >
            <ul className="grid grid-cols-2 gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      "block rounded-2xl px-4 py-3 text-sm font-semibold transition-colors",
                      active === link.href.slice(1)
                        ? "bg-secondary text-secondary-foreground dark:bg-foreground dark:text-background"
                        : "text-muted-foreground hover:bg-accent hover:text-foreground"
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <Button asChild className="mt-3 w-full sm:hidden">
              <a href={site.resumeUrl} target="_blank" rel="noopener noreferrer">
                <FileText className="size-4" />
                View Resume
              </a>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
