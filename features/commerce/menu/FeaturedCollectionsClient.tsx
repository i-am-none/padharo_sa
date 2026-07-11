"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FeaturedCollectionsContent } from "./menu.types";
import { CollectionCard } from "./CollectionCard";
import { useReducedMotion } from "framer-motion";

interface FeaturedCollectionsClientProps {
  content: FeaturedCollectionsContent;
}

export function FeaturedCollectionsClient({ content }: FeaturedCollectionsClientProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".collection-card", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section ref={containerRef} className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-heading mb-4 font-display text-3xl md:text-4xl">
            {content.headline}
          </h2>
          <p className="text-text-secondary mx-auto max-w-2xl text-lg">
            {content.description}
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {content.collections.map((collection) => (
            <CollectionCard key={collection.id} collection={collection} />
          ))}
        </div>
      </div>
    </section>
  );
}
