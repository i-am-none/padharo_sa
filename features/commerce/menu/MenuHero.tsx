import { MenuHeroContent } from "./menu.types";
import { MenuHeroClient } from "./MenuHeroClient";

interface MenuHeroProps {
  content: MenuHeroContent;
}

export function MenuHero({ content }: MenuHeroProps) {
  return <MenuHeroClient content={content} />;
}
