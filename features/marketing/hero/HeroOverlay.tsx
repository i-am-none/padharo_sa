import { forwardRef } from "react";

export const HeroOverlay = forwardRef<HTMLDivElement>(function HeroOverlay(_, ref) {
  return (
    <div aria-hidden="true" className="hero-overlay" ref={ref}>
      <div className="hero-overlay-gradient" />
      <div className="hero-overlay-vignette" />
      <div className="hero-overlay-ambient" />
    </div>
  );
});
