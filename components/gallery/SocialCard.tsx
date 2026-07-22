"use client";

import { motion } from "framer-motion";
import { Music } from "lucide-react";
import Link from "next/link";

type SocialCardProps = {
  platform: "instagram" | "facebook" | "tiktok";
  name: string;
  description: string;
  url: string;
  cta: string;
};

const InstagramIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const icons = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  tiktok: () => <Music size={32} />,
};

export function SocialCard({ platform, name, description, url, cta }: SocialCardProps) {
  const Icon = icons[platform];

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="social-card"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
    >
      <div className="social-card-icon-wrapper">
        <Icon />
      </div>
      <h3 className="social-card-name">{name}</h3>
      <p className="social-card-description">{description}</p>
      <span className="social-card-cta">{cta}</span>
    </motion.a>
  );
}
