'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface HeroAnimationProps {
  onComplete?: () => void;
}

export function HeroAnimation({ onComplete }: HeroAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Kill existing timeline if component re-renders
    if (timelineRef.current) {
      timelineRef.current.kill();
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete,
        defaults: {
          ease: 'power2.out',
        },
      });

      timelineRef.current = tl;

      // 1. Background video/image fades from black
      tl.from('.hero-video-frame', {
        opacity: 0,
        duration: 1.5,
        ease: 'power1.inOut',
      });

      // 2. Hero overlay opacity increases
      tl.from(
        '.hero-overlay',
        {
          opacity: 0,
          duration: 1,
        },
        '-=1'
      );

      // 3. Small label appears
      tl.from(
        '.hero-eyebrow',
        {
          y: 20,
          opacity: 0,
          duration: 0.8,
        },
        '-=0.5'
      );

      // 4. Main heading reveals line by line
      tl.from(
        '.hero-headline',
        {
          y: 40,
          opacity: 0,
          duration: 1.2,
          ease: 'power3.out',
        },
        '-=0.4'
      );

      // 5. Description fades upward
      tl.from(
        '.hero-copy',
        {
          y: 30,
          opacity: 0,
          duration: 1,
        },
        '-=0.6'
      );

      // 6. CTA buttons appear
      tl.from(
        '.hero-actions > *',
        {
          y: 20,
          opacity: 0,
          duration: 0.6,
          stagger: 0.15,
        },
        '-=0.5'
      );

      // 7. Scroll indicator animates
      tl.from(
        '.hero-scroll-indicator',
        {
          y: -20,
          opacity: 0,
          duration: 0.8,
        },
        '-=0.3'
      );
    }, containerRef);

    return () => {
      ctx.revert();
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, [onComplete]);

  return <div ref={containerRef} className="contents" />;
}
