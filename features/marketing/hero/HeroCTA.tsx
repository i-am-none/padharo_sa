"use client";

import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

type HeroCTAProps = {
  href: string;
  label: string;
  variant?: "primary" | "ghost";
};

export function HeroCTA({ href, label, variant = "primary" }: HeroCTAProps) {
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
