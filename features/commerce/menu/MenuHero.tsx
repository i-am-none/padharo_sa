"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { MenuHeroContent } from "./menu.types";
import { MenuHeroMedia } from "./MenuHeroMedia";
import { MenuHeroContent as HeroContent } from "./MenuHeroContent";
import { useReducedMotion } from "framer-motion";

interface MenuHeroProps {
  content: MenuHeroContent;
}

export function MenuHero({ content }: MenuHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl.from(".menu-hero-media", {
        opacity: 0,
        scale: 1.05,
        duration: 1.2,
      })
        .from(
          ".menu-hero-eyebrow",
          {
            opacity: 0,
            y: 20,
            duration: 0.8,
          },
          "-=0.6"
        )
        .from(
          ".menu-hero-headline",
          {
            opacity: 0,
            y: 30,
            duration: 1,
          },
          "-=0.4"
        )
        .from(
          ".menu-hero-description",
          {
            opacity: 0,
            y: 20,
            duration: 0.8,
          },
          "-=0.4"
        );
    }, containerRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <div
      ref={containerRef}
      className="relative h-[60vh] min-h-[500px] overflow-hidden"
    >
      <MenuHeroMedia content={content.media} />
      <div className="absolute inset-0 bg-gradient-to-b from-overlay via-overlay/50 to-bg-base" />
      <div className="absolute inset-0 flex items-center justify-center">
        <HeroContent content={content} />
      </div>
    </div>
  );
}
