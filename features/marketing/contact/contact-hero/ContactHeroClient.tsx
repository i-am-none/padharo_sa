"use client";

import { gsap } from "gsap";
import { useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";
import { getCloudinaryVideoUrl } from "@/lib/cloudinary";

import type { ContactHeroContentModel } from "./contact-hero.types";

type ContactHeroClientProps = {
  content: ContactHeroContentModel;
  highlightWords?: string[];
};

export function ContactHeroClient({ content, highlightWords = [] }: ContactHeroClientProps) {
  const heroRef = useRef<HTMLElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const headlineWords = content.headline.split(" ");

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = async () => {
      try {
        await video.play();
      } catch (error) {
        console.log('Video autoplay failed:', error);
      }
    };

    playVideo();
  }, []);

  useEffect(() => {
    const heroElement = heroRef.current;
    if (!heroElement) return;

    const context = gsap.context(() => {
      const overlayElement = overlayRef.current;
      const contentElement = contentRef.current;
      const eyebrow = heroElement.querySelector("[data-hero-eyebrow]");
      const headline = heroElement.querySelector("[data-hero-headline]");
      const copy = heroElement.querySelector("[data-hero-copy]");
      const cta = heroElement.querySelector("[data-hero-cta]");

      if (prefersReducedMotion) {
        gsap.set([eyebrow, headline, copy, cta, overlayElement], {
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
        .set([eyebrow, headline, copy, cta], { opacity: 0, y: 24 })
        .set(overlayElement, { opacity: 0.6 })
        .to(overlayElement, { opacity: 1, duration: 0.8 }, 0)
        .to(eyebrow, { opacity: 1, y: 0, duration: 0.55 }, 0.35)
        .to(headline, { opacity: 1, y: 0, duration: 0.65 }, 0.5)
        .to(copy, { opacity: 1, y: 0, duration: 0.65 }, 0.7)
        .to(cta, { opacity: 1, y: 0, duration: 0.65 }, 0.85);
    }, heroElement);

    return () => {
      context.revert();
    };
  }, [content, prefersReducedMotion]);

  return (
    <section
      ref={heroRef}
      className="contact-hero relative min-h-[70vh] flex items-center justify-center overflow-hidden"
      aria-label="Contact introduction"
      id={content.id}
    >
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src={getCloudinaryVideoUrl("Experience-Farewell_nsboz0.webm")} type="video/webm" />
        </video>
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"
        />
      </div>

      <div
        ref={contentRef}
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
      >
        <p
          data-hero-eyebrow
          className="text-sm uppercase tracking-[0.12em] text-[var(--accent-primary)] mb-4 font-medium"
        >
          {content.eyebrow}
        </p>
        <h1
          data-hero-headline
          className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-white mb-6 leading-tight"
        >
          {headlineWords.map((word, index) => {
            const isHighlighted = highlightWords.some(hw => word.toLowerCase().includes(hw.toLowerCase()));
            return (
              <span
                key={`${word}-${index}`}
                className={isHighlighted ? 'highlight-yellow' : ''}
              >
                {word}
                {index < headlineWords.length - 1 ? "\u00A0" : ""}
              </span>
            );
          })}
        </h1>
        <p
          data-hero-copy
          className="text-lg md:text-xl text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          {content.copy}
        </p>
        <a
          data-hero-cta
          href={content.primaryCta.href}
          className="inline-flex items-center justify-center px-8 py-4 bg-[var(--accent-primary)] text-[var(--bg-base)] font-medium rounded-sm hover:bg-[var(--accent-hover)] transition-colors duration-300 focus-ring"
        >
          {content.primaryCta.label}
        </a>
      </div>
    </section>
  );
}
