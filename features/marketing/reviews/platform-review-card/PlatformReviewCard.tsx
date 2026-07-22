"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import type { Review } from "../reviews.types";

type PlatformReviewCardProps = {
  review: Review;
};

export function PlatformReviewCard({ review }: PlatformReviewCardProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`platform-review-star ${index < Math.floor(rating) ? "platform-review-star-filled" : "platform-review-star-empty"}`}
        size={16}
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
      className="platform-review-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="platform-review-header">
        <div className="platform-review-author">
          {review.reviewer.profileImage && (
            <div className="platform-review-avatar">
              <Image
                src={review.reviewer.profileImage}
                alt={review.reviewer.name}
                width={48}
                height={48}
                className="platform-review-avatar-image"
              />
            </div>
          )}
          <div className="platform-review-author-info">
            <h4 className="platform-review-author-name">{review.reviewer.name}</h4>
            <div className="platform-review-rating">
              {renderStars(review.rating)}
            </div>
          </div>
        </div>
        <span className="platform-review-date">{formatDate(review.date)}</span>
      </div>
      
      <div className="platform-review-badge">
        <span className={`platform-review-badge-label platform-review-badge-${review.platform}`}>
          {review.platform.charAt(0).toUpperCase() + review.platform.slice(1)}
        </span>
      </div>

      <p className="platform-review-text">{review.comment}</p>

      <a
        href={review.verificationUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="platform-review-verification"
      >
        View on {review.platform.charAt(0).toUpperCase() + review.platform.slice(1)}
      </a>
    </motion.div>
  );
}
