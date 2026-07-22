"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Dish } from "./menu.types";
import { DishCard } from "./DishCard";
import { useReducedMotion } from "framer-motion";

interface DishExplorerProps {
  dishes: Dish[];
}

export function DishExplorer({ dishes }: DishExplorerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".dish-card", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section ref={containerRef} className="py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-heading mb-4 font-display text-3xl md:text-4xl">
            Our Dishes
          </h2>
          <p className="text-text-secondary max-w-2xl text-lg">
            Explore our complete collection of authentic Rajasthani cuisine
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {dishes.map((dish) => (
            <DishCard key={dish.id} dish={dish} />
          ))}
        </div>
      </div>
    </section>
  );
}
