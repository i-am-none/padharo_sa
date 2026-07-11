import { RecommendationsContent } from "./menu.types";
import { SmartRecommendationsClient } from "./SmartRecommendationsClient";

interface SmartRecommendationsProps {
  content: RecommendationsContent;
}

export function SmartRecommendations({ content }: SmartRecommendationsProps) {
  return <SmartRecommendationsClient content={content} />;
}
