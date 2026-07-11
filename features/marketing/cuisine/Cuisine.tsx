import type { CuisineContentModel } from "./cuisine.types";
import { CuisineClient } from "./CuisineClient";

type CuisineProps = {
  content: CuisineContentModel;
};

export function Cuisine({ content }: CuisineProps) {
  return <CuisineClient content={content} />;
}
