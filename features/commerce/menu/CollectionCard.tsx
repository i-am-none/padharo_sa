"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Collection } from "./menu.types";

interface CollectionCardProps {
  collection: Collection;
}

export function CollectionCard({ collection }: CollectionCardProps) {
  return (
    <motion.div
      className="collection-card group relative overflow-hidden rounded-3xl"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={collection.image}
          alt={collection.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-heading mb-2 font-display text-xl">{collection.title}</h3>
        <p className="text-text-secondary mb-3 text-sm">{collection.description}</p>
        <p className="text-accent-primary text-sm font-medium">
          {collection.dishCount} dishes
        </p>
      </div>
    </motion.div>
  );
}
