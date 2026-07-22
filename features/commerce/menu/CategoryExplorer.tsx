"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Category } from "./menu.types";
import { CategoryCard } from "./CategoryCard";
import { useReducedMotion } from "framer-motion";

interface CategoryExplorerProps {
  categories: Category[];
}

export function CategoryExplorer({ categories }: CategoryExplorerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".category-card", {
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
        <div className="mb-12">
          <h2 className="text-heading mb-4 font-display text-3xl md:text-4xl">
            Explore by Category
          </h2>
          <p className="text-text-secondary max-w-2xl text-lg">
            Navigate through our culinary offerings organized by traditional categories
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
