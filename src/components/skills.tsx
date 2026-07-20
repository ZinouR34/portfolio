"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "@/components/section";
import { skillCategories } from "@/lib/data";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="My technical toolbox"
      description="The languages, frameworks and infrastructure I reach for when building and connecting systems."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, i) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <Card className="group h-full transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[0_24px_50px_-24px_rgba(245,166,35,0.45)]">
              <CardContent className="p-7">
                <div className="mb-5 flex items-center gap-3.5">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/15 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                    <category.icon className="size-6" />
                  </span>
                  <h3 className="font-display text-lg font-bold tracking-tight">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="px-3 py-1.5 text-[13px]">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
