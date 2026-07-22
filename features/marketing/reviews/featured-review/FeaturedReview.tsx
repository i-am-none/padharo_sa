"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";
import type { Review } from "../reviews.types";

type FeaturedReviewProps = {
  review: Review;
};

export function FeaturedReview({ review }: FeaturedReviewProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`featured-review-star ${index < Math.floor(rating) ? "featured-review-star-filled" : "featured-review-star-empty"}`}
        size={24}
        fill={index < Math.floor(rating) ? "currentColor" : "none"}
      />
    ));
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
  };

  return (
    <motion.div
      className="featured-review"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="featured-review-icon">
        <Quote className="featured-review-quote" size={48} />
      </div>

      <div className="featured-review-content">
        <p className="featured-review-text">{review.comment}</p>

        <div className="featured-review-footer">
          <div className="featured-review-author">
            {review.reviewer.profileImage && (
              <div className="featured-review-avatar">
                <Image
                  src={review.reviewer.profileImage}
                  alt={review.reviewer.name}
                  width={64}
                  height={64}
                  className="featured-review-avatar-image"
                />
              </div>
            )}
            <div className="featured-review-author-info">
              <h4 className="featured-review-author-name">{review.reviewer.name}</h4>
              <div className="featured-review-rating">
                {renderStars(review.rating)}
              </div>
              <span className="featured-review-date">{formatDate(review.date)}</span>
            </div>
          </div>

          <div className="featured-review-platform">
            <span className={`featured-review-badge featured-review-badge-${review.platform}`}>
              {review.platform.charAt(0).toUpperCase() + review.platform.slice(1)}
            </span>
            <a
              href={review.verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="featured-review-verification"
            >
              Verify on {review.platform.charAt(0).toUpperCase() + review.platform.slice(1)}
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
