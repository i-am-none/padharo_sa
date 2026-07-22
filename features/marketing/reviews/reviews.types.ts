export type ReviewPlatform = "google" | "tripadvisor" | "direct";

export type Reviewer = {
  name: string;
  profileImage?: string;
  avatar?: {
    src: string;
    alt: string;
  };
};

export type PlatformInfo = {
  name: string;
  rating: number;
  totalReviews: number;
  verificationUrl: string;
  logo: string;
};

export type Review = {
  id: string;
  platform: ReviewPlatform;
  reviewer: Reviewer;
  rating: number;
  comment: string;
  date: string;
  verificationUrl: string;
  featured?: boolean;
};

export type ReviewsContentModel = {
  id: string;
  eyebrow: string;
  headline: string;
  description: string;
  platforms: {
    google: PlatformInfo;
    tripadvisor: PlatformInfo;
  };
  googleReviews: Review[];
  tripadvisorReviews: Review[];
  featuredReviews: Review[];
};

export type FeedbackFormData = {
  name: string;
  email?: string;
  visitDate?: string;
  rating: number;
  message: string;
};
