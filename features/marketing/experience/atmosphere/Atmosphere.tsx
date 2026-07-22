"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

import { Container } from "@/lib/components/Container";

export function Atmosphere() {
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
      const eyebrow = sectionElement.querySelector("[data-atmosphere-eyebrow]");
      const headline = sectionElement.querySelector("[data-atmosphere-headline]");
      const copy = sectionElement.querySelector("[data-atmosphere-copy]");
      const images = sectionElement.querySelectorAll("[data-atmosphere-image]");

      if (prefersReducedMotion) {
        gsap.set([eyebrow, headline, copy, galleryElement, contentElement, ...images], {
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
        .set(images, { opacity: 0, y: 30 })
        .to(eyebrow, { opacity: 1, y: 0, duration: 0.5 }, 0)
        .to(headline, { opacity: 1, y: 0, duration: 0.7 }, 0.2)
        .to(copy, { opacity: 1, y: 0, duration: 0.6 }, 0.4)
        .to(images, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
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
      className="atmosphere-section"
      aria-label="Atmosphere Experience"
    >
      <Container>
        <div className="atmosphere-content" ref={contentRef}>
          <p className="atmosphere-eyebrow" data-atmosphere-eyebrow>
            Atmosphere
          </p>
          <h2 className="atmosphere-headline" data-atmosphere-headline>
            Where Every Corner Tells a Story
          </h2>
          <p className="atmosphere-copy" data-atmosphere-copy>
            Soft lighting casts warm shadows across handcrafted interiors. Traditional artwork adorns the walls, each piece carrying centuries of heritage. The gentle hum of conversation blends with subtle music. Whether you seek an intimate corner for two or a spacious table for family, every space is designed to make you feel at home. Here, time slows down, allowing you to savor not just the food, but the moment itself.
          </p>
        </div>

        <div className="atmosphere-gallery" ref={galleryRef}>
          <div className="atmosphere-image-primary" data-atmosphere-image>
            <img
              src="/images/atmosphere-interior.jpg"
              alt="Restaurant interior with warm lighting and traditional decor"
              className="atmosphere-img"
              loading="lazy"
            />
          </div>
          <div className="atmosphere-image-secondary" data-atmosphere-image>
            <img
              src="/images/atmosphere-seating.jpg"
              alt="Comfortable seating arrangement with elegant table settings"
              className="atmosphere-img"
              loading="lazy"
            />
          </div>
          <div className="atmosphere-image-tertiary" data-atmosphere-image>
            <img
              src="/images/atmosphere-details.jpg"
              alt="Traditional architectural details and decorative elements"
              className="atmosphere-img"
              loading="lazy"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
