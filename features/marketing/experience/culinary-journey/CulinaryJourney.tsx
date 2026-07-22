"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

import { Container } from "@/lib/components/Container";

export function CulinaryJourney() {
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
      const eyebrow = sectionElement.querySelector("[data-culinary-eyebrow]");
      const headline = sectionElement.querySelector("[data-culinary-headline]");
      const copy = sectionElement.querySelector("[data-culinary-copy]");
      const highlights = sectionElement.querySelectorAll("[data-culinary-highlight]");

      if (prefersReducedMotion) {
        gsap.set([eyebrow, headline, copy, mediaElement, contentElement, ...highlights], {
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
        .set(highlights, { opacity: 0, y: 15 })
        .to(mediaElement, { opacity: 1, scale: 1, duration: 0.9 }, 0)
        .to(eyebrow, { opacity: 1, y: 0, duration: 0.5 }, 0.3)
        .to(headline, { opacity: 1, y: 0, duration: 0.7 }, 0.45)
        .to(copy, { opacity: 1, y: 0, duration: 0.6 }, 0.65)
        .to(highlights, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
        }, 0.85);

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
      className="culinary-journey-section"
      aria-label="Culinary Journey Experience"
    >
      <Container>
        <div className="culinary-journey-layout">
          <div className="culinary-journey-media" ref={mediaRef}>
            <div className="culinary-journey-image-wrapper">
              <img
                src="/images/culinary-cooking.jpg"
                alt="Chef preparing traditional dishes with authentic techniques"
                className="culinary-journey-image"
                loading="lazy"
              />
            </div>
          </div>

          <div className="culinary-journey-content" ref={contentRef}>
            <p className="culinary-journey-eyebrow" data-culinary-eyebrow>
              The Culinary Journey
            </p>
            <h2 className="culinary-journey-headline" data-culinary-headline>
              Recipes Passed Through Generations
            </h2>
            <p className="culinary-journey-copy" data-culinary-copy>
              Every dish tells a story. Our recipes come from royal kitchens, preserved and perfected over generations. We source authentic spices directly from Rajasthan, ensuring each flavor carries the essence of its origin. The slow cooking techniques, the traditional utensils, the careful balance of aromatics—every detail honors the culinary heritage of our land. This is not merely food. It is history on a plate.
            </p>

            <div className="culinary-journey-highlights">
              <div className="culinary-journey-highlight" data-culinary-highlight>
                <span className="highlight-label">Authentic Spices</span>
                <p className="highlight-text">Sourced directly from Rajasthan</p>
              </div>
              <div className="culinary-journey-highlight" data-culinary-highlight>
                <span className="highlight-label">Royal Recipes</span>
                <p className="highlight-text">Generations of culinary tradition</p>
              </div>
              <div className="culinary-journey-highlight" data-culinary-highlight>
                <span className="highlight-label">Traditional Techniques</span>
                <p className="highlight-text">Slow-cooked to perfection</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
