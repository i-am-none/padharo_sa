"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useRef } from "react";

import { Container } from "@/lib/components/Container";
import { getCloudinaryUrl, getCloudinaryVideoUrl } from "@/lib/cloudinary";

import type { CuisineContentModel } from "./cuisine.types";
import { CuisineDish } from "./CuisineDish";

type CuisineProps = {
  content: CuisineContentModel;
};

export function Cuisine({ content }: CuisineProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const dishesRef = useRef<HTMLDivElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const mediaRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const headlineWords = useMemo(() => content.headline.split(" "), [content.headline]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sectionElement = sectionRef.current;
    if (!sectionElement) {
      return;
    }

    const context = gsap.context(() => {
      const dishesElement = dishesRef.current;
      const ctaElement = ctaRef.current;
      const mediaElement = mediaRef.current;
      const eyebrow = sectionElement.querySelector("[data-cuisine-eyebrow]");
      const copy = sectionElement.querySelector("[data-cuisine-copy]");
      const quote = sectionElement.querySelector("[data-cuisine-quote]");
      const words = sectionElement.querySelectorAll("[data-cuisine-word]");
      const dishes = sectionElement.querySelectorAll("[data-cuisine-dish]");
      const ingredients = sectionElement.querySelectorAll("[data-cuisine-ingredients]");

      if (prefersReducedMotion) {
        gsap.set([eyebrow, words, copy, quote, dishes, ingredients, ctaElement, mediaElement], {
          clearProps: "all",
          opacity: 1,
          y: 0,
        });
        return;
      }

      const timeline = gsap.timeline({
        defaults: {
          ease: "power2.out",
        },
      });

      timeline
        .set([eyebrow, copy, quote], { opacity: 0, y: 16 })
        .set(words, { opacity: 0, y: 24 })
        .set(dishes, { opacity: 0, y: 32 })
        .set(ingredients, { opacity: 0, y: 12 })
        .set(ctaElement, { opacity: 0, y: 16 })
        .set(mediaElement, { opacity: 0, scale: 0.95 })
        .to(eyebrow, { opacity: 1, y: 0, duration: 0.5 }, 0.2)
        .to(
          words,
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "expo.out",
            stagger: 0.08,
          },
          0.35,
        )
        .to(copy, { opacity: 1, y: 0, duration: 0.65 }, 0.9)
        .to(mediaElement, { opacity: 1, scale: 1, duration: 0.8 }, 0.9)
        .to(
          dishes,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.15,
          },
          1.05,
        )
        .to(
          ingredients,
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
          },
          1.4,
        )
        .to(quote, { opacity: 1, duration: 0.6 }, 1.6)
        .to(ctaElement, { opacity: 1, y: 0, duration: 0.7 }, 1.75);

      const scrollTimeline = gsap.timeline();
      scrollTimeline.to(dishesElement, {
        yPercent: -5,
        ease: "none",
      });

      ScrollTrigger.create({
        trigger: sectionElement,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        animation: scrollTimeline,
      });
    }, sectionElement);

    return () => {
      context.revert();
    };
  }, [headlineWords, prefersReducedMotion]);

  return (
    <section
      aria-label="Signature Cuisine"
      className="section-shell"
      id={content.id}
      ref={sectionRef}
    >
      <Container>
        <div className="section-layout section-layout--text-first">
          <div className="section-content">
            <p className="cuisine-eyebrow" data-cuisine-eyebrow>
              {content.eyebrow}
            </p>
            <h2 className="cuisine-headline text-width-heading">
              {headlineWords.map((word, index) => (
                <span key={index} className="cuisine-headline-word" data-cuisine-word>
                  {word}
                </span>
              ))}
            </h2>
            <p className="cuisine-copy text-width-body" data-cuisine-copy>
              {content.copy}
            </p>
            {content.quote && (
              <blockquote className="cuisine-quote text-width-narrow" data-cuisine-quote>
                <p className="cuisine-quote-text">{content.quote}</p>
              </blockquote>
            )}
          </div>
          {content.media && (
            <div className="section-media" ref={mediaRef}>
              <CuisineMediaInline media={content.media} />
            </div>
          )}
        </div>
      </Container>
      
      <div className="cuisine-dishes" ref={dishesRef}>
        <Container>
          <div className="cuisine-dishes-grid">
            {content.dishes.map((dish, index) => (
              <CuisineDish key={dish.id} dish={dish} index={index} />
            ))}
          </div>
        </Container>
      </div>

      <div className="cuisine-cta-wrapper" ref={ctaRef}>
        <Container>
          <CuisineCTA label={content.cta.label} description={content.cta.description} href={content.cta.href} />
        </Container>
      </div>
    </section>
  );
}

function CuisineMediaInline({ media }: { media: any }) {
  if (media.type === "image" && media.image) {
    return (
      <Image
        src={getCloudinaryUrl(media.image.src)}
        alt={media.image.alt}
        width={media.image.width}
        height={media.image.height}
        className="section-media-image"
        priority
      />
    );
  }

  if (media.type === "video" && media.video) {
    return (
      <video
        poster={getCloudinaryUrl(media.video.poster)}
        className="section-media-video"
        autoPlay
        loop
        muted
        playsInline
      >
        {media.video.sources.map((source: any, index: number) => (
          <source key={index} src={getCloudinaryVideoUrl(source.src)} type={source.type} />
        ))}
      </video>
    );
  }

  return null;
}

function CuisineCTA({ label, description, href }: { label: string; description: string; href: string }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="cuisine-cta" data-cuisine-cta>
      <div className="cuisine-cta-content">
        <h3 className="cuisine-cta-headline">{label}</h3>
        <p className="cuisine-cta-description">{description}</p>
        <Link
          href={href}
          className="cuisine-cta-button"
          prefetch={false}
        >
          <motion.span
            className="cuisine-cta-button-text"
            whileHover={!prefersReducedMotion ? { x: 4 } : undefined}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            Explore the Complete Menu
          </motion.span>
          <ArrowRight className="cuisine-cta-button-icon" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
