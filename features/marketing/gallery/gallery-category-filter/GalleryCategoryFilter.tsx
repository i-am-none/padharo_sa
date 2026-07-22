"use client";

import type { GalleryCategory } from "../gallery.types";

type GalleryCategoryFilterProps = {
  selectedCategory?: GalleryCategory;
  onCategoryChange: (category: GalleryCategory | undefined) => void;
};

const categories: Array<{ value: GalleryCategory; label: string }> = [
  { value: "culinary", label: "Culinary Stories" },
  { value: "ambience", label: "Dining Atmosphere" },
  { value: "hospitality", label: "Hospitality Moments" },
  { value: "culture", label: "Heritage & Culture" },
  { value: "behind-scenes", label: "Behind the Scenes" },
];

export function GalleryCategoryFilter({ 
  selectedCategory, 
  onCategoryChange 
}: GalleryCategoryFilterProps) {
  return (
    <div className="gallery-category-filter">
      <button
        className={`gallery-category-button ${
          !selectedCategory ? "active" : ""
        }`}
        onClick={() => onCategoryChange(undefined)}
      >
        All
      </button>
      
      {categories.map((category) => (
        <button
          key={category.value}
          className={`gallery-category-button ${
            selectedCategory === category.value ? "active" : ""
          }`}
          onClick={() => onCategoryChange(category.value)}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}
