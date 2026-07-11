import { motion } from "framer-motion";
import type { MouseEvent, RefObject } from "react";

import { motionTokens } from "@/lib/motion";

import type { NavigationCta, NavigationItem } from "./types";
import { NavigationCTA } from "./NavigationCTA";
import { NavigationMenu } from "./NavigationMenu";
import { NavigationOverlay } from "./NavigationOverlay";

type MobileNavigationProps = {
  isOpen: boolean;
  menuId: string;
  items: NavigationItem[];
  cta: NavigationCta;
  activeHref?: string | null;
  overlayRef: RefObject<HTMLDivElement | null>;
  onNavigate: (event: MouseEvent<HTMLAnchorElement>) => void;
  onClose: () => void;
};

export function MobileNavigation({
  isOpen,
  menuId,
  items,
  cta,
  activeHref,
  overlayRef,
  onNavigate,
  onClose,
}: MobileNavigationProps) {
  return (
    <NavigationOverlay isOpen={isOpen} onClose={onClose}>
      <div
        className="flex min-h-full flex-col px-[var(--space-6)] pb-[var(--space-8)] pt-[calc(var(--nav-height)+var(--space-8))]"
        id={menuId}
        onClick={(event) => event.stopPropagation()}
        ref={overlayRef}
      >
        <motion.nav
          animate={{ opacity: 1, y: 0 }}
          aria-label="Mobile navigation"
          className="flex flex-1 items-center justify-center"
          initial={{ opacity: 0, y: motionTokens.offset.small }}
          transition={{
            duration: motionTokens.duration.medium,
            ease: motionTokens.easing.standard,
          }}
        >
          <NavigationMenu
            activeHref={activeHref}
            animateOnMount
            items={items}
            onNavigate={onNavigate}
            orientation="vertical"
          />
        </motion.nav>
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto w-full max-w-[var(--layout-width-mobile-menu)]"
          initial={{ opacity: 0, y: motionTokens.offset.medium }}
          transition={{
            duration: motionTokens.duration.medium,
            ease: motionTokens.easing.standard,
          }}
        >
          <NavigationCTA href={cta.href} label={cta.label} onNavigate={onNavigate} />
        </motion.div>
      </div>
    </NavigationOverlay>
  );
}
