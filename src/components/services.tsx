"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/section";
import { services } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section
      id="services"
      eyebrow="Services"
      title="What I can do for you"
      description="From the browser to the backbone — five areas where I deliver."
    >
      <div className="divide-y divide-border border-y border-border">
        {services.map((service, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={service.number} className="group">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={`service-panel-${service.number}`}
                className="flex w-full items-start gap-5 py-7 text-left outline-none focus-visible:ring-2 focus-visible:ring-ring sm:gap-8 sm:py-9"
              >
                <span
                  className={cn(
                    "font-display pt-1 text-lg font-extrabold tracking-tight transition-colors duration-300 sm:text-2xl",
                    isOpen ? "text-primary" : "text-muted-foreground/40 group-hover:text-primary/70"
                  )}
                >
                  {service.number}
                </span>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-4">
                    <h3
                      className={cn(
                        "font-display text-xl font-extrabold tracking-tight transition-all duration-300 sm:text-3xl lg:text-4xl",
                        !isOpen && "group-hover:translate-x-1.5 group-hover:text-primary"
                      )}
                    >
                      {service.title}
                    </h3>
                    <span
                      className={cn(
                        "flex size-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 sm:size-12",
                        isOpen
                          ? "rotate-45 border-primary bg-primary text-primary-foreground"
                          : "border-border text-muted-foreground group-hover:border-primary group-hover:text-primary"
                      )}
                    >
                      <Plus className="size-5" />
                    </span>
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`service-panel-${service.number}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
                          {service.description}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2 pb-1">
                          {service.tags.map((tag) => (
                            <Badge key={tag} className="px-3 py-1.5 text-[13px]">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </button>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
