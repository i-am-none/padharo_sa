"use client";

import { Recommendation } from "./menu.types";

interface RecommendationCardProps {
  item: Recommendation;
}

export function RecommendationCard({ item }: RecommendationCardProps) {
  return (
    <div className="recommendation-card rounded-3xl bg-bg-surface p-6">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent-primary/10 text-accent-primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </div>
      <h3 className="text-heading mb-2 font-display text-lg">
        Chef's Selection
      </h3>
      <p className="text-text-secondary text-sm">{item.reason}</p>
    </div>
  );
}
