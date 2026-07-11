import { forwardRef, type RefObject } from "react";

import type { HeroVideoSource } from "./hero.types";
import { HeroOverlay } from "./HeroOverlay";
import { HeroVideo } from "./HeroVideo";

type HeroMediaProps = {
  poster: string;
  sources: HeroVideoSource[];
  overlayRef: RefObject<HTMLDivElement | null>;
};

export const HeroMedia = forwardRef<HTMLDivElement, HeroMediaProps>(function HeroMedia(
  { poster, sources, overlayRef },
  ref,
) {
  return (
    <div className="hero-media" ref={ref}>
      <HeroVideo poster={poster} sources={sources} />
      <HeroOverlay ref={overlayRef} />
    </div>
  );
});
