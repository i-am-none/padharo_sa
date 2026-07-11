import type { HeroContentModel } from "./hero.types";
import { HeroClient } from "./HeroClient";

type HeroProps = {
  content: HeroContentModel;
};

export function Hero({ content }: HeroProps) {
  return <HeroClient content={content} />;
}
