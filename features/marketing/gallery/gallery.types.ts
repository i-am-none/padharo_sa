export type GalleryCategory = 
  | "culinary"
  | "ambience"
  | "hospitality"
  | "culture"
  | "behind-scenes";

export type GalleryMediaType = "image" | "video";

export type GalleryMedia = {
  type: GalleryMediaType;
  src: string;
  poster?: string; // For videos
};

export type GalleryItem = {
  id: string;
  type: GalleryMediaType;
  src: string;
  poster?: string;
  title: string;
  category: GalleryCategory;
  description?: string;
};

export type SocialPlatform = {
  url: string;
  purpose: string;
  cta: string;
};

export type SocialPlatforms = {
  instagram: SocialPlatform;
  facebook: SocialPlatform;
  tiktok: SocialPlatform;
  tripadvisor: SocialPlatform;
  google: SocialPlatform;
};

export type GalleryContentModel = {
  id: string;
  eyebrow: string;
  headline: string;
  description: string;
  items: GalleryItem[];
  socialPlatforms: SocialPlatforms;
};
