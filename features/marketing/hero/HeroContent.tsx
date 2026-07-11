import type { RefObject } from "react";

import { Container } from "@/components/shared/layout/Container";

import type { HeroContentModel } from "./hero.types";
import { HeroCopy } from "./HeroCopy";
import { HeroCTA } from "./HeroCTA";
import { HeroHeadline } from "./HeroHeadline";
import { ScrollIndicator } from "./ScrollIndicator";

type HeroContentProps = {
  content: HeroContentModel;
  contentFrameRef: RefObject<HTMLDivElement | null>;
  headlineWords: string[];
  scrollIndicatorRef: RefObject<HTMLAnchorElement | null>;
};

export function HeroContent({
  content,
  contentFrameRef,
  headlineWords,
  scrollIndicatorRef,
}: HeroContentProps) {
  return (
    <div className="hero-content">
      <Container>
        <div className="hero-content-grid">
          <div className="hero-content-frame" ref={contentFrameRef}>
            {content.eyebrow ? (
              <p className="text-hero-eyebrow" data-hero-eyebrow>
                {content.eyebrow}
              </p>
            ) : null}
            <HeroHeadline text={content.headline} words={headlineWords} />
            <HeroCopy text={content.copy} />
            <div className="hero-actions" data-hero-actions>
              <HeroCTA href={content.primaryCta.href} label={content.primaryCta.label} />
              <HeroCTA
                href={content.secondaryCta.href}
                label={content.secondaryCta.label}
                variant="ghost"
              />
            </div>
          </div>
        </div>
      </Container>
      <ScrollIndicator
        href={content.secondaryCta.href}
        label={content.scrollLabel}
        ref={scrollIndicatorRef}
      />
    </div>
  );
}
