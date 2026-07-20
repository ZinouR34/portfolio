"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "@/components/section";
import { education } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title="My academic journey"
      description="Both chapters written at Ferhat Abbas University Sétif 1."
    >
      <div className="relative mx-auto max-w-3xl">
        {/* Timeline rail */}
        <div
          aria-hidden
          className="absolute bottom-6 left-[22px] top-6 w-0.5 border-l-2 border-dashed border-primary/40"
        />

        <ol className="flex flex-col gap-8">
          {education.map((entry, i) => {
            const isCurrent = entry.status === "Current";
            return (
              <motion.li
                key={entry.degree}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative pl-16"
              >
                <span
                  className={cn(
                    "absolute left-0 top-7 flex size-11 items-center justify-center rounded-full ring-8 ring-background",
                    isCurrent
                      ? "bg-primary text-primary-foreground shadow-[0_0_0_6px_rgba(245,166,35,0.25)]"
                      : "bg-secondary text-secondary-foreground dark:bg-foreground dark:text-background"
                  )}
                >
                  <GraduationCap className="size-5" />
                  {isCurrent && (
                    <span
                      aria-hidden
                      className="absolute inset-0 animate-ping rounded-full bg-primary/40"
                    />
                  )}
                </span>

                <Card
                  className={cn(
                    "transition-all duration-300 hover:-translate-y-1",
                    isCurrent && "border-primary/50"
                  )}
                >
                  <CardContent className="p-6 sm:p-7">
                    <div className="mb-2 flex flex-wrap items-center gap-3">
                      <h3 className="font-display text-xl font-extrabold tracking-tight">
                        {entry.degree}
                      </h3>
                      <Badge variant={isCurrent ? "solid" : "outline"}>
                        {isCurrent ? "Current" : entry.status}
                      </Badge>
                    </div>
                    <p className="font-semibold text-primary">{entry.field}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{entry.school}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {entry.details.map((detail) => (
                        <Badge key={detail} variant="outline" className="px-2.5 py-1 text-[12px]">
                          {detail}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}
