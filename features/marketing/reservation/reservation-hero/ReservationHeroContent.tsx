import type { RefObject } from "react";

import { Container } from "@/lib/components/Container";

type ReservationHeroContentProps = {
  eyebrow: string;
  headline: string;
  copy: string;
  headlineWords: string[];
  contentFrameRef: RefObject<HTMLDivElement | null>;
  scrollIndicatorRef: RefObject<HTMLAnchorElement | null>;
  highlightWords?: string[];
};

export function ReservationHeroContent({
  eyebrow,
  headline,
  copy,
  headlineWords,
  contentFrameRef,
  scrollIndicatorRef,
  highlightWords = [],
}: ReservationHeroContentProps) {
  return (
    <div className="hero-content">
      <Container>
        <div className="hero-content-grid">
          <div className="hero-content-frame" ref={contentFrameRef}>
            <p className="text-hero-eyebrow" data-hero-eyebrow>
              {eyebrow}
            </p>
            <h1 className="text-hero-headline" aria-label={headline}>
              {headlineWords.map((word, index) => {
                const isHighlighted = highlightWords.some(hw => word.toLowerCase().includes(hw.toLowerCase()));
                return (
                  <span
                    className={`hero-word ${isHighlighted ? 'highlight-yellow' : ''}`}
                    data-hero-word
                    key={`${word}-${index}`}
                  >
                    {word}
                    {index < headlineWords.length - 1 ? "\u00A0" : ""}
                  </span>
                );
              })}
            </h1>
            <p className="text-hero-copy" data-hero-copy>
              {copy}
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
