"use client";

import { gsap } from "gsap";
import { useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

import type { FAQContentModel } from "./faq.types";
import { Container } from "@/lib/components/Container";

type FAQProps = {
  content: FAQContentModel;
};

export function FAQ({ content }: FAQProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const [openItem, setOpenItem] = useState<string | null>(null);

  useEffect(() => {
    const sectionElement = sectionRef.current;
    if (!sectionElement) return;

    const context = gsap.context(() => {
      const headline = sectionElement.querySelector("[data-faq-headline]");
      const items = sectionElement.querySelectorAll("[data-faq-item]");

      if (prefersReducedMotion) {
        gsap.set([headline, items], { clearProps: "all", opacity: 1, y: 0 });
        return;
      }

      const timeline = gsap.timeline({
        defaults: {
          ease: "power2.out",
        },
      });

      timeline
        .set(headline, { opacity: 0, y: 20 })
        .set(items, { opacity: 0, y: 24 })
        .to(headline, { opacity: 1, y: 0, duration: 0.55 }, 0)
        .to(
          items,
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.08,
          },
          0.2,
        );
    }, sectionElement);

    return () => {
      context.revert();
    };
  }, [content, prefersReducedMotion]);

  const toggleItem = (itemId: string) => {
    setOpenItem((prev) => (prev === itemId ? null : itemId));
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 lg:py-36 bg-[var(--bg-secondary)]"
      id={content.id}
    >
      <Container variant="content">
        <h2
          data-faq-headline
          className="text-3xl md:text-4xl font-display font-semibold text-[var(--text-primary)] mb-12"
        >
          {content.headline}
        </h2>

        <div className="space-y-4">
          {content.items.map((item) => {
            const isOpen = openItem === item.id;
            return (
              <div
                key={item.id}
                data-faq-item
                className="bg-[var(--bg-surface)] border border-[var(--border-soft)] rounded-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  suppressHydrationWarning
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus-ring"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  <span className="text-lg font-medium text-[var(--text-primary)] pr-4">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[var(--accent-primary)] transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  id={`faq-answer-${item.id}`}
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-5 pt-0">
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
