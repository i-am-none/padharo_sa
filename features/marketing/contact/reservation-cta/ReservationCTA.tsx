"use client";

import { gsap } from "gsap";
import { useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

import type { ReservationCTAContentModel } from "./reservation-cta.types";
import { Container } from "@/lib/components/Container";

type ReservationCTAProps = {
  content: ReservationCTAContentModel;
};

export function ReservationCTA({ content }: ReservationCTAProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const sectionElement = sectionRef.current;
    if (!sectionElement) return;

    const context = gsap.context(() => {
      const headline = sectionElement.querySelector("[data-cta-headline]");
      const buttons = sectionElement.querySelectorAll("[data-cta-button]");

      if (prefersReducedMotion) {
        gsap.set([headline, buttons], { clearProps: "all", opacity: 1, y: 0 });
        return;
      }

      const timeline = gsap.timeline({
        defaults: {
          ease: "power2.out",
        },
      });

      timeline
        .set(headline, { opacity: 0, y: 20 })
        .set(buttons, { opacity: 0, y: 24 })
        .to(headline, { opacity: 1, y: 0, duration: 0.55 }, 0)
        .to(
          buttons,
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.1,
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
      className="py-20 md:py-28 lg:py-36 bg-[var(--bg-base)]"
      id={content.id}
    >
      <Container variant="content">
        <div className="text-center">
          <h2
            data-cta-headline
            className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-[var(--text-primary)] mb-8"
          >
            {content.headline}
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              data-cta-button
              href={content.primaryCta.href}
              className="inline-flex items-center justify-center px-8 py-4 bg-[var(--accent-primary)] text-[var(--bg-base)] font-medium rounded-sm hover:bg-[var(--accent-hover)] transition-colors duration-300 focus-ring"
            >
              {content.primaryCta.label}
            </a>
            <a
              data-cta-button
              href={content.secondaryCta.href}
              className="inline-flex items-center justify-center px-8 py-4 bg-[var(--bg-surface)] border border-[var(--border-soft)] text-[var(--text-primary)] font-medium rounded-sm hover:border-[var(--accent-primary)] transition-colors duration-300 focus-ring"
            >
              {content.secondaryCta.label}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
