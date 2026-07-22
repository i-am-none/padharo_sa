"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

import { Container } from "@/lib/components/Container";
import Image from "next/image";

export function Hospitality() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const mediaRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const quoteRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sectionElement = sectionRef.current;
    if (!sectionElement) return;

    const context = gsap.context(() => {
      const mediaElement = mediaRef.current;
      const contentElement = contentRef.current;
      const quoteElement = quoteRef.current;
      const eyebrow = sectionElement.querySelector("[data-hospitality-eyebrow]");
      const headline = sectionElement.querySelector("[data-hospitality-headline]");
      const copy = sectionElement.querySelector("[data-hospitality-copy]");

      if (prefersReducedMotion) {
        gsap.set([eyebrow, headline, copy, mediaElement, contentElement, quoteElement], {
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
        .set([eyebrow, headline, copy, quoteElement], { opacity: 0, y: 20 })
        .to(mediaElement, { opacity: 1, scale: 1, duration: 0.9 }, 0)
        .to(eyebrow, { opacity: 1, y: 0, duration: 0.5 }, 0.3)
        .to(headline, { opacity: 1, y: 0, duration: 0.7 }, 0.45)
        .to(copy, { opacity: 1, y: 0, duration: 0.6 }, 0.65)
        .to(quoteElement, { opacity: 1, y: 0, duration: 0.6 }, 0.85);

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
      className="royal-hospitality-section"
      aria-label="Royal Hospitality Experience"
    >
      <Container>
        <div className="royal-hospitality-layout">
          <div className="royal-hospitality-media" ref={mediaRef}>
            <div className="royal-hospitality-image-wrapper">
              <Image
                src="/images/hospitality-service.jpg"
                alt="Staff providing attentive service with care"
                width={800}
                height={600}
                className="royal-hospitality-image"
                loading="lazy"
              />
            </div>
          </div>

          <div className="royal-hospitality-content" ref={contentRef}>
            <p className="royal-hospitality-eyebrow" data-hospitality-eyebrow>
              ROYAL HOSPITALITY
            </p>
            <h2 className="royal-hospitality-headline" data-hospitality-headline>
              Step Into Timeless Rajasthan
            </h2>
            <p className="royal-hospitality-copy" data-hospitality-copy>
              True hospitality lives in the moments you might not notice. Water refilled before you realize it's empty. A server who remembers your favorite dish from a previous visit. A gentle conversation with a child who feels welcome at the table. These small gestures accumulate into an experience of being truly cared for. We don't just serve food—we serve people, honoring traditions passed down through generations.
            </p>

            <div className="royal-hospitality-quote" ref={quoteRef}>
              <div className="quote-accent"></div>
              <blockquote className="quote-text">
                "Hospitality is not just about serving food—it's about serving people with grace, dignity, and the warmth of family."
              </blockquote>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
