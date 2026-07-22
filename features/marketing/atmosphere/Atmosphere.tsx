"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";

import { Container } from "@/lib/components/Container";
import { getCloudinaryUrl, getCloudinaryVideoUrl } from "@/lib/cloudinary";

import type { AtmosphereContentModel } from "./atmosphere.types";

type AtmosphereProps = {
  content: AtmosphereContentModel;
};

export function Atmosphere({ content }: AtmosphereProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const mediaRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sectionElement = sectionRef.current;
    if (!sectionElement) {
      return;
    }

    const context = gsap.context(() => {
      const mediaElement = mediaRef.current;
      const eyebrow = sectionElement.querySelector("[data-atmosphere-eyebrow]");
      const copy = sectionElement.querySelector("[data-atmosphere-copy]");
      const quote = sectionElement.querySelector("[data-atmosphere-quote]");
      const words = sectionElement.querySelectorAll("[data-atmosphere-word]");

      if (prefersReducedMotion) {
        gsap.set([eyebrow, words, copy, quote], {
          clearProps: "all",
          opacity: 1,
          y: 0,
        });
        gsap.set(mediaElement, { opacity: 1 });
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
        .set(mediaElement, { opacity: 0 })
        .to(mediaElement, { opacity: 1, duration: 0.8 }, 0)
        .to(eyebrow, { opacity: 1, y: 0, duration: 0.5 }, 0.3)
        .to(
          words,
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "expo.out",
            stagger: 0.08,
          },
          0.45,
        )
        .to(copy, { opacity: 1, y: 0, duration: 0.65 }, 1.1)
        .to(quote, { opacity: 1, duration: 0.6 }, 1.25);

      const scrollTimeline = gsap.timeline();
      scrollTimeline.to(mediaElement, {
        yPercent: 10,
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
  }, [prefersReducedMotion]);

  return (
    <section
      aria-label="Atmosphere"
      className="section-shell"
      id={content.id}
      ref={sectionRef}
    >
      <Container>
        <div className="section-layout section-layout--image-first">
          <div className="section-media" ref={mediaRef}>
            <AtmosphereMediaInline media={content.media} />
          </div>
          <div className="section-content">
            <p className="text-atmosphere-eyebrow" data-atmosphere-eyebrow>
              {content.eyebrow}
            </p>
            <h2 className="text-atmosphere-headline text-width-heading">
              {content.headline.split(" ").map((word, index) => (
                <span key={index} className="atmosphere-word" data-atmosphere-word>
                  {word}
                </span>
              ))}
            </h2>
            <p className="text-atmosphere-copy text-width-body" data-atmosphere-copy>
              {content.copy}
            </p>
            {content.quote ? (
              <blockquote className="text-atmosphere-quote text-width-narrow" data-atmosphere-quote>
                {content.quote}
              </blockquote>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}

function AtmosphereMediaInline({ media }: { media: any }) {
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
        className="section-media-video"
        poster={getCloudinaryUrl(media.video.poster)}
      >
        {media.video.sources.map((source: any, index: number) => (
          <source key={index} src={getCloudinaryVideoUrl(source.src)} type={source.type} />
        ))}
      </video>
    );
  }

  return null;
}
