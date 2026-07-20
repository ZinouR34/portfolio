"use client";

import { useActionState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Loader2, Send, TriangleAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Section } from "@/components/section";
import { contactCards } from "@/lib/data";
import { sendContactMessage, type ContactState } from "@/app/actions";

const INITIAL: ContactState = { status: "idle", message: "" };

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, isPending] = useActionState(sendContactMessage, INITIAL);

  // Clear the fields once the message is actually delivered.
  useEffect(() => {
    if (state.status === "success") formRef.current?.reset();
  }, [state]);

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something together"
      description="Have a project, an internship or an idea in mind? My inbox is always open."
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Contact cards */}
        <ul className="flex flex-col gap-3.5">
          {contactCards.map((card, i) => {
            const inner = (
              <>
                <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary/15 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                  <card.icon className="size-5" />
                </span>
                <span className="min-w-0 flex-1 text-left">
                  <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {card.label}
                  </span>
                  <span className="block truncate font-semibold">{card.value}</span>
                </span>
                {card.href && (
                  <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                )}
              </>
            );
            return (
              <motion.li
                key={card.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                {card.href ? (
                  <a
                    href={card.href}
                    target={card.href.startsWith("http") ? "_blank" : undefined}
                    rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-4 rounded-[1.5rem] border border-border bg-card p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_40px_-22px_rgba(245,166,35,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {inner}
                  </a>
                ) : (
                  <div className="group flex items-center gap-4 rounded-[1.5rem] border border-border bg-card p-4 shadow-sm">
                    {inner}
                  </div>
                )}
              </motion.li>
            );
          })}
        </ul>

        {/* Contact form */}
        <Card>
          <CardContent className="p-6 sm:p-8">
            <form ref={formRef} action={formAction} className="flex flex-col gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-name" className="text-sm font-semibold">
                    Name
                  </label>
                  <Input
                    id="contact-name"
                    name="name"
                    required
                    maxLength={100}
                    placeholder="Your full name"
                    autoComplete="name"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-email" className="text-sm font-semibold">
                    Email
                  </label>
                  <Input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    maxLength={200}
                    placeholder="you@example.com"
                    autoComplete="email"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-subject" className="text-sm font-semibold">
                  Subject
                </label>
                <Input
                  id="contact-subject"
                  name="subject"
                  required
                  maxLength={150}
                  placeholder="What is this about?"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-message" className="text-sm font-semibold">
                  Message
                </label>
                <Textarea
                  id="contact-message"
                  name="message"
                  required
                  maxLength={5000}
                  placeholder="Tell me about your project or idea…"
                />
              </div>

              {/* Honeypot — hidden from people, irresistible to bots. */}
              <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="sr-only"
              />

              <Button
                type="submit"
                size="lg"
                disabled={isPending}
                className="mt-1 w-full sm:w-auto sm:self-start"
              >
                {isPending ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send className="size-4" />
                    Send Message
                  </>
                )}
              </Button>

              <p aria-live="polite" className="text-xs">
                {state.status === "success" ? (
                  <span className="flex items-center gap-1.5 font-medium text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="size-3.5 shrink-0" />
                    {state.message}
                  </span>
                ) : state.status === "error" ? (
                  <span className="flex items-center gap-1.5 font-medium text-destructive">
                    <TriangleAlert className="size-3.5 shrink-0" />
                    {state.message}
                  </span>
                ) : (
                  <span className="text-muted-foreground">
                    I usually reply within a day or two.
                  </span>
                )}
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
