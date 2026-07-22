import type { StoryCategory } from "../stories.types";

const categoryLabels: Record<StoryCategory, string> = {
  heritage: "Heritage",
  cuisine: "Cuisine",
  "signature-dishes": "Signature Dishes",
  hospitality: "Hospitality",
  "mauritius-connection": "Mauritius Connection",
};

type CategoriesProps = {
  selectedCategory?: StoryCategory;
  onCategoryChange?: (category: StoryCategory | undefined) => void;
};

export function Categories({ selectedCategory, onCategoryChange }: CategoriesProps) {
  const categories: StoryCategory[] = [
    "heritage",
    "cuisine",
    "signature-dishes",
    "hospitality",
    "mauritius-connection",
  ];

  return (
    <div className="categories-filter">
      <button
        onClick={() => onCategoryChange?.(undefined)}
        className={`category-button ${!selectedCategory ? "category-button-active" : ""}`}
      >
        All Stories
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange?.(category)}
          className={`category-button ${selectedCategory === category ? "category-button-active" : ""}`}
        >
          {categoryLabels[category]}
        </button>
      ))}
    </div>
  );
}
