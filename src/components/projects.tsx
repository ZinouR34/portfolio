"use client";

import { motion } from "framer-motion";
import { Check, Coffee, ExternalLink, QrCode } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "@/components/section";
import { projects } from "@/lib/data";
import { site } from "@/lib/site";

/** Decorative order-flow mock for the featured project. */
function FeaturedVisual() {
  return (
    <div className="relative flex h-full min-h-[300px] items-center justify-center overflow-hidden rounded-[1.5rem] bg-secondary p-8 dark:bg-[#0f0b06]">
      <div
        aria-hidden
        className="absolute -right-10 -top-10 size-48 rounded-full bg-primary/25 blur-3xl"
      />
      <QrCode
        aria-hidden
        className="absolute -bottom-8 -left-8 size-48 rotate-12 text-primary/15"
      />

      <div className="relative flex w-full max-w-xs flex-col gap-3">
        <motion.div
          animate={{ y: [0, -7, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 backdrop-blur"
        >
          <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <QrCode className="size-5" />
          </span>
          <div className="min-w-0 text-left">
            <p className="text-sm font-bold text-white">Table 4 scanned the menu</p>
            <p className="text-xs text-white/60">2× Cappuccino · 1× Croissant</p>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, -7, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          className="ml-8 flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 backdrop-blur"
        >
          <span className="flex size-10 items-center justify-center rounded-xl bg-primary/20 text-primary">
            <Coffee className="size-5" />
          </span>
          <div className="min-w-0 text-left">
            <p className="text-sm font-bold text-white">Kitchen station</p>
            <p className="text-xs text-white/60">Order #42 — preparing…</p>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, -7, 0] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
          className="flex items-center gap-3 rounded-2xl bg-primary px-4 py-3 shadow-lg"
        >
          <span className="flex size-10 items-center justify-center rounded-xl bg-primary-foreground/15 text-primary-foreground">
            <Check className="size-5" />
          </span>
          <div className="min-w-0 text-left">
            <p className="text-sm font-bold text-primary-foreground">Order ready</p>
            <p className="text-xs text-primary-foreground/70">Realtime · 0.4s latency</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function Projects() {
  const [featured, ...others] = projects;

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Things I've built"
      description="Selected work across full-stack development, networking and simulation."
    >
      {/* Featured project */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <Card className="group mb-6 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-24px_rgba(245,166,35,0.4)]">
          <CardContent className="grid gap-8 p-6 sm:p-8 lg:grid-cols-2 lg:items-center">
            <div className="flex flex-col items-start gap-4">
              <Badge variant="solid" className="px-3.5 py-1.5">
                ★ Featured Project
              </Badge>
              <h3 className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
                {featured.title}
              </h3>
              <p className="leading-relaxed text-muted-foreground">{featured.description}</p>
              <div className="flex flex-wrap gap-2">
                {featured.features.map((feature) => (
                  <Badge key={feature} variant="outline" className="px-3 py-1">
                    {feature}
                  </Badge>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {featured.stack.map((tech) => (
                  <Badge key={tech} className="px-3 py-1">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="mt-2 flex flex-wrap gap-3">
                <Button asChild size="sm" variant="secondary">
                  <a href={site.socials.github} target="_blank" rel="noopener noreferrer">
                    <GithubIcon className="size-4" />
                    View Code
                  </a>
                </Button>
                <Button asChild size="sm" variant="outline">
                  <a href={site.socials.github} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="size-4" />
                    Live Demo
                  </a>
                </Button>
              </div>
            </div>
            <FeaturedVisual />
          </CardContent>
        </Card>
      </motion.div>

      {/* Other projects */}
      <div className="grid gap-5 md:grid-cols-3">
        {others.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <Card className="group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[0_24px_50px_-24px_rgba(245,166,35,0.45)]">
              <div className="relative m-3 flex h-36 items-center justify-center overflow-hidden rounded-[1.25rem] bg-gradient-to-br from-accent to-primary/25 dark:from-accent dark:to-primary/15">
                <project.icon className="size-14 text-primary transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110" />
              </div>
              <CardContent className="flex flex-1 flex-col gap-3 p-6 pt-3">
                <h3 className="font-display text-lg font-bold tracking-tight">{project.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.features.map((feature) => (
                    <Badge key={feature} variant="outline" className="px-2.5 py-0.5 text-[11px]">
                      {feature}
                    </Badge>
                  ))}
                </div>
                <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                  {project.stack.map((tech) => (
                    <Badge key={tech} className="px-2.5 py-0.5 text-[11px]">
                      {tech}
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
