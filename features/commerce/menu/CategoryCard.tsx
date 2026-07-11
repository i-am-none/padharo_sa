"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Category } from "./menu.types";

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/menu/category/${category.slug}`}>
      <motion.div
        className="category-card group flex flex-col items-center rounded-3xl bg-bg-surface p-6 text-center transition-colors hover:bg-bg-elevated"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
      >
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-bg-elevated text-accent-primary transition-colors group-hover:bg-accent-primary group-hover:text-bg-base">
          <span className="text-2xl">{getCategoryIcon(category.icon)}</span>
        </div>
        <h3 className="text-heading mb-2 font-display text-lg">{category.name}</h3>
        <p className="text-text-muted mb-3 text-sm">{category.description}</p>
        <p className="text-accent-primary text-sm font-medium">
          {category.dishCount} dishes
        </p>
      </motion.div>
    </Link>
  );
}

function getCategoryIcon(icon: string): string {
  const iconMap: Record<string, string> = {
    "utensils": "🍽️",
    "chef-hat": "👨‍🍳",
    "bread-slice": "🍞",
    "cake": "🍰",
    "coffee": "☕",
  };
  return iconMap[icon] || "🍽️";
}
