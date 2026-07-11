"use client";

import { gsap } from "gsap";
import { useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

import { Container } from "@/components/shared/layout/Container";

import type { PhilosophyContentModel } from "./philosophy.types";
import { PhilosophyContent } from "./PhilosophyContent";
import { PhilosophyMedia } from "./PhilosophyMedia";

type PhilosophyClientProps = {
  content: PhilosophyContentModel;
};

export function PhilosophyClient({ content }: PhilosophyClientProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const mediaRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const sectionElement = sectionRef.current;
    if (!sectionElement) {
      return;
    }

    const context = gsap.context(() => {
      const mediaElement = mediaRef.current;
      const eyebrow = sectionElement.querySelector("[data-philosophy-eyebrow]");
      const headline = sectionElement.querySelector(".philosophy-headline");
      const body = sectionElement.querySelector("[data-philosophy-body]");
      const quote = sectionElement.querySelector("[data-philosophy-quote]");
      const principles = sectionElement.querySelector("[data-philosophy-principles]");
      const principleItems = sectionElement.querySelectorAll("[data-philosophy-principle]");

      if (prefersReducedMotion) {
        gsap.set([eyebrow, headline, body, quote, principles, principleItems], {
          clearProps: "all",
          opacity: 1,
          y: 0,
        });
        gsap.set(mediaElement, { opacity: 1, y: 0 });
        return;
      }

      const timeline = gsap.timeline({
        defaults: {
          ease: "power2.out",
        },
      });

      timeline
        .set(mediaElement, { opacity: 0, y: 30 })
        .set([eyebrow, headline, body, quote, principles], { opacity: 0, y: 20 })
        .set(principleItems, { opacity: 0, y: 20 })
        .to(mediaElement, { opacity: 1, y: 0, duration: 0.8 }, 0)
        .to(eyebrow, { opacity: 1, y: 0, duration: 0.5 }, 0.2)
        .to(headline, { opacity: 1, y: 0, duration: 0.6 }, 0.3)
        .to(body, { opacity: 1, y: 0, duration: 0.6 }, 0.5)
        .to(
          principleItems,
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.08,
          },
          0.6,
        )
        .to(quote, { opacity: 1, duration: 0.5 }, 0.7);
    }, sectionElement);

    return () => {
      context.revert();
    };
  }, [prefersReducedMotion]);

  return (
    <section
      aria-label="Our Philosophy"
      className="philosophy-section"
      id={content.id}
      ref={sectionRef}
    >
      <Container>
        <div className="philosophy-container">
          <div className="philosophy-media" ref={mediaRef}>
            <PhilosophyMedia media={content.media} />
          </div>
          <div className="philosophy-content">
            <PhilosophyContent content={content} />
          </div>
        </div>
      </Container>
    </section>
  );
}
