'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function FooterBackground() {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!glowRef.current) return;

    // Very slow breathing animation for background glow
    gsap.to(glowRef.current, {
      opacity: 0.22,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  }, []);

  return (
    <div
      ref={backgroundRef}
      className="absolute inset-0 overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse at 50% 0%, rgba(36, 24, 19, 0.8) 0%, transparent 50%),
          radial-gradient(ellipse at 0% 100%, rgba(26, 18, 13, 0.6) 0%, transparent 40%),
          radial-gradient(ellipse at 100% 100%, rgba(26, 18, 13, 0.6) 0%, transparent 40%),
          linear-gradient(180deg, #120C09 0%, #1A120D 50%, #241813 100%)
        `,
      }}
    >
      {/* Soft brown glow */}
      <div
        ref={glowRef}
        className="absolute inset-0 opacity-15"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(139, 90, 43, 0.15) 0%, transparent 70%)',
        }}
      />

      {/* Vignette effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0, 0, 0, 0.4) 100%)',
        }}
      />

      {/* Subtle paper texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
