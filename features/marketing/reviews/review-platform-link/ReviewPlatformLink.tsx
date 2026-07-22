"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

type ReviewPlatformLinkProps = {
  platform: string;
  url: string;
  label?: string;
};

export function ReviewPlatformLink({ platform, url, label }: ReviewPlatformLinkProps) {
  const defaultLabel = label || `View on ${platform.charAt(0).toUpperCase() + platform.slice(1)}`;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="review-platform-link"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="review-platform-link-text">{defaultLabel}</span>
      <ExternalLink className="review-platform-link-icon" size={16} />
    </motion.a>
  );
}
