"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useReducedMotion } from "framer-motion";

type CuisineCTAProps = {
  label: string;
  description: string;
  href: string;
};

export function CuisineCTA({ label, description, href }: CuisineCTAProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="cuisine-cta" data-cuisine-cta>
      <div className="cuisine-cta-content">
        <h3 className="cuisine-cta-headline">{label}</h3>
        <p className="cuisine-cta-description">{description}</p>
        <Link
          href={href}
          className="cuisine-cta-button"
          prefetch={false}
        >
          <motion.span
            className="cuisine-cta-button-text"
            whileHover={!prefersReducedMotion ? { x: 4 } : undefined}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            Explore the Complete Menu
          </motion.span>
          <ArrowRight className="cuisine-cta-button-icon" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
