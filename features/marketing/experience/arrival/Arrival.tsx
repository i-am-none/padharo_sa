"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

import { Container } from "@/lib/components/Container";

export function Arrival() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const mediaRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sectionElement = sectionRef.current;
    if (!sectionElement) return;

    const context = gsap.context(() => {
      const mediaElement = mediaRef.current;
      const contentElement = contentRef.current;
      const eyebrow = sectionElement.querySelector("[data-arrival-eyebrow]");
      const headline = sectionElement.querySelector("[data-arrival-headline]");
      const copy = sectionElement.querySelector("[data-arrival-copy]");

      if (prefersReducedMotion) {
        gsap.set([eyebrow, headline, copy, mediaElement, contentElement], {
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
        .set(mediaElement, { opacity: 0, scale: 0.98 })
        .set([eyebrow, headline, copy], { opacity: 0, y: 20 })
        .to(mediaElement, { opacity: 1, scale: 1, duration: 0.9 }, 0)
        .to(eyebrow, { opacity: 1, y: 0, duration: 0.5 }, 0.3)
        .to(headline, { opacity: 1, y: 0, duration: 0.7 }, 0.45)
        .to(copy, { opacity: 1, y: 0, duration: 0.6 }, 0.65);

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
      className="arrival-section"
      id="arrival"
      aria-label="Arrival Experience"
    >
      <Container>
        <div className="arrival-layout">
          <div className="arrival-media" ref={mediaRef}>
            <div className="arrival-image-wrapper">
              <img
                src="/images/arrival-entrance.jpg"
                alt="Restaurant entrance with warm lighting and traditional decor"
                className="arrival-image"
                loading="lazy"
              />
            </div>
          </div>

          <div className="arrival-content" ref={contentRef}>
            <p className="arrival-eyebrow" data-arrival-eyebrow>
              Arrival
            </p>
            <h2 className="arrival-headline" data-arrival-headline>
              The Doors Open to Welcome You
            </h2>
            <p className="arrival-copy" data-arrival-copy>
              As you approach, warm light spills from the entrance. The aroma of authentic spices fills the air. Our staff greets you with a traditional welcome, the first moment of what becomes an unforgettable evening. This is where your journey begins—not with a meal, but with a feeling of belonging.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
