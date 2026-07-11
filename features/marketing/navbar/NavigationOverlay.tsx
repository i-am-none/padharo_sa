import { AnimatePresence, motion } from "framer-motion";
import type { ReactNode } from "react";

import { motionTokens } from "@/lib/motion";

type NavigationOverlayProps = {
  isOpen: boolean;
  children: ReactNode;
  onClose?: () => void;
};

export function NavigationOverlay({ isOpen, children, onClose }: NavigationOverlayProps) {
  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          animate={{ opacity: 1 }}
          aria-label="Navigation menu"
          aria-modal="true"
          className="fixed inset-0 z-[var(--z-nav-overlay)] bg-[var(--overlay)] backdrop-blur-[var(--blur-glass)] md:hidden"
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          transition={{
            duration: motionTokens.duration.medium,
            ease: motionTokens.easing.standard,
          }}
        >
          {children}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
