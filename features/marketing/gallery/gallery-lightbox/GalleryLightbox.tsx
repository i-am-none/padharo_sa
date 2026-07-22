"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { GalleryItem } from "../gallery.types";

type GalleryLightboxProps = {
  items: GalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
};

export function GalleryLightbox({ 
  items, 
  currentIndex, 
  isOpen, 
  onClose,
  onNext,
  onPrevious 
}: GalleryLightboxProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  const currentItem = items[currentIndex];

  useEffect(() => {
    // Handle keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowRight":
          onNext?.();
          break;
        case "ArrowLeft":
          onPrevious?.();
          break;
      }
    };

    // Prevent body scroll when lightbox is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, onNext, onPrevious]);

  if (!isOpen || !currentItem) return null;

  const handlePrevious = () => {
    setIsAnimating(true);
    onPrevious?.();
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handleNext = () => {
    setIsAnimating(true);
    onNext?.();
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <div className="gallery-lightbox" onClick={onClose}>
      <div className="gallery-lightbox-backdrop" />
      
      <div 
        className="gallery-lightbox-content"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          className="gallery-lightbox-close"
          onClick={onClose}
          aria-label="Close lightbox"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Navigation Buttons */}
        {items.length > 1 && (
          <>
            <button
              className="gallery-lightbox-nav gallery-lightbox-prev"
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              aria-label="Previous image"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <button
              className="gallery-lightbox-nav gallery-lightbox-next"
              onClick={handleNext}
              disabled={currentIndex === items.length - 1}
              aria-label="Next image"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </>
        )}

        {/* Media Content */}
        <div className={`gallery-lightbox-media ${isAnimating ? 'animating' : ''}`}>
          {currentItem.type === "image" ? (
            <Image
              src={currentItem.src}
              alt={currentItem.title}
              width={1200}
              height={800}
              className="gallery-lightbox-image"
              priority
            />
          ) : (
            <div className="gallery-lightbox-video">
              <video
                src={currentItem.src}
                poster={currentItem.poster}
                controls
                autoPlay
                muted
                className="gallery-lightbox-video-element"
              />
            </div>
          )}
        </div>

        {/* Caption */}
        <div className="gallery-lightbox-caption">
          <h3 className="gallery-lightbox-title">{currentItem.title}</h3>
          {currentItem.description && (
            <p className="gallery-lightbox-description">{currentItem.description}</p>
          )}
          <div className="gallery-lightbox-counter">
            {currentIndex + 1} / {items.length}
          </div>
        </div>
      </div>
    </div>
  );
}
