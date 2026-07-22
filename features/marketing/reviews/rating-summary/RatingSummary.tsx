"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import type { PlatformInfo } from "../reviews.types";

type RatingSummaryProps = {
  google: PlatformInfo;
  tripadvisor: PlatformInfo;
};

export function RatingSummary({ google, tripadvisor }: RatingSummaryProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`rating-star ${index < Math.floor(rating) ? "rating-star-filled" : "rating-star-empty"}`}
        size={20}
        fill={index < Math.floor(rating) ? "currentColor" : "none"}
      />
    ));
  };

  return (
    <section className="rating-summary">
      <div className="rating-summary-container">
        <motion.div 
          className="rating-summary-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="rating-summary-header">
            <img src={google.logo} alt={google.name} className="rating-summary-logo" />
            <h3 className="rating-summary-platform">{google.name}</h3>
          </div>
          <div className="rating-summary-rating">
            <div className="rating-summary-stars">{renderStars(google.rating)}</div>
            <span className="rating-summary-score">{google.rating}</span>
          </div>
          <p className="rating-summary-count">{google.totalReviews} reviews</p>
          <a
            href={google.verificationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rating-summary-cta"
          >
            View on {google.name}
          </a>
        </motion.div>

        <motion.div
          className="rating-summary-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="rating-summary-header">
            <img src={tripadvisor.logo} alt={tripadvisor.name} className="rating-summary-logo" />
            <h3 className="rating-summary-platform">{tripadvisor.name}</h3>
          </div>
          <div className="rating-summary-rating">
            <div className="rating-summary-stars">{renderStars(tripadvisor.rating)}</div>
            <span className="rating-summary-score">{tripadvisor.rating}</span>
          </div>
          <p className="rating-summary-count">{tripadvisor.totalReviews} reviews</p>
          <a
            href={tripadvisor.verificationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rating-summary-cta"
          >
            View on {tripadvisor.name}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
