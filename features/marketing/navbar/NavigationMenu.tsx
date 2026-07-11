import type { NavigationItem } from "./types";
import { NavigationLink } from "./NavigationLink";
import type { MouseEvent } from "react";
import { motion } from "framer-motion";

import { motionTokens } from "@/lib/motion";

type NavigationMenuProps = {
  items: NavigationItem[];
  activeHref?: string | null;
  orientation?: "horizontal" | "vertical";
  onNavigate?: (event: MouseEvent<HTMLAnchorElement>) => void;
  animateOnMount?: boolean;
};

export function NavigationMenu({
  items,
  activeHref,
  orientation = "horizontal",
  onNavigate,
  animateOnMount = false,
}: NavigationMenuProps) {
  const listClassName =
    orientation === "horizontal"
      ? "flex items-center gap-[var(--space-1)]"
      : "flex flex-col items-center justify-center gap-[var(--space-3)]";

  if (!animateOnMount) {
    return (
      <ul className={listClassName}>
        {items.map((item) => (
          <NavigationLink
            href={item.href}
            isActive={activeHref === item.href}
            key={item.id}
            label={item.label}
            onNavigate={onNavigate}
          />
        ))}
      </ul>
    );
  }

  return (
    <motion.ul
      animate="open"
      className={listClassName}
      initial="closed"
      variants={{
        open: {
          transition: {
            staggerChildren: motionTokens.stagger.itemDelay,
            delayChildren: motionTokens.stagger.itemDelay,
          },
        },
        closed: {},
      }}
    >
      {items.map((item) => (
        <motion.li
          key={item.id}
          variants={{
            open: { opacity: 1, y: 0 },
            closed: { opacity: 0, y: motionTokens.offset.small },
          }}
        >
          <NavigationLink
            className="justify-center"
            href={item.href}
            isActive={activeHref === item.href}
            label={item.label}
            onNavigate={onNavigate}
          />
        </motion.li>
      ))}
    </motion.ul>
  );
}
