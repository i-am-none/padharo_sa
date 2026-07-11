import { motion } from "framer-motion";
import type { MouseEvent } from "react";

type NavigationCtaProps = {
  href: string;
  label: string;
  onNavigate?: (event: MouseEvent<HTMLAnchorElement>) => void;
  className?: string;
};

export function NavigationCTA({ href, label, onNavigate, className }: NavigationCtaProps) {
  return (
    <motion.a
      className={`text-cta focus-ring inline-flex min-h-[var(--touch-target-min)] items-center justify-center rounded-[var(--radius-pill)] bg-accent-primary px-[var(--space-6)] text-bg-base transition-colors duration-[var(--duration-fast)] hover:bg-accent-hover ${className ?? ""}`}
      href={href}
      onClick={onNavigate}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
    >
      {label}
    </motion.a>
  );
}
