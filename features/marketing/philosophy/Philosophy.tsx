"use client";

import { gsap } from "gsap";
import { useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";

import { Container } from "@/lib/components/Container";
import { getCloudinaryUrl, getCloudinaryVideoUrl } from "@/lib/cloudinary";

import type { PhilosophyContentModel } from "./philosophy.types";

type PhilosophyProps = {
  content: PhilosophyContentModel;
};

export function Philosophy({ content }: PhilosophyProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const mediaRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const sectionElement = sectionRef.current;
    if (!sectionElement) {
      return;
    }

    const context = gsap.context(() => {
      const mediaElement = mediaRef.current;
      const eyebrow = sectionElement.querySelector("[data-philosophy-eyebrow]");
      const headline = sectionElement.querySelector(".philosophy-headline");
      const body = sectionElement.querySelector("[data-philosophy-body]");
      const quote = sectionElement.querySelector("[data-philosophy-quote]");
      const principles = sectionElement.querySelector("[data-philosophy-principles]");
      const principleItems = sectionElement.querySelectorAll("[data-philosophy-principle]");

      if (prefersReducedMotion) {
        gsap.set([eyebrow, headline, body, quote, principles, principleItems], {
          clearProps: "all",
          opacity: 1,
          y: 0,
        });
        gsap.set(mediaElement, { opacity: 1, y: 0 });
        return;
      }

      const timeline = gsap.timeline({
        defaults: {
          ease: "power2.out",
        },
      });

      timeline
        .set(mediaElement, { opacity: 0, y: 30 })
        .set([eyebrow, headline, body, quote, principles], { opacity: 0, y: 20 })
        .set(principleItems, { opacity: 0, y: 20 })
        .to(mediaElement, { opacity: 1, y: 0, duration: 0.8 }, 0)
        .to(eyebrow, { opacity: 1, y: 0, duration: 0.5 }, 0.2)
        .to(headline, { opacity: 1, y: 0, duration: 0.6 }, 0.3)
        .to(body, { opacity: 1, y: 0, duration: 0.6 }, 0.5)
        .to(
          principleItems,
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.08,
          },
          0.6,
        )
        .to(quote, { opacity: 1, duration: 0.5 }, 0.7);
    }, sectionElement);

    return () => {
      context.revert();
    };
  }, [prefersReducedMotion]);

  return (
    <section
      aria-label="Our Philosophy"
      className="section-shell"
      id={content.id}
      ref={sectionRef}
    >
      <Container>
        <div className="section-layout section-layout--text-first">
          <div className="section-media" ref={mediaRef}>
            <PhilosophyMediaInline media={content.media} />
          </div>
          <div className="section-content">
            <p className="philosophy-eyebrow" data-philosophy-eyebrow>
              {content.eyebrow}
            </p>
            <h2 className="philosophy-headline text-width-heading">
              {content.headline}
            </h2>
            <div className="philosophy-body text-width-body" data-philosophy-body>
              {content.body.map((paragraph, index) => (
                <p key={index} className="philosophy-paragraph">
                  {paragraph}
                </p>
              ))}
            </div>
            {content.principles && (
              <ul className="philosophy-principles text-width-body" data-philosophy-principles>
                {content.principles.map((principle, index) => (
                  <li key={index} className="philosophy-principle" data-philosophy-principle>
                    <h3 className="philosophy-principle-title">{principle.title}</h3>
                    <p className="philosophy-principle-description">{principle.description}</p>
                  </li>
                ))}
              </ul>
            )}
            {content.quote && (
              <blockquote className="philosophy-quote text-width-narrow" data-philosophy-quote>
                <p className="philosophy-quote-text">{content.quote}</p>
              </blockquote>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

function PhilosophyMediaInline({ media }: { media: any }) {
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
        autoPlay
        loop
        muted
        playsInline
        poster={getCloudinaryUrl(media.video.poster)}
        className="section-media-video"
      >
        {media.video.sources.map((source: any, index: number) => (
          <source key={index} src={getCloudinaryVideoUrl(source.src)} type={source.type} />
        ))}
      </video>
    );
  }

  return null;
}
