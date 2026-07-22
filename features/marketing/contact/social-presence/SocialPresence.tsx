"use client";

import { gsap } from "gsap";
import { useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";
import { Image, Users, Music, Star, MapPin } from "lucide-react";

import type { SocialPresenceContentModel } from "./social-presence.types";
import { Container } from "@/lib/components/Container";

type SocialPresenceProps = {
  content: SocialPresenceContentModel;
};

const iconMap = {
  Instagram: Image,
  Facebook: Users,
  Music,
  Star,
  MapPin,
};

export function SocialPresence({ content }: SocialPresenceProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const sectionElement = sectionRef.current;
    if (!sectionElement) return;

    const context = gsap.context(() => {
      const headline = sectionElement.querySelector("[data-social-headline]");
      const cards = sectionElement.querySelectorAll("[data-social-card]");

      if (prefersReducedMotion) {
        gsap.set([headline, cards], { clearProps: "all", opacity: 1, y: 0 });
        return;
      }

      const timeline = gsap.timeline({
        defaults: {
          ease: "power2.out",
        },
      });

      timeline
        .set(headline, { opacity: 0, y: 20 })
        .set(cards, { opacity: 0, y: 24 })
        .to(headline, { opacity: 1, y: 0, duration: 0.55 }, 0)
        .to(
          cards,
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.08,
          },
          0.2,
        );
    }, sectionElement);

    return () => {
      context.revert();
    };
  }, [content, prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-20 lg:py-24 bg-[var(--bg-base)]"
      id={content.id}
    >
      <Container variant="wide">
        <h2
          data-social-headline
          className="text-2xl md:text-3xl font-display font-semibold text-[var(--text-primary)] mb-8 text-center"
        >
          {content.headline}
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {content.platforms.map((platform) => {
            const Icon = iconMap[platform.icon as keyof typeof iconMap];
            return (
              <a
                key={platform.id}
                data-social-card
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-5 py-3 bg-[var(--bg-surface)] border border-[var(--border-soft)] rounded-sm hover:border-[var(--accent-primary)] transition-colors duration-300 focus-ring"
              >
                <Icon className="w-5 h-5 text-[var(--text-secondary)] group-hover:text-[var(--accent-primary)] transition-colors duration-300" />
                <span className="text-sm text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors duration-300">
                  {platform.handle}
                </span>
              </a>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
