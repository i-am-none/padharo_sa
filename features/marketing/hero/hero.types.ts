export type HeroVideoSource = {
  src: string;
  type: string;
};

export type HeroContentModel = {
  id: string;
  eyebrow?: string;
  headline: string;
  copy: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  scrollLabel: string;
  video: {
    poster: string;
    sources: HeroVideoSource[];
  };
};
