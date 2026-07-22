"use client";

import { GalleryCard } from "../gallery-card";
import type { GalleryItem } from "../gallery.types";

type PhotoCollectionProps = {
  items: GalleryItem[];
  onItemClick?: (item: GalleryItem, index: number) => void;
};

export function PhotoCollection({ items, onItemClick }: PhotoCollectionProps) {
  const photoItems = items.filter(item => item.type === "image");

  if (photoItems.length === 0) {
    return null;
  }

  return (
    <section className="photo-collection">
      <h2 className="photo-collection-headline">Photo Collection</h2>
      <div className="photo-collection-grid">
        {photoItems.map((item, index) => (
          <div key={item.id} className="photo-collection-item">
            <GalleryCard 
              item={item} 
              onClick={() => onItemClick?.(item, index)} 
            />
          </div>
        ))}
      </div>
    </section>
  );
}
