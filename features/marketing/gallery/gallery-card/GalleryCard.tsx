"use client";

import Image from "next/image";
import { useState } from "react";
import type { GalleryItem } from "../gallery.types";

type GalleryCardProps = {
  item: GalleryItem;
  onClick?: () => void;
};

const categoryLabels: Record<string, string> = {
  culinary: "CULINARY STORIES",
  ambience: "DINING ATMOSPHERE",
  hospitality: "HOSPITALITY MOMENTS",
  culture: "HERITAGE & CULTURE",
  "behind-scenes": "BEHIND THE SCENES",
};

export function GalleryCard({ item, onClick }: GalleryCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <article 
      className="gallery-card group" 
      data-gallery-card
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.();
        }
      }}
    >
      <div className="gallery-card-frame">
        <div className="gallery-card-media">
          {item.type === "image" ? (
            <Image
              src={item.src}
              alt={item.title}
              width={800}
              height={600}
              className={`gallery-card-image ${isLoaded ? 'loaded' : ''}`}
              onLoad={() => setIsLoaded(true)}
            />
          ) : (
            <div className="gallery-card-video">
              <Image
                src={item.poster || item.src}
                alt={item.title}
                width={800}
                height={600}
                className={`gallery-card-image ${isLoaded ? 'loaded' : ''}`}
                onLoad={() => setIsLoaded(true)}
              />
              <div className="gallery-card-video-indicator">
                <svg 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                  className="gallery-card-play-icon"
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>
            </div>
          )}
          <div className="gallery-card-overlay" />
        </div>
        
        <div className="gallery-card-content">
          <span className="gallery-card-category">
            {categoryLabels[item.category] || item.category.toUpperCase()}
          </span>
          <h3 className="gallery-card-title">{item.title}</h3>
          {item.description && (
            <p className="gallery-card-description">{item.description}</p>
          )}
        </div>
      </div>
    </article>
  );
}
