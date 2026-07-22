"use client";

import { gsap } from "gsap";
import { useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ExternalLink, Navigation } from "lucide-react";

import type { MapSectionContentModel } from "./map-section.types";
import { Container } from "@/lib/components/Container";

type MapSectionProps = {
  content: MapSectionContentModel;
};

export function MapSection({ content }: MapSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const sectionElement = sectionRef.current;
    if (!sectionElement) return;

    const context = gsap.context(() => {
      const headline = sectionElement.querySelector("[data-map-headline]");
      const mapContainer = sectionElement.querySelector("[data-map-container]");
      const buttons = sectionElement.querySelectorAll("[data-map-button]");

      if (prefersReducedMotion) {
        gsap.set([headline, mapContainer, buttons], { clearProps: "all", opacity: 1, y: 0 });
        return;
      }

      const timeline = gsap.timeline({
        defaults: {
          ease: "power2.out",
        },
      });

      timeline
        .set(headline, { opacity: 0, y: 20 })
        .set(mapContainer, { opacity: 0, y: 32 })
        .set(buttons, { opacity: 0, y: 16 })
        .to(headline, { opacity: 1, y: 0, duration: 0.55 }, 0)
        .to(mapContainer, { opacity: 1, y: 0, duration: 0.65 }, 0.2)
        .to(
          buttons,
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            stagger: 0.08,
          },
          0.4,
        );
    }, sectionElement);

    return () => {
      context.revert();
    };
  }, [content, prefersReducedMotion]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsLoaded(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 },
    );

    const mapElement = mapRef.current;
    if (mapElement) {
      observer.observe(mapElement);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 lg:py-36 bg-[var(--bg-secondary)]"
      id={content.id}
    >
      <Container variant="wide">
        <h2
          data-map-headline
          className="text-3xl md:text-4xl font-display font-semibold text-[var(--text-primary)] mb-12 text-center"
        >
          {content.headline}
        </h2>

        <div
          ref={mapRef}
          data-map-container
          className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden border border-[var(--border-soft)]"
        >
          {isLoaded ? (
            <iframe
              src={content.map.embedUrl}
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps - Jain's Little India Location"
            />
          ) : (
            <div className="absolute inset-0 bg-[var(--bg-surface)] flex items-center justify-center">
              <p className="text-[var(--text-muted)]">Loading map...</p>
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <a
            data-map-button
            href={content.map.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--accent-primary)] text-[var(--bg-base)] font-medium rounded-sm hover:bg-[var(--accent-hover)] transition-colors duration-300 focus-ring"
          >
            <Navigation className="w-5 h-5" />
            Get Directions
          </a>
          <a
            data-map-button
            href={content.map.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--bg-surface)] border border-[var(--border-soft)] text-[var(--text-primary)] font-medium rounded-sm hover:border-[var(--accent-primary)] transition-colors duration-300 focus-ring"
          >
            <ExternalLink className="w-5 h-5" />
            Open in Google Maps
          </a>
        </div>
      </Container>
    </section>
  );
}
