import { ChevronDown } from "lucide-react";
import { forwardRef } from "react";

type ScrollIndicatorProps = {
  href: string;
  label: string;
};

export const ScrollIndicator = forwardRef<HTMLAnchorElement, ScrollIndicatorProps>(
  function ScrollIndicator({ href, label }, ref) {
    return (
      <a
        aria-label={label}
        className="hero-scroll-indicator focus-ring"
        href={href}
        ref={ref}
      >
        <span className="text-hero-scroll">{label}</span>
        <ChevronDown aria-hidden="true" className="h-6 w-6" strokeWidth={1.75} />
      </a>
    );
  },
);
