export type StoryCategory = 
  | "heritage"
  | "cuisine"
  | "signature-dishes"
  | "hospitality"
  | "mauritius-connection";

export type StoryMedia = {
  type: "image" | "video";
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  video?: {
    poster: string;
    sources: Array<{
      src: string;
      type: string;
    }>;
  };
};

export type StoryAuthor = {
  name: string;
  role?: string;
  avatar?: {
    src: string;
    alt: string;
  };
};

export type StorySection = {
  type: "heading" | "paragraph" | "image" | "quote";
  content?: string;
  image?: StoryMedia;
  level?: number;
};

export type Story = {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  category: StoryCategory;
  excerpt: string;
  coverImage: string;
  content: StorySection[];
  author?: StoryAuthor;
  publishedAt: string;
  updatedAt: string;
  readTime: number;
  featured?: boolean;
  seoTitle?: string;
  seoDescription?: string;
  keywords?: string[];
};

export type StoriesContentModel = {
  id: string;
  eyebrow: string;
  headline: string;
  description: string;
  stories: Story[];
  featuredStory?: Story;
};
