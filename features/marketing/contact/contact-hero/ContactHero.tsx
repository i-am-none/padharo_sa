import type { ContactHeroContentModel } from "./contact-hero.types";
import { ContactHeroClient } from "./ContactHeroClient";

type ContactHeroProps = {
  content: ContactHeroContentModel;
  highlightWords?: string[];
};

export function ContactHero({ content, highlightWords = [] }: ContactHeroProps) {
  return <ContactHeroClient content={content} highlightWords={highlightWords} />;
}
