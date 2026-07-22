"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

import { Container } from "@/lib/components/Container";

export function ReservationCTA() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sectionElement = sectionRef.current;
    if (!sectionElement) return;

    const context = gsap.context(() => {
      const contentElement = contentRef.current;
      const headline = sectionElement.querySelector("[data-cta-headline]");
      const buttons = sectionElement.querySelectorAll("[data-cta-button]");

      if (prefersReducedMotion) {
        gsap.set([headline, contentElement, ...buttons], {
          clearProps: "all",
          opacity: 1,
          y: 0,
        });
        return;
      }

      const timeline = gsap.timeline({
        defaults: {
          ease: "power2.out",
        },
      });

      timeline
        .set(headline, { opacity: 0, y: 20 })
        .set(buttons, { opacity: 0, y: 16 })
        .to(headline, { opacity: 1, y: 0, duration: 0.7 }, 0)
        .to(buttons, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
        }, 0.3);

      ScrollTrigger.create({
        trigger: sectionElement,
        start: "top 80%",
        animation: timeline,
      });
    }, sectionElement);

    return () => {
      context.revert();
    };
  }, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      className="reservation-cta-section"
      aria-label="Reservation Call to Action"
    >
      <Container>
        <div className="reservation-cta-content" ref={contentRef}>
          <h2 className="reservation-cta-headline" data-cta-headline>
            We Would Be Honoured To Welcome You
          </h2>
          <div className="reservation-cta-buttons">
            <a
              href="/reserve"
              className="reservation-cta-button primary focus-ring"
              data-cta-button
              aria-label="Reserve a table at Jain's Little India"
            >
              Reserve Table
            </a>
            <a
              href="/menu"
              className="reservation-cta-button secondary focus-ring"
              data-cta-button
              aria-label="View our menu"
            >
              View Menu
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
