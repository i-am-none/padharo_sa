export interface MenuHeroContent {
  eyebrow: string;
  headline: string;
  description: string;
  media: MenuHeroMedia;
}

export interface MenuHeroMedia {
  type: "video" | "image";
  src: string;
  poster?: string;
}

export interface Collection {
  id: string;
  title: string;
  description: string;
  image: string;
  dishCount: number;
}

export interface FeaturedCollectionsContent {
  headline: string;
  description: string;
  collections: Collection[];
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  icon: string;
  dishCount: number;
}

export interface Dish {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
  dietary: string[];
  allergens: string[];
  spiceLevel: number;
  preparationTime: number;
  featured: boolean;
}

export interface Recommendation {
  dishId: string;
  reason: string;
}

export interface RecommendationsContent {
  headline: string;
  description: string;
  items: Recommendation[];
}

export interface CTA {
  label: string;
  href: string;
  placeholder?: boolean;
}

export interface TransitionContent {
  headline: string;
  description: string;
  primaryCTA: CTA;
  secondaryCTAs: CTA[];
}

export interface MenuContent {
  hero: MenuHeroContent;
  featuredCollections: FeaturedCollectionsContent;
  categories: Category[];
  dishes: Dish[];
  recommendations: RecommendationsContent;
  transition: TransitionContent;
}
