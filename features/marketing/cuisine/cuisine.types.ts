export type CuisineVideoSource = {
  src: string;
  type: string;
};

export type CuisineVideo = {
  poster: string;
  sources: CuisineVideoSource[];
};

export type CuisineMedia = {
  type: "image" | "video";
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  video?: CuisineVideo;
};

export type CuisineIngredient = {
  name: string;
  highlight: boolean;
};

export type CuisineDish = {
  id: string;
  name: string;
  description: string;
  ingredients: CuisineIngredient[];
  media: CuisineMedia;
};

export type CuisineContentModel = {
  id: string;
  eyebrow: string;
  headline: string;
  copy: string;
  quote?: string;
  media?: CuisineMedia;
  dishes: CuisineDish[];
  cta: {
    label: string;
    description: string;
    href: string;
  };
};
