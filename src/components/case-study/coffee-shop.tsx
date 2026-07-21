"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BellRing,
  ChefHat,
  CreditCard,
  LayoutDashboard,
  Lock,
  MonitorSmartphone,
  QrCode,
  Radio,
  SlidersHorizontal,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import { Footer } from "@/components/footer";
import { projects } from "@/lib/data";
import { site } from "@/lib/site";

const stack = ["Next.js", "React", "Supabase", "PostgreSQL", "TailwindCSS", "Vercel"];

const demoUrl =
  projects.find((p) => p.featured)?.demoUrl ??
  "https://coffee-flow-zineddine.vercel.app/shop/anis/table/1/menu";

const journey = [
  {
    step: "01",
    title: "Scan & browse the menu",
    caption:
      "Each table has its own QR code. Scanning opens the live menu — searchable, organized by category, no app install needed.",
    src: "/projects/coffee/menu.jpg",
  },
  {
    step: "02",
    title: "Customize the product",
    caption:
      "Sizes, options and special instructions with live price updates before adding to the cart.",
    src: "/projects/coffee/product.jpg",
  },
  {
    step: "03",
    title: "Review the cart",
    caption:
      "Quantities, notes for the team (allergies, timing…) and a clear total before confirming.",
    src: "/projects/coffee/cart.jpg",
  },
  {
    step: "04",
    title: "Order sent in realtime",
    caption:
      "The order lands instantly at the counter and kitchen. The customer follows a live status timeline.",
    src: "/projects/coffee/tracking.jpg",
  },
  {
    step: "05",
    title: "Ready — served at the table",
    caption:
      "Every stage is pushed live: accepted, in preparation, ready. No waiting at the counter, no shouting order numbers.",
    src: "/projects/coffee/tracking-complete.jpg",
  },
];

const adminScreens = [
  {
    title: "Manager overview",
    caption:
      "Daily revenue, orders in progress, average basket, best sellers and the latest orders — the whole shop at a glance.",
    src: "/projects/coffee/dashboard.png",
  },
  {
    title: "Cashier POS",
    caption:
      "Counter orders in a few taps: product grid with categories and search, table or takeaway, notes and instant totals.",
    src: "/projects/coffee/pos.png",
  },
  {
    title: "Product management",
    caption:
      "Full CRUD over the menu — categories, options, photos, prices and per-product availability toggles that update the customer menu instantly.",
    src: "/projects/coffee/products.png",
  },
];

const moreScreens = [
  {
    title: "Tables & QR codes",
    caption: "A unique QR per table — print it, preview its menu or remove it in one click.",
    src: "/projects/coffee/tables-qr.png",
  },
  {
    title: "Work stations",
    caption: "Kitchen, pizza, cold drinks, register — every category routes orders to the right station.",
    src: "/projects/coffee/stations.png",
  },
  {
    title: "Menu categories",
    caption: "Structure the menu and bind each category to a station, with product counts at a glance.",
    src: "/projects/coffee/categories.png",
  },
  {
    title: "Category editor",
    caption: "Create or hide a category without deleting its products — the customer menu updates instantly.",
    src: "/projects/coffee/category-modal.png",
  },
  {
    title: "Team & roles",
    caption: "Add staff by phone number, assign their stations and switch roles in seconds.",
    src: "/projects/coffee/team.png",
  },
  {
    title: "Shop settings",
    caption: "Name, welcome message, address, opening hours and social links — all editable live.",
    src: "/projects/coffee/settings.png",
  },
];

const features = [
  { icon: QrCode, title: "QR Ordering", text: "One QR per table opens the right menu with the table pre-selected." },
  { icon: Radio, title: "Realtime Orders", text: "Supabase Realtime pushes every order and status change instantly." },
  { icon: ChefHat, title: "Kitchen Stations", text: "Each station sees only its own items, in preparation order." },
  { icon: CreditCard, title: "Cashier POS", text: "Fast counter sales with the same product catalog." },
  { icon: LayoutDashboard, title: "Admin Dashboard", text: "Revenue, best sellers and team management for the owner." },
  { icon: SlidersHorizontal, title: "Product Customization", text: "Sizes, options and notes with dynamic pricing." },
  { icon: Lock, title: "Authentication & Roles", text: "Manager, cashier and kitchen roles with scoped access." },
  { icon: MonitorSmartphone, title: "Responsive Design", text: "Phone-first for customers, desktop-first for staff." },
  { icon: BellRing, title: "Help Requests", text: "Customers can call a server from their phone with one tap." },
];

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

type StaffScreen = { title: string; caption: string; src: string };

/** Large alternating screenshot row with continuous 01…09 numbering. */
function StaffScreenRow({ screen, index }: { screen: StaffScreen; index: number }) {
  const flipped = index % 2 === 1;
  return (
    <motion.div
      {...fadeUp}
      className={`grid items-center gap-8 ${
        flipped
          ? "lg:grid-cols-[1.6fr_1fr] lg:[&>*:first-child]:order-2"
          : "lg:grid-cols-[1fr_1.6fr]"
      }`}
    >
      <div className={flipped ? "lg:text-right" : ""}>
        <p className="font-display text-sm font-extrabold text-primary">
          {String(index + 1).padStart(2, "0")} · Staff side
        </p>
        <h3 className="font-display mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
          {screen.title}
        </h3>
        <p className="mt-3 leading-relaxed text-muted-foreground">{screen.caption}</p>
      </div>
      <div className="group relative overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-[0_30px_60px_-30px_rgba(24,18,13,0.35)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_36px_70px_-30px_rgba(245,166,35,0.45)]">
        <div className="flex items-center gap-1.5 border-b border-border bg-muted/60 px-4 py-2.5">
          <span className="size-2.5 rounded-full bg-[#FF5F57]" aria-hidden />
          <span className="size-2.5 rounded-full bg-[#FEBC2E]" aria-hidden />
          <span className="size-2.5 rounded-full bg-[#28C840]" aria-hidden />
        </div>
        <div className="relative aspect-[2/1]">
          <Image
            src={screen.src}
            alt={screen.title}
            fill
            sizes="(max-width: 1024px) 92vw, 660px"
            className="object-cover object-top"
          />
        </div>
      </div>
    </motion.div>
  );
}

export function CoffeeShopCaseStudy() {
  return (
    <>
      {/* Minimal header — this page lives outside the one-page anchors */}
      <header className="fixed inset-x-0 top-0 z-50 px-4">
        <nav className="mx-auto mt-3 flex max-w-5xl items-center justify-between rounded-full border border-border/80 bg-background/85 py-2 pl-3 pr-2.5 shadow-[0_18px_45px_-20px_rgba(24,18,13,0.35)] backdrop-blur-xl">
          <Button asChild variant="ghost" size="sm">
            <Link href="/#projects">
              <ArrowLeft className="size-4" />
              Back to portfolio
            </Link>
          </Button>
          <span className="font-display hidden text-sm font-bold tracking-tight sm:block">
            {site.shortName}
            <span className="text-primary">.</span>
          </span>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <Link href="/#contact">Contact me</Link>
            </Button>
          </div>
        </nav>
      </header>

      <main className="overflow-x-clip">
        {/* Hero */}
        <section className="relative pt-32 sm:pt-36">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-16 h-[380px] w-[680px] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl dark:bg-primary/10"
          />
          <div className="relative mx-auto flex max-w-4xl flex-col items-center px-5 text-center sm:px-8">
            <motion.div {...fadeUp}>
              <Badge variant="solid" className="px-4 py-1.5">
                ★ Case Study
              </Badge>
            </motion.div>
            <motion.h1
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.08 }}
              className="font-display mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl"
            >
              Coffee and Fast Food Shop
              <span className="text-primary"> Ordering System</span>
            </motion.h1>
            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.16 }}
              className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              A full-stack platform where customers order from their table through a QR code,
              while the counter, kitchen stations and manager dashboard receive everything in
              realtime — from first scan to “order ready”.
            </motion.p>
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.24 }}
              className="mt-7 flex flex-wrap items-center justify-center gap-2"
            >
              {stack.map((tech) => (
                <Badge key={tech} className="px-3.5 py-1.5 text-[13px]">
                  {tech}
                </Badge>
              ))}
            </motion.div>
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.32 }}
              className="mt-8"
            >
              <Button asChild size="lg">
                <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                  <QrCode className="size-4" />
                  Try the live menu
                </a>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Customer journey */}
        <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24">
          <motion.div {...fadeUp} className="mb-12 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground shadow-sm">
              <span className="size-1.5 rounded-full bg-primary" aria-hidden />
              Customer Experience
            </span>
            <h2 className="font-display mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              From QR scan to “order ready”
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              The entire journey happens on the customer&apos;s phone — no app, no account, no
              queue.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {journey.map((shot, i) => (
              <motion.div
                key={shot.step}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: (i % 3) * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className={i === 4 ? "sm:col-span-2 lg:col-span-1" : undefined}
              >
                <Card className="group h-full overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[0_24px_50px_-24px_rgba(245,166,35,0.45)]">
                  <div className="relative mx-auto mt-6 w-[78%] overflow-hidden rounded-[1.6rem] border-[6px] border-secondary shadow-xl dark:border-black">
                    <div className="relative aspect-[9/16]">
                      <Image
                        src={shot.src}
                        alt={shot.title}
                        fill
                        unoptimized
                        sizes="(max-width: 640px) 78vw, (max-width: 1024px) 38vw, 280px"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                  </div>
                  <CardContent className="p-6 text-center">
                    <p className="font-display text-sm font-extrabold text-primary">{shot.step}</p>
                    <h3 className="font-display mt-1 text-lg font-bold tracking-tight">
                      {shot.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {shot.caption}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Admin side */}
        <section className="mx-auto max-w-6xl px-5 py-4 sm:px-8 md:py-8">
          <motion.div {...fadeUp} className="mb-12 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground shadow-sm">
              <span className="size-1.5 rounded-full bg-primary" aria-hidden />
              Behind The Counter
            </span>
            <h2 className="font-display mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              One dashboard runs the whole shop
            </h2>
          </motion.div>

          <div className="flex flex-col gap-16">
            {adminScreens.map((screen, i) => (
              <StaffScreenRow key={screen.title} screen={screen} index={i} />
            ))}
          </div>
        </section>

        {/* Dashboard gallery */}
        <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24">
          <motion.div {...fadeUp} className="mb-12 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground shadow-sm">
              <span className="size-1.5 rounded-full bg-primary" aria-hidden />
              Every Detail Handled
            </span>
            <h2 className="font-display mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Tables, stations, team & settings
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              The manager configures the whole shop — from printed QR codes to who works at
              which station.
            </p>
          </motion.div>
          <div className="flex flex-col gap-16">
            {moreScreens.map((screen, i) => (
              <StaffScreenRow key={screen.title} screen={screen} index={i + adminScreens.length} />
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24">
          <motion.div {...fadeUp} className="mb-12 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground shadow-sm">
              <span className="size-1.5 rounded-full bg-primary" aria-hidden />
              Features
            </span>
            <h2 className="font-display mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Everything a modern shop needs
            </h2>
          </motion.div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: (i % 3) * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <Card className="group h-full transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                  <CardContent className="p-6">
                    <span className="mb-4 flex size-11 items-center justify-center rounded-2xl bg-primary/15 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                      <feature.icon className="size-5" />
                    </span>
                    <h3 className="font-display text-base font-bold tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {feature.text}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-6xl px-5 pb-24 sm:px-8">
          <motion.div {...fadeUp}>
            <Card className="bg-secondary text-secondary-foreground dark:bg-card dark:text-card-foreground">
              <CardContent className="flex flex-col items-center gap-5 p-10 text-center sm:p-14">
                <h2 className="font-display max-w-xl text-3xl font-extrabold tracking-tight sm:text-4xl">
                  Want something like this for your business?
                </h2>
                <p className="max-w-xl text-secondary-foreground/70 dark:text-muted-foreground">
                  I design and build full-stack ordering platforms end to end — from the QR on
                  the table to the dashboard behind the counter.
                </p>
                <div className="mt-2 flex flex-wrap justify-center gap-3">
                  <Button asChild size="lg">
                    <Link href="/#contact">
                      Get in touch
                      <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-secondary-foreground/25 bg-transparent text-secondary-foreground hover:bg-secondary-foreground/10 dark:border-border dark:text-foreground dark:hover:bg-accent">
                    <Link href="/#projects">More projects</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
