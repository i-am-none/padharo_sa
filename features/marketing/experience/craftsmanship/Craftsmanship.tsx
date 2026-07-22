"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

import { Container } from "@/lib/components/Container";

export function Craftsmanship() {
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
      const eyebrow = sectionElement.querySelector("[data-craftsmanship-eyebrow]");
      const headline = sectionElement.querySelector("[data-craftsmanship-headline]");
      const copy = sectionElement.querySelector("[data-craftsmanship-copy]");

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
        .set(mediaElement, { opacity: 0, x: 20 })
        .set([eyebrow, headline, copy], { opacity: 0, y: 20 })
        .to(mediaElement, { opacity: 1, x: 0, duration: 0.8 }, 0)
        .to(eyebrow, { opacity: 1, y: 0, duration: 0.5 }, 0.25)
        .to(headline, { opacity: 1, y: 0, duration: 0.7 }, 0.4)
        .to(copy, { opacity: 1, y: 0, duration: 0.6 }, 0.6);

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
      className="craftsmanship-section"
      aria-label="Craftsmanship Experience"
    >
      <Container>
        <div className="craftsmanship-layout">
          <div className="craftsmanship-content" ref={contentRef}>
            <p className="craftsmanship-eyebrow" data-craftsmanship-eyebrow>
              Crafted By People
            </p>
            <h2 className="craftsmanship-headline" data-craftsmanship-headline>
              The Hands Behind Every Dish
            </h2>
            <p className="craftsmanship-copy" data-craftsmanship-copy>
              Great food does not happen by accident. It happens because of passionate chefs who treat cooking as art, not routine. Our kitchen team brings decades of experience, each member specializing in different aspects of Rajasthan cuisine. From the tandoor master who perfects bread over charcoal flames to the chef who balances complex spice blends, every person here takes pride in their craft. When you taste our food, you are tasting their dedication.
            </p>
          </div>

          <div className="craftsmanship-media" ref={mediaRef}>
            <div className="craftsmanship-image-wrapper">
              <img
                src="/images/craftsmanship-chef.jpg"
                alt="Chef preparing dishes with traditional techniques and care"
                className="craftsmanship-image"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
