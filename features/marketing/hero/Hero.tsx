"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

import { Container } from "@/lib/components/Container";
import { cn } from "@/lib/utils";
import { getCloudinaryUrl, getCloudinaryVideoUrl } from "@/lib/cloudinary";

import type { HeroContentModel, HeroVideoSource } from "./hero.types";

type HeroProps = {
  content: HeroContentModel;
  highlightWords?: string[];
};

export function Hero({ content, highlightWords = [] }: HeroProps) {
  const heroRef = useRef<HTMLElement | null>(null);
  const mediaRef = useRef<HTMLDivElement | null>(null);
  const contentFrameRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const scrollIndicatorRef = useRef<HTMLAnchorElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const headlineWords = useMemo(() => content.headline.split(" "), [content.headline]);

  // Video crossfade state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (content.video.sources.length <= 1) return;

    const transitionDuration = 8000;
    const crossfadeDuration = 1500;

    intervalRef.current = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % content.video.sources.length);
        setIsTransitioning(false);
      }, crossfadeDuration);
    }, transitionDuration);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [content.video.sources.length]);

  const setVideoRef = (index: number) => (el: HTMLVideoElement | null) => {
    videoRefs.current[index] = el;
  };

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
      <div className="hero-media" ref={mediaRef}>
        <div className="hero-video-frame relative h-full w-full overflow-hidden" style={{ backgroundImage: `url(${getCloudinaryUrl(content.video.poster)})` }}>
          {content.video.sources.map((source, index) => (
            <video
              key={source.src}
              ref={setVideoRef(index)}
              aria-label={`Ambient views of Padharo Sa - Video ${index + 1}`}
              autoPlay
              className={`hero-video absolute inset-0 h-full w-full object-cover transition-opacity duration-[1500ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
              loop
              muted
              playsInline
              poster={getCloudinaryUrl(content.video.poster)}
              preload="metadata"
            >
              <source src={getCloudinaryVideoUrl(source.src)} type={source.type} />
            </video>
          ))}
        </div>
        <div aria-hidden="true" className="hero-overlay" ref={overlayRef}>
          <div className="hero-overlay-gradient" />
          <div className="hero-overlay-vignette" />
          <div className="hero-overlay-ambient" />
        </div>
      </div>
      <div className="hero-content">
        <Container>
          <div className="hero-content-frame" ref={contentFrameRef}>
            {content.eyebrow ? (
              <p className="text-hero-eyebrow" data-hero-eyebrow>
                {content.eyebrow}
              </p>
            ) : null}
            <h1 aria-label={content.headline} className="text-hero-headline">
              {headlineWords.map((word, index) => {
                const isHighlighted = highlightWords.some(hw => word.toLowerCase().includes(hw.toLowerCase()));
                return (
                  <span 
                    className={`hero-word ${isHighlighted ? 'highlight-yellow' : ''}`} 
                    data-hero-word 
                    key={`${word}-${index}`}
                  >
                    {word}
                    {index < headlineWords.length - 1 ? "\u00A0" : ""}
                  </span>
                );
              })}
            </h1>
            <p className="text-hero-copy" data-hero-copy>
              {content.copy}
            </p>
            <div className="hero-actions" data-hero-actions>
              <HeroCTA href={content.primaryCta.href} label={content.primaryCta.label} />
              <HeroCTA
                href={content.secondaryCta.href}
                label={content.secondaryCta.label}
                variant="ghost"
              />
            </div>
          </div>
        </Container>
        <a
          aria-label={content.scrollLabel}
          className="hero-scroll-indicator focus-ring"
          href={content.secondaryCta.href}
          ref={scrollIndicatorRef}
        >
          <span className="text-hero-scroll">{content.scrollLabel}</span>
          <ChevronDown aria-hidden="true" className="h-6 w-6" strokeWidth={1.75} />
        </a>
      </div>
    </section>
  );
}

function HeroCTA({ href, label, variant = "primary" }: { href: string; label: string; variant?: "primary" | "ghost" }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.a
      className={cn(
        "focus-ring inline-flex min-h-[var(--touch-target-min)] items-center justify-center rounded-[var(--radius-pill)] px-[var(--space-6)] py-[var(--space-3)] text-hero-cta transition-colors duration-[var(--duration-fast)]",
        variant === "primary"
          ? "bg-accent-primary text-bg-base hover:bg-accent-hover"
          : "border border-[rgb(var(--hero-ghost-border-rgb)/0.72)] bg-[rgb(var(--overlay-rgb)/0.12)] text-text-primary hover:border-accent-primary/60 hover:bg-[rgb(var(--overlay-rgb)/0.2)]",
      )}
      href={href}
      whileHover={prefersReducedMotion ? undefined : { y: -2 }}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
    >
      {label}
    </motion.a>
  );
}
