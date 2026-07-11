import { motion } from "framer-motion";
import type { MouseEvent } from "react";

import { cn } from "@/lib/utils";

type NavigationLinkProps = {
  href: string;
  label: string;
  isActive?: boolean;
  onNavigate?: (event: MouseEvent<HTMLAnchorElement>) => void;
  className?: string;
};

export function NavigationLink({
  href,
  label,
  isActive = false,
  onNavigate,
  className,
}: NavigationLinkProps) {
  return (
    <li>
      <motion.a
        aria-current={isActive ? "location" : undefined}
        className={cn(
          "text-nav focus-ring inline-flex min-h-[var(--touch-target-min)] items-center rounded-[var(--radius-pill)] px-[var(--space-3)] text-text-primary/90 transition-colors duration-[var(--duration-fast)]",
          "hover:text-text-primary",
          isActive ? "text-accent-primary" : "",
          className,
        )}
        href={href}
        onClick={onNavigate}
        whileHover={{ opacity: 0.95, y: -1 }}
        whileTap={{ scale: 0.98 }}
      >
        {label}
      </motion.a>
    </li>
  );
}
