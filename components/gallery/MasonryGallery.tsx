"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { GalleryItem } from "@/features/marketing/gallery/gallery.types";

type MasonryGalleryProps = {
  items: GalleryItem[];
  onItemClick?: (item: GalleryItem, index: number) => void;
};

export function MasonryGallery({ items, onItemClick }: MasonryGalleryProps) {
  // Create a masonry layout by alternating item sizes
  const masonryItems = items.map((item, index) => ({
    ...item,
    size: index % 5 === 0 ? "large" : index % 3 === 0 ? "medium" : "small",
  }));

  return (
    <section className="masonry-gallery">
      <div className="masonry-grid">
        {masonryItems.map((item, index) => (
          <motion.div
            key={item.id}
            className={`masonry-item masonry-item--${item.size}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            onClick={() => onItemClick?.(item, index)}
          >
            <div className="masonry-item-wrapper">
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="masonry-item-image"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1440px) 33vw, 25vw"
              />
              <div className="masonry-item-overlay">
                <div className="masonry-item-content">
                  <h4 className="masonry-item-title">{item.title}</h4>
                  {item.description && (
                    <p className="masonry-item-description">{item.description}</p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
