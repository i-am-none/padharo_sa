"use client";

import { motion } from "framer-motion";

type RestaurantPhilosophyProps = {
  description?: string;
  quote?: string;
};

export function RestaurantPhilosophy({
  description = "Each dish is a story of tradition, a culinary journey that reflects the rich heritage of Rajasthan. From the royal kitchens of Jaipur to the vibrant streets of Jodhpur, every recipe carries centuries of wisdom and passion.",
  quote = "Food is not merely sustenance—it is memory, tradition, and love served on a plate.",
}: RestaurantPhilosophyProps) {
  return (
    <section className="reviews-philosophy">
      <div className="layout-container">
        <motion.div
          className="reviews-philosophy-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="reviews-philosophy-text">
            <p className="reviews-philosophy-description">{description}</p>
          </div>
          <div className="reviews-philosophy-divider" />
          <div className="reviews-philosophy-quote">
            <p className="reviews-philosophy-quote-text">{quote}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
