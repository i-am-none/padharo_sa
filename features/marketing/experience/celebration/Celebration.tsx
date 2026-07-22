"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

import { Container } from "@/lib/components/Container";

export function Celebration() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sectionElement = sectionRef.current;
    if (!sectionElement) return;

    const context = gsap.context(() => {
      const galleryElement = galleryRef.current;
      const contentElement = contentRef.current;
      const eyebrow = sectionElement.querySelector("[data-celebration-eyebrow]");
      const headline = sectionElement.querySelector("[data-celebration-headline]");
      const copy = sectionElement.querySelector("[data-celebration-copy]");
      const occasions = sectionElement.querySelectorAll("[data-celebration-occasion]");

      if (prefersReducedMotion) {
        gsap.set([eyebrow, headline, copy, galleryElement, contentElement, ...occasions], {
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
        .set([eyebrow, headline, copy], { opacity: 0, y: 20 })
        .set(occasions, { opacity: 0, y: 25 })
        .to(eyebrow, { opacity: 1, y: 0, duration: 0.5 }, 0)
        .to(headline, { opacity: 1, y: 0, duration: 0.7 }, 0.2)
        .to(copy, { opacity: 1, y: 0, duration: 0.6 }, 0.4)
        .to(occasions, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.12,
        }, 0.6);

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
      className="celebration-section"
      aria-label="Celebration Experience"
    >
      <Container>
        <div className="celebration-content" ref={contentRef}>
          <p className="celebration-eyebrow" data-celebration-eyebrow>
            Moments Worth Celebrating
          </p>
          <h2 className="celebration-headline" data-celebration-headline>
            Where Memories Are Made
          </h2>
          <p className="celebration-copy" data-celebration-copy>
            Our restaurant becomes the backdrop for life's most meaningful moments. Birthdays spent laughing with family, anniversaries celebrated over candlelight, business dinners that turn into friendships, festivals shared with community. Every occasion here transforms into a memory. We provide the setting, the food, and the warmth—you bring the people who matter most.
          </p>
        </div>

        <div className="celebration-gallery" ref={galleryRef}>
          <div className="celebration-occasion" data-celebration-occasion>
            <img
              src="/images/celebration-birthday.jpg"
              alt="Family celebrating a birthday together"
              className="celebration-img"
              loading="lazy"
            />
            <span className="celebration-label">Birthdays</span>
          </div>
          <div className="celebration-occasion" data-celebration-occasion>
            <img
              src="/images/celebration-anniversary.jpg"
              alt="Couple celebrating their anniversary"
              className="celebration-img"
              loading="lazy"
            />
            <span className="celebration-label">Anniversaries</span>
          </div>
          <div className="celebration-occasion" data-celebration-occasion>
            <img
              src="/images/celebration-family.jpg"
              alt="Family gathering and enjoying a meal together"
              className="celebration-img"
              loading="lazy"
            />
            <span className="celebration-label">Family Gatherings</span>
          </div>
          <div className="celebration-occasion" data-celebration-occasion>
            <img
              src="/images/celebration-business.jpg"
              alt="Business dinner meeting in elegant setting"
              className="celebration-img"
              loading="lazy"
            />
            <span className="celebration-label">Business Dinners</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
