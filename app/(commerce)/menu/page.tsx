import menuContent from "@/content/menu.json";
import { MenuHero } from "@/features/commerce/menu";
import { FeaturedCollections } from "@/features/commerce/menu";
import { CategoryExplorer } from "@/features/commerce/menu";
import { DishExplorer } from "@/features/commerce/menu";
import { SmartRecommendations } from "@/features/commerce/menu";
import { TransitionCTA } from "@/features/commerce/menu";
import { MenuClient } from "@/features/commerce/menu";

export default function MenuPage() {
  return (
    <>
      <MenuHero content={menuContent.hero} />
      <MenuClient content={menuContent}>
        <FeaturedCollections content={menuContent.featuredCollections} />
        <CategoryExplorer content={menuContent.categories} />
        <DishExplorer content={menuContent.dishes} />
        <SmartRecommendations content={menuContent.recommendations} />
        <TransitionCTA content={menuContent.transition} />
      </MenuClient>
    </>
  );
}
