import { Hero } from "../../hero/Hero";

import type { HeroContentModel } from "../../hero/hero.types";

const heroVideoSources = [
  {
    src: "/videos/Experience/experience-hero.mp4",
    type: "video/mp4"
  },
  {
    src: "/videos/Experience/behind-every-smile.mp4",
    type: "video/mp4"
  },
  {
    src: "/videos/Experience/crafted-by-people.mp4",
    type: "video/mp4"
  },
  {
    src: "/videos/Experience/culinary-journey.mp4",
    type: "video/mp4"
  },
  {
    src: "/videos/Experience/experience-arrival.mp4",
    type: "video/mp4"
  },
  {
    src: "/videos/Experience/experience-farewell.mp4",
    type: "video/mp4"
  }
];

const heroContent: HeroContentModel = {
  id: "experience-hero",
  eyebrow: "AUTHENTIC RAJASTHAN",
  headline: "Experience the Soul of Rajasthan",
  copy: "Step into a world where authentic Rajasthan hospitality transforms every meal into an unforgettable journey. From the moment you arrive, you're not just a guest—you're family.",
  primaryCta: {
    label: "Reserve Your Table",
    href: "/reservation"
  },
  secondaryCta: {
    label: "Discover More",
    href: "#arrival"
  },
  scrollLabel: "Begin Your Journey",
  video: {
    poster: "/images/hero-poster.svg",
    sources: heroVideoSources
  }
};

export function ExperienceHero() {
  return <Hero content={heroContent} />;
}
