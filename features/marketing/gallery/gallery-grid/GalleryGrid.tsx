"use client";

import { GalleryCard } from "../gallery-card";
import type { GalleryItem } from "../gallery.types";

type GalleryGridProps = {
  items: GalleryItem[];
  onItemClick?: (item: GalleryItem, index: number) => void;
};

export function GalleryGrid({ items, onItemClick }: GalleryGridProps) {
  if (items.length === 0) {
    return (
      <div className="gallery-empty">
        <p className="gallery-empty-text">No gallery items found.</p>
      </div>
    );
  }

  return (
    <section className="gallery-grid-section">
      <div className="gallery-grid">
        {items.map((item, index) => (
          <div 
            key={item.id} 
            className="gallery-grid-item"
            style={{
              gridColumn: getGridColumn(index),
              gridRow: getGridRow(index),
            }}
          >
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

// Editorial masonry layout helpers
function getGridColumn(index: number): string {
  // Create varied column spans for editorial feel
  const patterns = [
    "span 2", // Large featured item
    "span 1", // Regular item
    "span 1", // Regular item
    "span 1", // Regular item
    "span 2", // Large featured item
    "span 1", // Regular item
    "span 1", // Regular item
  ];
  
  return patterns[index % patterns.length] || "span 1";
}

function getGridRow(index: number): string {
  // Create varied row spans for editorial feel
  const patterns = [
    "span 2", // Tall featured item
    "span 1", // Regular item
    "span 2", // Tall item
    "span 1", // Regular item
    "span 1", // Regular item
    "span 2", // Tall item
    "span 1", // Regular item
  ];
  
  return patterns[index % patterns.length] || "span 1";
}
