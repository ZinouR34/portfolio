"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Counter } from "@/components/counter";
import { floatingBadges, heroParagraph, roles, socialLinks, stats } from "@/lib/data";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay },
  }),
};

function RotatingRole() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2600);
    return () => clearInterval(timer);
  }, []);

  return (
    <span className="relative inline-grid h-9 overflow-hidden align-middle sm:h-10">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-display whitespace-nowrap text-xl font-bold text-primary sm:text-2xl"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative overflow-x-clip pt-32 sm:pt-36">
      {/* Ambient background */}
      <div aria-hidden className="dot-grid pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-24 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl dark:bg-primary/10"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-5 text-center sm:px-8">
        <motion.span
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-muted-foreground shadow-sm"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-primary" />
          </span>
          Open to internships & collaborations
        </motion.span>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
          className="font-display mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Hi, I&apos;m{" "}
          <span className="relative inline-block whitespace-normal text-primary">
            Zaaboub Zineddine Yanis
            <svg
              aria-hidden
              viewBox="0 0 320 14"
              className="absolute -bottom-2 left-0 w-full text-primary/60"
              preserveAspectRatio="none"
            >
              <path
                d="M4 10 C 80 2, 240 2, 316 8"
                fill="none"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="font-display mt-6 text-lg font-semibold sm:text-xl md:text-2xl"
        >
          Master&apos;s Student in Computer Science
          <span className="mx-2 text-primary" aria-hidden>
            ·
          </span>
          <span className="text-muted-foreground">Networks & Distributed Systems</span>
        </motion.p>

        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.28} className="mt-3">
          <RotatingRole />
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.36}
          className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          {heroParagraph}
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.44}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <Button asChild size="lg">
            <a href="#projects">
              View Portfolio
              <ArrowRight className="size-4" />
            </a>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <a href={site.resumeUrl} target="_blank" rel="noopener noreferrer">
              <FileText className="size-4" />
              View CV
            </a>
          </Button>
        </motion.div>

        <motion.ul
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.52}
          className="mt-7 flex items-center gap-3"
          aria-label="Social links"
        >
          {socialLinks.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex size-11 items-center justify-center rounded-full border border-border bg-card text-muted-foreground shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <social.icon className="size-5" />
              </a>
            </li>
          ))}
        </motion.ul>

        {/* Portrait with floating badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
          className="relative mx-auto mt-20 w-[260px] sm:w-[320px] lg:w-[370px]"
        >
          <div
            aria-hidden
            className="absolute -inset-12 rounded-full bg-primary/25 blur-3xl dark:bg-primary/15"
          />

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative aspect-[4/5] overflow-hidden rounded-b-[2.75rem] rounded-t-full bg-gradient-to-b from-[#FFD894] to-primary shadow-[0_40px_80px_-30px_rgba(245,166,35,0.55)] ring-8 ring-white/80 dark:ring-card"
          >
            <Image
              src={site.portraitSrc}
              alt={`Portrait of ${site.name}`}
              fill
              priority
              quality={92}
              sizes="(max-width: 640px) 260px, (max-width: 1024px) 320px, 370px"
              className="object-cover object-top"
            />
          </motion.div>

          {floatingBadges.map((badge, i) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + i * 0.08, type: "spring", stiffness: 260, damping: 18 }}
              className={cn("absolute z-10", badge.className)}
            >
              <motion.div
                animate={{ y: [0, -9, 0] }}
                transition={{
                  duration: badge.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: badge.delay,
                }}
                className="flex items-center gap-2 rounded-2xl border border-border/70 bg-card/95 px-3.5 py-2 text-sm font-semibold shadow-[0_14px_30px_-12px_rgba(24,18,13,0.28)] backdrop-blur"
              >
                <badge.icon className="size-4 text-primary" />
                {badge.label}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience counters */}
        <motion.div
          id="experience"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 w-full scroll-mt-28"
        >
          <Card className="grid grid-cols-2 gap-y-10 px-6 py-10 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={cn(
                  "flex flex-col items-center gap-1 text-center",
                  i > 0 && "lg:border-l lg:border-border",
                  i % 2 === 1 && "border-l border-border lg:border-l"
                )}
              >
                <span className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
                  <Counter to={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-sm font-medium text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
