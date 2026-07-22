"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "framer-motion";
import type { ReviewsContentModel } from "./reviews.types";
import { ReviewHero } from "./review-hero";
import { RatingSummary } from "./rating-summary";
import { PlatformReviewCard } from "./platform-review-card";
import { FeaturedReview } from "./featured-review";
import { FeedbackForm } from "./feedback-form";
import { RestaurantPhilosophy } from "./restaurant-philosophy";
import { Footer } from "@/app/homepage/components/Footer";
import reviewsData from "@/content/reviews.json";

type ReviewsProps = {
  content?: ReviewsContentModel;
};

export function Reviews({ content }: ReviewsProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const defaultContent: ReviewsContentModel = {
    id: "reviews",
    eyebrow: "Guest Voices",
    headline: "What our guests say about their experience",
    description: "Every review represents a real guest journey. Discover authentic experiences from diners who have explored Rajasthan's culinary heritage at our table.",
    platforms: reviewsData.platforms,
    googleReviews: reviewsData.googleReviews.map(review => ({
      ...review,
      platform: review.platform as "google" | "tripadvisor" | "direct",
    })),
    tripadvisorReviews: reviewsData.tripadvisorReviews.map(review => ({
      ...review,
      platform: review.platform as "google" | "tripadvisor" | "direct",
    })),
    featuredReviews: reviewsData.featuredReviews.map(review => ({
      ...review,
      platform: review.platform as "google" | "tripadvisor" | "direct",
    })),
  };

  const reviewsContent = content || defaultContent;

  // Combine all reviews for the Online Reviews section
  const allReviews = [...reviewsContent.googleReviews, ...reviewsContent.tripadvisorReviews];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sectionElement = sectionRef.current;
    if (!sectionElement || prefersReducedMotion) {
      return;
    }

    const context = gsap.context(() => {
      // Animate review cards on entrance
      const cards = sectionElement.querySelectorAll("[data-review-card]");
      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cards,
            start: "top 85%",
          },
        }
      );

      // Animate section titles
      const titles = sectionElement.querySelectorAll(".reviews-section-title");
      gsap.fromTo(
        titles,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titles,
            start: "top 85%",
          },
        }
      );
    }, sectionElement);

    return () => {
      context.revert();
    };
  }, [prefersReducedMotion]);

  return (
    <section className="reviews-page" ref={sectionRef}>
      <ReviewHero
        eyebrow={reviewsContent.eyebrow}
        headline={reviewsContent.headline}
        description={reviewsContent.description}
        highlightWords={["guests", "experience"]}
      />

      <div className="reviews-container">
        <section className="reviews-rating-summary">
          <h2 className="reviews-section-title">Overall Ratings</h2>
          <RatingSummary
            google={reviewsContent.platforms.google}
            tripadvisor={reviewsContent.platforms.tripadvisor}
          />
        </section>

        {reviewsContent.featuredReviews.length > 0 && (
          <section className="reviews-featured">
            <h2 className="reviews-section-title">Featured Guest Experiences</h2>
            <div className="reviews-featured-grid">
              {reviewsContent.featuredReviews.map((review) => (
                <FeaturedReview key={review.id} review={review} />
              ))}
            </div>
          </section>
        )}

        {allReviews.length > 0 && (
          <section className="reviews-online">
            <h2 className="reviews-section-title">Online Reviews</h2>
            <div className="reviews-grid">
              {allReviews.map((review) => (
                <PlatformReviewCard key={review.id} review={review} />
              ))}
            </div>
          </section>
        )}

        <RestaurantPhilosophy />

        <section className="reviews-feedback">
          <h2 className="reviews-section-title">Share Your Experience</h2>
          <FeedbackForm />
        </section>
      </div>

      <Footer />
    </section>
  );
}
