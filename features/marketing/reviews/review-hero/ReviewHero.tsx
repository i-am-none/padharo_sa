import { Hero } from "../../hero/Hero";

import type { HeroContentModel } from "../../hero/hero.types";

const heroVideoSources = [
  {
    src: "Jingle-Final_up68ii.webm",
    type: "video/webm"
  }
];

type ReviewHeroProps = {
  eyebrow: string;
  headline: string;
  description: string;
  highlightWords?: string[];
};

export function ReviewHero({ eyebrow, headline, description, highlightWords = [] }: ReviewHeroProps) {
  const heroContent: HeroContentModel = {
    id: "reviews-hero",
    eyebrow,
    headline,
    copy: description,
    primaryCta: {
      label: "Write a Review",
      href: "#feedback"
    },
    secondaryCta: {
      label: "View All Reviews",
      href: "#reviews"
    },
    scrollLabel: "Read Guest Experiences",
    video: {
      poster: "Home/JLI/hero-poster",
      sources: heroVideoSources
    }
  };

  return <Hero content={heroContent} highlightWords={highlightWords} />;
}
