export type PhilosophyVideoSource = {
  src: string;
  type: string;
};

export type PhilosophyVideo = {
  poster: string;
  sources: PhilosophyVideoSource[];
};

export type PhilosophyMedia = {
  type: "image" | "video";
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  video?: PhilosophyVideo;
};

export type PhilosophyPrinciple = {
  title: string;
  description: string;
};

export type PhilosophyContentModel = {
  id: string;
  eyebrow: string;
  headline: string;
  body: string[];
  principles?: PhilosophyPrinciple[];
  quote?: string;
  media: PhilosophyMedia;
};
