export type SocialPlatform = {
  id: string;
  name: string;
  handle: string;
  url: string;
  icon: string;
};

export type SocialPresenceContentModel = {
  id: string;
  headline: string;
  platforms: SocialPlatform[];
};
