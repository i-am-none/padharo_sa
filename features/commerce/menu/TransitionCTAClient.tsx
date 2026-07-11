"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { TransitionContent } from "./menu.types";
import { useReducedMotion } from "framer-motion";

interface TransitionCTAClientProps {
  content: TransitionContent;
}

export function TransitionCTAClient({ content }: TransitionCTAClientProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".transition-cta", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section ref={containerRef} className="py-24">
      <div className="container mx-auto px-4">
        <div className="transition-cta mx-auto max-w-2xl rounded-3xl bg-bg-surface p-12 text-center">
          <h2 className="text-heading mb-4 font-display text-3xl md:text-4xl">
            {content.headline}
          </h2>
          <p className="text-text-secondary mb-8 text-lg">
            {content.description}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href={content.primaryCTA.href}
              className="inline-flex items-center justify-center rounded-full border-2 border-accent-primary bg-accent-primary px-8 py-4 text-bg-base transition-colors hover:bg-accent-hover"
            >
              {content.primaryCTA.label}
            </a>
            <div className="flex gap-4 sm:flex-col">
              {content.secondaryCTAs.map((cta) => (
                <a
                  key={cta.label}
                  href={cta.href}
                  className={`inline-flex items-center justify-center rounded-full border-2 border-border-soft px-8 py-4 text-text-secondary transition-colors hover:border-accent-primary hover:text-accent-primary ${
                    cta.placeholder ? "cursor-not-allowed opacity-50" : ""
                  }`}
                  onClick={(e) => {
                    if (cta.placeholder) e.preventDefault();
                  }}
                >
                  {cta.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
