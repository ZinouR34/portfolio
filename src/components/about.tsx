"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "@/components/section";
import { aboutFacts, aboutParagraphs, passions } from "@/lib/data";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About Me"
      title="Who is Zineddine?"
      description="A software engineer in the making, equally at home in application code and network diagrams."
    >
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <Card className="h-full">
          <CardContent className="flex h-full flex-col gap-5 p-7 sm:p-9">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
            <div className="mt-auto pt-2">
              <h3 className="font-display mb-3 text-sm font-bold uppercase tracking-[0.14em] text-foreground">
                Passionate about
              </h3>
              <div className="flex flex-wrap gap-2">
                {passions.map((passion, i) => (
                  <motion.span
                    key={passion}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, duration: 0.4 }}
                  >
                    <Badge className="px-3.5 py-1.5 text-[13px]">{passion}</Badge>
                  </motion.span>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="h-full bg-secondary text-secondary-foreground dark:bg-card dark:text-card-foreground">
          <CardContent className="flex h-full flex-col gap-1 p-7 sm:p-8">
            <h3 className="font-display mb-4 text-sm font-bold uppercase tracking-[0.14em] text-primary">
              Quick facts
            </h3>
            <ul className="flex flex-1 flex-col justify-between gap-4">
              {aboutFacts.map((fact) => (
                <li key={fact.label} className="flex items-start gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                    <fact.icon className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-secondary-foreground/60 dark:text-muted-foreground">
                      {fact.label}
                    </p>
                    <p className="truncate font-semibold">{fact.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
