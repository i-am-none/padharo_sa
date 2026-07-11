"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { RecommendationsContent, Dish } from "./menu.types";
import { RecommendationCard } from "./RecommendationCard";
import { useReducedMotion } from "framer-motion";

interface SmartRecommendationsClientProps {
  content: RecommendationsContent;
}

export function SmartRecommendationsClient({ content }: SmartRecommendationsClientProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".recommendation-card", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section ref={containerRef} className="bg-bg-secondary py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-heading mb-4 font-display text-3xl md:text-4xl">
            {content.headline}
          </h2>
          <p className="text-text-secondary mx-auto max-w-2xl text-lg">
            {content.description}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {content.items.map((item) => (
            <RecommendationCard key={item.dishId} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
