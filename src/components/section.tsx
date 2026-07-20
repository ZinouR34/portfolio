"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  className?: string;
  children: React.ReactNode;
};

export function Section({ id, eyebrow, title, description, className, children }: SectionProps) {
  return (
    <section id={id} className={cn("relative mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 md:py-28", className)}>
      {(eyebrow || title) && (
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 flex flex-col items-center gap-4 text-center md:mb-16"
        >
          {eyebrow && (
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground shadow-sm">
              <span className="size-1.5 rounded-full bg-primary" aria-hidden />
              {eyebrow}
            </span>
          )}
          {title && (
            <h2 className="font-display max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              {title}
            </h2>
          )}
          {description && (
            <p className="max-w-2xl text-base text-muted-foreground md:text-lg">{description}</p>
          )}
        </motion.div>
      )}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      >
        {children}
      </motion.div>
    </section>
  );
}
