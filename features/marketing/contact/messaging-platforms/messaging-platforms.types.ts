export type MessagingPlatform = {
  id: string;
  name: string;
  description: string;
  url: string;
  cta: string;
  icon: string;
};

export type MessagingPlatformsContentModel = {
  id: string;
  headline: string;
  platforms: MessagingPlatform[];
};
