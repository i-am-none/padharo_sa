"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

import { Container } from "@/lib/components/Container";

export function Farewell() {
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
      const eyebrow = sectionElement.querySelector("[data-farewell-eyebrow]");
      const headline = sectionElement.querySelector("[data-farewell-headline]");
      const copy = sectionElement.querySelector("[data-farewell-copy]");

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
        .set(mediaElement, { opacity: 0, scale: 0.97 })
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
      className="farewell-section"
      aria-label="Farewell Experience"
    >
      <Container>
        <div className="farewell-layout">
          <div className="farewell-content" ref={contentRef}>
            <p className="farewell-eyebrow" data-farewell-eyebrow>
              The Farewell
            </p>
            <h2 className="farewell-headline" data-farewell-headline>
              Some Journeys End. The Memories Stay.
            </h2>
            <p className="farewell-copy" data-farewell-copy>
              As your evening concludes, we bid you farewell with the same warmth with which we welcomed you. The restaurant slowly empties, but the atmosphere of connection lingers. You leave not just with a satisfied appetite, but with a feeling—a memory of hospitality that will draw you back. The doors may close behind you, but the experience remains.
            </p>
          </div>

          <div className="farewell-media" ref={mediaRef}>
            <div className="farewell-image-wrapper">
              <img
                src="/images/farewell-leaving.jpg"
                alt="Guests leaving with warm lighting in the background"
                className="farewell-image"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
