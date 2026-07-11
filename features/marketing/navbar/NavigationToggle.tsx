import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

type NavigationToggleProps = {
  isOpen: boolean;
  onToggle: () => void;
  controlsId: string;
};

export function NavigationToggle({ isOpen, onToggle, controlsId }: NavigationToggleProps) {
  return (
    <motion.button
      aria-controls={controlsId}
      aria-expanded={isOpen}
      aria-haspopup="dialog"
      aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
      className="focus-ring inline-flex min-h-[var(--touch-target-min)] min-w-[var(--touch-target-min)] items-center justify-center rounded-[var(--radius-pill)] border border-border-soft bg-bg-surface/70 text-text-primary md:hidden"
      onClick={onToggle}
      type="button"
      whileTap={{ scale: 0.95 }}
    >
      {isOpen ? (
        <X aria-hidden="true" className="h-5 w-5" strokeWidth={1.75} />
      ) : (
        <Menu aria-hidden="true" className="h-5 w-5" strokeWidth={1.75} />
      )}
    </motion.button>
  );
}
