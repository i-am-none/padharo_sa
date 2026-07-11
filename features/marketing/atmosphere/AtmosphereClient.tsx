"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

import { Container } from "@/components/shared/layout/Container";

import type { AtmosphereContentModel } from "./atmosphere.types";
import { AtmosphereContent } from "./AtmosphereContent";
import { AtmosphereMedia } from "./AtmosphereMedia";

type AtmosphereClientProps = {
  content: AtmosphereContentModel;
};

export function AtmosphereClient({ content }: AtmosphereClientProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const mediaRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sectionElement = sectionRef.current;
    if (!sectionElement) {
      return;
    }

    const context = gsap.context(() => {
      const mediaElement = mediaRef.current;
      const eyebrow = sectionElement.querySelector("[data-atmosphere-eyebrow]");
      const copy = sectionElement.querySelector("[data-atmosphere-copy]");
      const quote = sectionElement.querySelector("[data-atmosphere-quote]");
      const words = sectionElement.querySelectorAll("[data-atmosphere-word]");

      if (prefersReducedMotion) {
        gsap.set([eyebrow, words, copy, quote], {
          clearProps: "all",
          opacity: 1,
          y: 0,
        });
        gsap.set(mediaElement, { opacity: 1 });
        return;
      }

      const timeline = gsap.timeline({
        defaults: {
          ease: "power2.out",
        },
      });

      timeline
        .set([eyebrow, copy, quote], { opacity: 0, y: 16 })
        .set(words, { opacity: 0, y: 24 })
        .set(mediaElement, { opacity: 0 })
        .to(mediaElement, { opacity: 1, duration: 0.8 }, 0)
        .to(eyebrow, { opacity: 1, y: 0, duration: 0.5 }, 0.3)
        .to(
          words,
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "expo.out",
            stagger: 0.08,
          },
          0.45,
        )
        .to(copy, { opacity: 1, y: 0, duration: 0.65 }, 1.1)
        .to(quote, { opacity: 1, duration: 0.6 }, 1.25);

      const scrollTimeline = gsap.timeline();
      scrollTimeline.to(mediaElement, {
        yPercent: 10,
        ease: "none",
      });

      ScrollTrigger.create({
        trigger: sectionElement,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        animation: scrollTimeline,
      });
    }, sectionElement);

    return () => {
      context.revert();
    };
  }, [prefersReducedMotion]);

  return (
    <section
      aria-label="Atmosphere"
      className="atmosphere-shell"
      id={content.id}
      ref={sectionRef}
    >
      <div className="atmosphere-content">
        <Container>
          <div className="atmosphere-content-grid">
            <div className="atmosphere-media-column" ref={mediaRef}>
              <AtmosphereMedia media={content.media} />
            </div>
            <AtmosphereContent content={content} />
          </div>
        </Container>
      </div>
    </section>
  );
}
