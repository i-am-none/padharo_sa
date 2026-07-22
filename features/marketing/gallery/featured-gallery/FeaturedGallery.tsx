"use client";

import { GalleryCard } from "../gallery-card";
import type { GalleryItem } from "../gallery.types";

type FeaturedGalleryProps = {
  items: GalleryItem[];
  onItemClick?: (item: GalleryItem, index: number) => void;
};

export function FeaturedGallery({ items, onItemClick }: FeaturedGalleryProps) {
  // Take first 4 items as featured with editorial layout
  const featuredItems = items.slice(0, 4);

  return (
    <section className="featured-gallery">
      <h2 className="featured-gallery-headline">Featured Moments</h2>
      <div className="featured-gallery-grid">
        <div className="featured-gallery-item featured-large">
          <GalleryCard 
            item={featuredItems[0]} 
            onClick={() => onItemClick?.(featuredItems[0], 0)} 
          />
        </div>
        
        <div className="featured-gallery-secondary">
          <div className="featured-gallery-item featured-medium">
            <GalleryCard 
              item={featuredItems[1]} 
              onClick={() => onItemClick?.(featuredItems[1], 1)} 
            />
          </div>
          <div className="featured-gallery-item featured-medium">
            <GalleryCard 
              item={featuredItems[2]} 
              onClick={() => onItemClick?.(featuredItems[2], 2)} 
            />
          </div>
        </div>
        
        <div className="featured-gallery-item featured-wide">
          <GalleryCard 
            item={featuredItems[3]} 
            onClick={() => onItemClick?.(featuredItems[3], 3)} 
          />
        </div>
      </div>
    </section>
  );
}
