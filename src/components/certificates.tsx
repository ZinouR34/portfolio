"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "@/components/section";
import { certificates } from "@/lib/data";

const statusVariant = {
  "In Progress": "solid",
  Future: "default",
  Planned: "outline",
} as const;

export function Certificates() {
  return (
    <Section
      id="certificates"
      eyebrow="Certificates"
      title="Certifications roadmap"
      description="Credentials I'm actively pursuing — placeholders until each one is earned."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((certificate, i) => (
          <motion.div
            key={certificate.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <Card className="group h-full transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[0_24px_50px_-24px_rgba(245,166,35,0.45)]">
              <CardContent className="flex h-full flex-col items-start gap-4 p-7">
                <div className="flex w-full items-start justify-between gap-3">
                  <span className="flex size-13 items-center justify-center rounded-2xl bg-primary/15 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                    <certificate.icon className="size-6" />
                  </span>
                  <Badge variant={statusVariant[certificate.status]}>{certificate.status}</Badge>
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold tracking-tight">
                    {certificate.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{certificate.issuer}</p>
                </div>
                <p className="mt-auto rounded-2xl border border-dashed border-border px-4 py-2.5 text-xs text-muted-foreground">
                  Certificate placeholder — will be added once earned.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
