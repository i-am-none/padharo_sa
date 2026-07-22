"use client";

import { gsap } from "gsap";
import { useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";
import { MessageCircle, Send, Phone, Mail } from "lucide-react";

import type { MessagingPlatformsContentModel } from "./messaging-platforms.types";
import { Container } from "@/lib/components/Container";

type MessagingPlatformsProps = {
  content: MessagingPlatformsContentModel;
};

const iconMap = {
  MessageCircle,
  Send,
  Phone,
  Mail,
};

export function MessagingPlatforms({ content }: MessagingPlatformsProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const sectionElement = sectionRef.current;
    if (!sectionElement) return;

    const context = gsap.context(() => {
      const headline = sectionElement.querySelector("[data-messaging-headline]");
      const cards = sectionElement.querySelectorAll("[data-messaging-card]");

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
        .set(cards, { opacity: 0, y: 32 })
        .to(headline, { opacity: 1, y: 0, duration: 0.55 }, 0)
        .to(
          cards,
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.1,
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
      className="py-20 md:py-28 lg:py-36 bg-[var(--bg-secondary)]"
      id={content.id}
    >
      <Container variant="wide">
        <h2
          data-messaging-headline
          className="text-3xl md:text-4xl font-display font-semibold text-[var(--text-primary)] mb-12 text-center"
        >
          {content.headline}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.platforms.map((platform) => {
            const Icon = iconMap[platform.icon as keyof typeof iconMap];
            return (
              <a
                key={platform.id}
                data-messaging-card
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[var(--bg-surface)] border border-[var(--border-soft)] rounded-lg p-6 hover:border-[var(--accent-primary)] transition-colors duration-300 focus-ring"
              >
                <div className="w-12 h-12 rounded-full bg-[var(--bg-elevated)] flex items-center justify-center mb-4 group-hover:bg-[var(--accent-primary)] transition-colors duration-300">
                  <Icon className="w-6 h-6 text-[var(--accent-primary)] group-hover:text-[var(--bg-base)] transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-medium text-[var(--text-primary)] mb-2">
                  {platform.name}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">
                  {platform.description}
                </p>
                <span className="inline-flex items-center text-sm font-medium text-[var(--accent-primary)] group-hover:text-[var(--accent-hover)] transition-colors duration-300">
                  {platform.cta}
                </span>
              </a>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
