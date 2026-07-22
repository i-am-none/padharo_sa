import type { ReservationHeroContentModel } from "./reservation-hero.types";
import { ReservationHeroClient } from "./ReservationHeroClient";

type ReservationHeroProps = {
  content: ReservationHeroContentModel;
  highlightWords?: string[];
};

export function ReservationHero({ content, highlightWords = [] }: ReservationHeroProps) {
  return <ReservationHeroClient content={content} highlightWords={highlightWords} />;
}
