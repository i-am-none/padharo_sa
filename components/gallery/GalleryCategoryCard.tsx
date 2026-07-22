"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

type GalleryCategoryCardProps = {
  title: string;
  image: string;
  itemCount?: number;
};

export function GalleryCategoryCard({ title, image, itemCount }: GalleryCategoryCardProps) {
  return (
    <motion.div
      className="gallery-category-card"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
    >
      <div className="gallery-category-card-image-wrapper">
        <Image
          src={image}
          alt={title}
          fill
          className="gallery-category-card-image"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="gallery-category-card-overlay" />
      </div>
      <div className="gallery-category-card-content">
        <h3 className="gallery-category-card-title">{title}</h3>
        {itemCount && (
          <p className="gallery-category-card-count">{itemCount} items</p>
        )}
        <motion.div
          className="gallery-category-card-arrow"
          initial={{ opacity: 0, x: -10 }}
          whileHover={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ArrowRight size={20} />
        </motion.div>
      </div>
    </motion.div>
  );
}
