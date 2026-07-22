import menuContent from "@/content/menu.json";
import { MenuHero } from "@/features/commerce/menu";
import { FeaturedCollections } from "@/features/commerce/menu";
import { CategoryExplorer } from "@/features/commerce/menu";
import { DishExplorer } from "@/features/commerce/menu";
import { SmartRecommendations } from "@/features/commerce/menu";
import { TransitionCTA } from "@/features/commerce/menu";
import { MenuClient } from "@/features/commerce/menu";
import type { MenuContent } from "@/features/commerce/menu/menu.types";

export default function MenuPage() {
  const typedMenuContent = menuContent as MenuContent;

  return (
    <>
      <MenuHero content={typedMenuContent.hero} />
      <MenuClient content={typedMenuContent}>
        <FeaturedCollections content={typedMenuContent.featuredCollections} />
        <CategoryExplorer categories={typedMenuContent.categories} />
        <DishExplorer dishes={typedMenuContent.dishes} />
        <SmartRecommendations content={typedMenuContent.recommendations} />
        <TransitionCTA content={typedMenuContent.transition} />
      </MenuClient>
    </>
  );
}
