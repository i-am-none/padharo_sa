"use client";

import { gsap } from "gsap";
import { useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

import type { ContactOverviewContentModel } from "./contact-overview.types";
import { Container } from "@/lib/components/Container";

type ContactOverviewProps = {
  content: ContactOverviewContentModel;
};

const iconMap = {
  Phone,
  Mail,
  MapPin,
  Clock,
};

export function ContactOverview({ content }: ContactOverviewProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const sectionElement = sectionRef.current;
    if (!sectionElement) return;

    const context = gsap.context(() => {
      const cardsElement = cardsRef.current;
      const headline = sectionElement.querySelector("[data-overview-headline]");
      const cards = sectionElement.querySelectorAll("[data-overview-card]");

      if (prefersReducedMotion) {
        gsap.set([headline, cards], { clearProps: "all", opacity: 1, y: 0 });
        return;
      }

      const timeline = gsap.timeline({
        defaults: {
          ease: "power2.out",
        },
      });

      timeline
        .set(headline, { opacity: 0, y: 20 })
        .set(cards, { opacity: 0, y: 32 })
        .to(headline, { opacity: 1, y: 0, duration: 0.55 }, 0)
        .to(
          cards,
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.12,
          },
          0.2,
        );
    }, sectionElement);

    return () => {
      context.revert();
    };
  }, [content, prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 lg:py-36 bg-[var(--bg-secondary)]"
      id={content.id}
    >
      <Container variant="wide">
        <h2
          data-overview-headline
          className="text-3xl md:text-4xl font-display font-semibold text-[var(--text-primary)] mb-12 md:mb-16 text-center"
        >
          {content.headline}
        </h2>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {content.cards.map((card) => {
            const Icon = iconMap[card.icon as keyof typeof iconMap];
            return (
              <div
                key={card.id}
                data-overview-card
                className="group bg-[var(--bg-surface)] border border-[var(--border-soft)] rounded-lg p-6 hover:border-[var(--accent-primary)] transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-[var(--bg-elevated)] flex items-center justify-center mb-4 group-hover:bg-[var(--accent-primary)] transition-colors duration-300">
                  <Icon className="w-6 h-6 text-[var(--accent-primary)] group-hover:text-[var(--bg-base)] transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-medium text-[var(--text-primary)] mb-2">
                  {card.title}
                </h3>
                <p className="text-[var(--text-secondary)] mb-4 text-sm leading-relaxed">
                  {card.value}
                </p>
                <a
                  href={card.cta.href}
                  className="inline-flex items-center text-sm font-medium text-[var(--accent-primary)] hover:text-[var(--accent-hover)] transition-colors duration-300 focus-ring"
                >
                  {card.cta.label}
                </a>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
