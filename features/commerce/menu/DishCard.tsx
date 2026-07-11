"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Dish } from "./menu.types";

interface DishCardProps {
  dish: Dish;
}

export function DishCard({ dish }: DishCardProps) {
  return (
    <Link href={`/menu/dish/${dish.slug}`}>
      <motion.div
        className="dish-card group flex flex-col overflow-hidden rounded-3xl bg-bg-surface transition-colors hover:bg-bg-elevated"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
      >
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={dish.image}
            alt={dish.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
          />
          {dish.featured && (
            <div className="absolute left-4 top-4 rounded-full bg-accent-primary px-3 py-1 text-xs font-medium text-bg-base">
              Featured
            </div>
          )}
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-heading mb-2 font-display text-xl">{dish.name}</h3>
          <p className="text-text-muted mb-4 flex-1 text-sm line-clamp-2">
            {dish.description}
          </p>
          <div className="flex items-center justify-between border-t border-divider pt-4">
            <span className="text-heading text-lg font-semibold">
              Rs. {dish.price}
            </span>
            <div className="flex gap-2">
              {dish.dietary.map((diet) => (
                <span
                  key={diet}
                  className="rounded-full bg-bg-elevated px-2 py-1 text-xs text-text-muted"
                >
                  {diet}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
