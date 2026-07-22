"use client";

import { GalleryCard } from "../gallery-card";
import type { GalleryItem } from "../gallery.types";

type VideoMomentsProps = {
  items: GalleryItem[];
  onItemClick?: (item: GalleryItem, index: number) => void;
};

export function VideoMoments({ items, onItemClick }: VideoMomentsProps) {
  const videoItems = items.filter(item => item.type === "video");

  if (videoItems.length === 0) {
    return null;
  }

  return (
    <section className="video-moments">
      <h2 className="video-moments-headline">Video Moments</h2>
      <p className="video-moments-description">
        Experience the atmosphere and craftsmanship through cinematic videos
      </p>
      <div className="video-moments-grid">
        {videoItems.map((item, index) => (
          <div key={item.id} className="video-moments-item">
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
