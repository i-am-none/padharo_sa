'use client';

import { homeMedia } from '@/data/homeMedia';
import { VideoBackground } from './VideoBackground';
import { HeroAnimation } from './HeroAnimation';
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="hero-shell">
      <HeroAnimation />

      {/* Video Background */}
      <div className="hero-media">
        <div className="hero-video-frame">
          <VideoBackground
            poster={homeMedia.hero.video.poster}
            sources={homeMedia.hero.video.sources}
          />
        </div>
      </div>

      {/* Cinematic Overlays */}
      <div className="hero-overlay">
        <div className="hero-overlay-gradient" />
        <div className="hero-overlay-vignette" />
        <div className="hero-overlay-ambient" />
      </div>

      {/* Hero Content */}
      <div className="hero-content">
        <div className="layout-container-content">
          <div className="hero-content-frame">
            {/* Small Label */}
            <span className="hero-eyebrow text-hero-eyebrow">
              Authentic Rajasthan
            </span>

            {/* Main Heading */}
            <h1 className="hero-headline text-hero-headline">
              Experience the Soul of Rajasthan.
            </h1>

            {/* Supporting Text */}
            <p className="hero-copy text-hero-copy">
              Warm light, royal hospitality, and crafted cuisine invite you into an
              evening shaped by story, heritage, and celebration.
            </p>

            {/* CTA Buttons */}
            <div className="hero-actions">
              <motion.a
                href="#reservation"
                className="inline-flex h-12 items-center justify-center rounded-full bg-accent-primary px-8 text-cta font-semibold text-bg-base transition-colors hover:bg-accent-hover focus-ring"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                Reserve Your Table
              </motion.a>
              <motion.a
                href="#experience"
                className="inline-flex h-12 items-center justify-center rounded-full border border-text-primary px-8 text-cta font-semibold text-text-primary transition-colors hover:bg-text-primary hover:text-bg-base focus-ring"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                Discover More
              </motion.a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#hospitality"
        className="hero-scroll-indicator"
        aria-label="Scroll to continue"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-hero-scroll">Scroll</span>
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.a>
    </section>
  );
}
