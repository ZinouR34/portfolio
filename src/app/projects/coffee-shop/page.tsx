import type { Metadata } from "next";
import { CoffeeShopCaseStudy } from "@/components/case-study/coffee-shop";

export const metadata: Metadata = {
  title: "AI Coffee Shop Ordering System — Case Study",
  description:
    "Full presentation of an AI-powered QR ordering platform for coffee shops and restaurants: customers order from their table while managers, cashiers and kitchen stations receive orders in real time. Built with Next.js, Supabase and PostgreSQL.",
  openGraph: {
    title: "AI Coffee Shop Ordering System — Case Study",
    description:
      "QR ordering, realtime kitchen stations, POS and admin dashboard — a full-stack platform built with Next.js and Supabase.",
  },
};

export default function CoffeeShopCaseStudyPage() {
  return <CoffeeShopCaseStudy />;
}
