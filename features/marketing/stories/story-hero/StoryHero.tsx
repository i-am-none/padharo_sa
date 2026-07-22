import { Hero } from "../../hero/Hero";

import type { HeroContentModel } from "../../hero/hero.types";

const heroVideoSources = [
  {
    src: "Chai-Peete-Hain_yqdc5p.webm",
    type: "video/webm"
  }
];

type StoryHeroProps = {
  eyebrow?: string;
  headline: string;
  description: string;
  highlightWords?: string[];
};

export function StoryHero({
  eyebrow = "OUR STORIES",
  headline,
  description,
  highlightWords = []
}: StoryHeroProps) {
  const heroContent: HeroContentModel = {
    id: "stories-hero",
    eyebrow,
    headline,
    copy: description,
    primaryCta: {
      label: "Read Stories",
      href: "#stories"
    },
    secondaryCta: {
      label: "Explore Gallery",
      href: "/gallery"
    },
    scrollLabel: "Discover Our Stories",
    video: {
      poster: "Home/JLI/hero-poster",
      sources: heroVideoSources
    }
  };

  return <Hero content={heroContent} highlightWords={highlightWords} />;
}
