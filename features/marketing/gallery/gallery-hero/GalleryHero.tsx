"use client";

import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { getCloudinaryVideoUrl } from "@/lib/cloudinary";

type GalleryHeroProps = {
  eyebrow: string;
  headline: string;
  description: string;
  heroImage?: string;
  highlightWords?: string[];
};

export function GalleryHero({ eyebrow, headline, description, heroImage, highlightWords = [] }: GalleryHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = async () => {
      try {
        await video.play();
      } catch (error) {
        console.log('Video autoplay failed:', error);
      }
    };

    playVideo();
  }, []);

  const headlineWords = headline.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 0.61, 0.36, 1] as const,
      },
    },
  };

  return (
    <section className="gallery-hero relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src={getCloudinaryVideoUrl("Lavender-Fizz_qj869w.webm")} type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>
      <div className="gallery-hero-container relative z-10">
        <motion.div
          className="gallery-hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {eyebrow && (
            <motion.span className="gallery-hero-eyebrow" variants={itemVariants}>
              {eyebrow}
            </motion.span>
          )}
          <motion.h2 className="gallery-hero-headline" variants={itemVariants}>
            {headlineWords.map((word, index) => {
              const isHighlighted = highlightWords.some(hw => word.toLowerCase().includes(hw.toLowerCase()));
              return (
                <span
                  key={`${word}-${index}`}
                  className={isHighlighted ? 'highlight-yellow' : ''}
                >
                  {word}
                  {index < headlineWords.length - 1 ? "\u00A0" : ""}
                </span>
              );
            })}
          </motion.h2>
          <motion.p className="gallery-hero-description" variants={itemVariants}>
            {description}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
