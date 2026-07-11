export type AtmosphereVideoSource = {
  src: string;
  type: string;
};

export type AtmosphereVideo = {
  poster: string;
  sources: AtmosphereVideoSource[];
};

export type AtmosphereMedia = {
  type: "image" | "video";
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  video?: AtmosphereVideo;
};

export type AtmosphereContentModel = {
  id: string;
  eyebrow: string;
  headline: string;
  copy: string;
  quote?: string;
  media: AtmosphereMedia;
};
