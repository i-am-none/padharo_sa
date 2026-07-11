import { FeaturedCollectionsContent } from "./menu.types";
import { FeaturedCollectionsClient } from "./FeaturedCollectionsClient";

interface FeaturedCollectionsProps {
  content: FeaturedCollectionsContent;
}

export function FeaturedCollections({ content }: FeaturedCollectionsProps) {
  return <FeaturedCollectionsClient content={content} />;
}
