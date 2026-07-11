import type { CuisineDish as CuisineDishType } from "./cuisine.types";
import { CuisineIngredients } from "./CuisineIngredients";
import { CuisineMedia } from "./CuisineMedia";

type CuisineDishProps = {
  dish: CuisineDishType;
  index: number;
};

export function CuisineDish({ dish, index }: CuisineDishProps) {
  return (
    <article className="cuisine-dish" data-cuisine-dish data-cuisine-dish-index={index}>
      <div className="cuisine-dish-media">
        <CuisineMedia media={dish.media} />
      </div>
      <div className="cuisine-dish-content">
        <h3 className="cuisine-dish-name">{dish.name}</h3>
        <p className="cuisine-dish-description">{dish.description}</p>
        <CuisineIngredients ingredients={dish.ingredients} />
      </div>
    </article>
  );
}
