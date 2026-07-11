import type { CuisineIngredient } from "./cuisine.types";

type CuisineIngredientsProps = {
  ingredients: CuisineIngredient[];
};

export function CuisineIngredients({ ingredients }: CuisineIngredientsProps) {
  return (
    <div className="cuisine-ingredients" data-cuisine-ingredients>
      {ingredients.map((ingredient, index) => (
        <span
          key={index}
          className={`cuisine-ingredient ${ingredient.highlight ? "cuisine-ingredient-highlight" : ""}`}
          data-cuisine-ingredient
        >
          {ingredient.name}
          {index < ingredients.length - 1 && <span className="cuisine-ingredient-separator"> · </span>}
        </span>
      ))}
    </div>
  );
}
