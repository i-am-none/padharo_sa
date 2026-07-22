"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "framer-motion";
import type { GalleryContentModel, GalleryItem } from "@/features/marketing/gallery/gallery.types";
import { GalleryHero } from "@/features/marketing/gallery/gallery-hero";
import { GalleryLightbox } from "@/features/marketing/gallery/gallery-lightbox";
import { Footer } from "@/app/homepage/components/Footer";
import { GalleryCategoryCard } from "@/components/gallery/GalleryCategoryCard";
import { MasonryGallery } from "@/components/gallery/MasonryGallery";
import { SocialCard } from "@/components/gallery/SocialCard";
import galleryData from "@/content/gallery.json";

type GalleryClientProps = {
  content?: GalleryContentModel;
};

const categories = [
  { id: "featured", title: "Featured Moments", image: "/images/food/gal1.jpg" },
  { id: "culinary", title: "Culinary Stories", image: "/images/food/gal2.jpg" },
  { id: "ambience", title: "Dining Atmosphere", image: "/images/res/res1.jpg" },
  { id: "hospitality", title: "Hospitality Moments", image: "/images/food/chef.jpg" },
  { id: "culture", title: "Heritage & Culture", image: "/images/gallery/rajasthani-decor.jpg" },
  { id: "behind-scenes", title: "Behind the Scenes", image: "/images/gallery/plating-detail.jpg" },
];

export function GalleryClient({ content }: GalleryClientProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  // Load gallery data from JSON with type assertion
  const typedGallery: GalleryContentModel = {
    ...galleryData,
    items: galleryData.items.map((item: any): GalleryItem => ({
      ...item,
      type: item.type as "image" | "video",
      category: item.category as any,
    })),
  };

  const galleryContent = content || typedGallery;

  const handleItemClick = (item: GalleryItem, index: number) => {
    const actualIndex = galleryContent.items.findIndex((i) => i.id === item.id);
    setLightboxIndex(actualIndex);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    setLightboxIndex((prev) => (prev + 1) % galleryContent.items.length);
  };

  const handlePrevious = () => {
    setLightboxIndex((prev) => (prev - 1 + galleryContent.items.length) % galleryContent.items.length);
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sectionElement = sectionRef.current;
    if (!sectionElement || prefersReducedMotion) {
      return;
    }

    const context = gsap.context(() => {
      // Animate category cards on entrance
      const cards = sectionElement.querySelectorAll(".gallery-category-card");
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
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cards,
            start: "top 85%",
          },
        }
      );

      // Animate social cards
      const socialCards = sectionElement.querySelectorAll(".social-card");
      gsap.fromTo(
        socialCards,
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
            trigger: socialCards,
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
    <main className="gallery-page" ref={sectionRef}>
      <GalleryHero
        eyebrow={galleryContent.eyebrow}
        headline={galleryContent.headline}
        description={galleryContent.description}
        highlightWords={["glimpse", "world"]}
      />

      <div className="gallery-container">
        {/* Gallery Categories Section */}
        <section className="gallery-categories-section">
          <div className="gallery-categories-grid">
            {categories.map((category) => (
              <GalleryCategoryCard
                key={category.id}
                title={category.title}
                image={category.image}
              />
            ))}
          </div>
        </section>

        {/* Masonry Gallery Section */}
        <section className="gallery-masonry-section">
          <MasonryGallery
            items={galleryContent.items}
            onItemClick={handleItemClick}
          />
        </section>

        {/* Social Media Journey Section */}
        <section className="gallery-social-section">
          <div className="gallery-social-header">
            <h2 className="gallery-social-headline">Follow Our Journey</h2>
            <p className="gallery-social-subtitle">
              Continue exploring authentic content from our social platforms.
            </p>
          </div>
          <div className="gallery-social-grid">
            <SocialCard
              platform="instagram"
              name="Instagram"
              description="Explore our visual stories on Instagram"
              url={galleryContent.socialPlatforms.instagram.url}
              cta="Visit Instagram"
            />
            <SocialCard
              platform="facebook"
              name="Facebook"
              description="Connect with us on Facebook"
              url={galleryContent.socialPlatforms.facebook.url}
              cta="Visit Facebook"
            />
            <SocialCard
              platform="tiktok"
              name="TikTok"
              description="Watch our short videos"
              url={galleryContent.socialPlatforms.tiktok.url}
              cta="Watch Videos"
            />
          </div>
        </section>
      </div>

      <Footer />

      <GalleryLightbox
        items={galleryContent.items}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
    </main>
  );
}
