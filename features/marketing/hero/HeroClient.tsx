"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useRef } from "react";

import type { HeroContentModel } from "./hero.types";
import { HeroContent } from "./HeroContent";
import { HeroMedia } from "./HeroMedia";

type HeroClientProps = {
  content: HeroContentModel;
};

export function HeroClient({ content }: HeroClientProps) {
  const heroRef = useRef<HTMLElement | null>(null);
  const mediaRef = useRef<HTMLDivElement | null>(null);
  const contentFrameRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const scrollIndicatorRef = useRef<HTMLAnchorElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const headlineWords = useMemo(() => content.headline.split(" "), [content.headline]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const heroElement = heroRef.current;
    if (!heroElement) {
      return;
    }

    const context = gsap.context(() => {
      const overlayElement = overlayRef.current;
      const mediaElement = mediaRef.current;
      const contentFrameElement = contentFrameRef.current;
      const scrollIndicatorElement = scrollIndicatorRef.current;
      const eyebrow = heroElement.querySelector("[data-hero-eyebrow]");
      const copy = heroElement.querySelector("[data-hero-copy]");
      const actions = heroElement.querySelector("[data-hero-actions]");
      const words = heroElement.querySelectorAll("[data-hero-word]");

      if (prefersReducedMotion) {
        gsap.set([eyebrow, words, copy, actions, scrollIndicatorElement], {
          clearProps: "all",
          opacity: 1,
          y: 0,
        });
        gsap.set(mediaElement, { scale: 1 });
        gsap.set(overlayElement, { opacity: 1 });
        return;
      }

      const timeline = gsap.timeline({
        defaults: {
          ease: "power2.out",
        },
      });

      timeline
        .set([eyebrow, copy, actions, scrollIndicatorElement], { opacity: 0, y: 24 })
        .set(words, { opacity: 0, y: 32 })
        .set(mediaElement, { scale: 1.05 })
        .set(overlayElement, { opacity: 0.7 })
        .to(overlayElement, { opacity: 1, duration: 0.8 }, 0.1)
        .to(mediaElement, { scale: 1, duration: 1.6, ease: "expo.out" }, 0)
        .to(eyebrow, { opacity: 1, y: 0, duration: 0.55 }, 0.35)
        .to(
          words,
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "expo.out",
            stagger: 0.08,
          },
          0.5,
        )
        .to(copy, { opacity: 1, y: 0, duration: 0.65 }, 1.2)
        .to(actions, { opacity: 1, y: 0, duration: 0.65 }, 1.35)
        .to(scrollIndicatorElement, { opacity: 1, y: 0, duration: 0.65 }, 1.55);

      if (scrollIndicatorElement) {
        gsap.to(scrollIndicatorElement, {
          y: 10,
          duration: 1.8,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      }

      const scrollTimeline = gsap.timeline();
      scrollTimeline
        .to(contentFrameElement, {
          opacity: 0,
          y: -32,
          ease: "none",
        })
        .to(
          mediaElement,
          {
            yPercent: 8,
            ease: "none",
          },
          0,
        );

      ScrollTrigger.create({
        trigger: heroElement,
        start: "top top",
        end: "bottom top",
        scrub: true,
        animation: scrollTimeline,
      });
    }, heroElement);

    return () => {
      context.revert();
    };
  }, [headlineWords, prefersReducedMotion]);

  return (
    <section
      aria-label="Introduction"
      className="hero-shell"
      id={content.id}
      ref={heroRef}
    >
      <HeroMedia
        overlayRef={overlayRef}
        poster={content.video.poster}
        ref={mediaRef}
        sources={content.video.sources}
      />
      <HeroContent
        content={content}
        contentFrameRef={contentFrameRef}
        headlineWords={headlineWords}
        scrollIndicatorRef={scrollIndicatorRef}
      />
    </section>
  );
}
