export interface ReservationHeroContentModel {
  id: string;
  eyebrow: string;
  headline: string;
  copy: string;
  video: {
    poster: string;
    sources: Array<{
      src: string;
      type: string;
    }>;
  };
}
