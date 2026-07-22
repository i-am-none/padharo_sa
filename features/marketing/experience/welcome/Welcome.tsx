"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

import { Container } from "@/lib/components/Container";

export function Welcome() {
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
      const eyebrow = sectionElement.querySelector("[data-welcome-eyebrow]");
      const headline = sectionElement.querySelector("[data-welcome-headline]");
      const copy = sectionElement.querySelector("[data-welcome-copy]");
      const quote = sectionElement.querySelector("[data-welcome-quote]");

      if (prefersReducedMotion) {
        gsap.set([eyebrow, headline, copy, quote, mediaElement, contentElement], {
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
        .set(mediaElement, { opacity: 0, x: -20 })
        .set([eyebrow, headline, copy, quote], { opacity: 0, y: 20 })
        .to(mediaElement, { opacity: 1, x: 0, duration: 0.8 }, 0)
        .to(eyebrow, { opacity: 1, y: 0, duration: 0.5 }, 0.25)
        .to(headline, { opacity: 1, y: 0, duration: 0.7 }, 0.4)
        .to(copy, { opacity: 1, y: 0, duration: 0.6 }, 0.6)
        .to(quote, { opacity: 1, duration: 0.7 }, 0.8);

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
      className="welcome-section"
      aria-label="Welcome Experience"
    >
      <Container>
        <div className="welcome-layout">
          <div className="welcome-content" ref={contentRef}>
            <p className="welcome-eyebrow" data-welcome-eyebrow>
              The Welcome
            </p>
            <h2 className="welcome-headline" data-welcome-headline>
              Atithi Devo Bhava
            </h2>
            <p className="welcome-subhead" data-welcome-quote>
              "The Guest Is God"
            </p>
            <p className="welcome-copy" data-welcome-copy>
              In Rajasthan, hospitality is not merely service—it is a sacred duty. When you step through our doors, you become family. Our staff welcomes you with genuine warmth, not because it is their job, but because it is their tradition. Every smile, every gesture, every word carries the weight of generations who believed that treating guests well is the highest form of worship.
            </p>
          </div>

          <div className="welcome-media" ref={mediaRef}>
            <div className="welcome-image-wrapper">
              <img
                src="/images/welcome-staff.jpg"
                alt="Staff welcoming guests with warm smiles and traditional hospitality"
                className="welcome-image"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
