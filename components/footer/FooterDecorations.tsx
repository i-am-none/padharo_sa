'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

export function FooterDecorations() {
  const lantern1Ref = useRef<HTMLDivElement>(null);
  const lantern2Ref = useRef<HTMLDivElement>(null);
  const lantern3Ref = useRef<HTMLDivElement>(null);
  const peacockRef = useRef<HTMLDivElement>(null);
  const camelRef = useRef<HTMLDivElement>(null);
  const elephantRef = useRef<HTMLDivElement>(null);
  const dancerLeftRef = useRef<HTMLDivElement>(null);
  const dancerRightRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Lantern swinging animations
    const lanterns = [lantern1Ref, lantern2Ref, lantern3Ref];
    lanterns.forEach((ref, index) => {
      if (ref.current) {
        gsap.to(ref.current, {
          rotation: 2,
          duration: 6 + index * 0.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          transformOrigin: 'top center',
        });
      }
    });

    // Camel floating animation
    if (camelRef.current) {
      gsap.to(camelRef.current, {
        y: -4,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }

    // Peacock fade and slide on scroll
    if (peacockRef.current) {
      gsap.fromTo(
        peacockRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 0.15,
          y: 0,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: peacockRef.current,
            start: 'top bottom',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    // Elephant parallax on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      if (!elephantRef.current || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      
      gsap.to(elephantRef.current, {
        x: x * 10,
        y: y * 5,
        duration: 1,
        ease: 'power2.out',
      });
    };

    if (containerRef.current) {
      containerRef.current.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Jaali Pattern - repeated, very low opacity */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url(https://res.cloudinary.com/zrqybpla/image/upload/v1784716136/jaali-svg.svg)',
          backgroundRepeat: 'repeat',
          backgroundSize: '300px auto',
        }} />
      </div>

      {/* Lanterns - hanging from top with different heights */}
      {/* Lantern 1 - Left */}
      <div
        ref={lantern1Ref}
        className="absolute top-0 left-[10%] hidden lg:block"
        style={{ height: '180px' }}
      >
        <div className="w-full h-0.5 bg-gradient-to-b from-amber-900/30 to-transparent mb-2" />
        <Image
          src="https://res.cloudinary.com/zrqybpla/image/upload/v1784716136/lantern-svg_p2xfzd.svg"
          alt="Decorative lantern"
          width={60}
          height={80}
          className="opacity-20"
          priority={false}
        />
      </div>

      {/* Lantern 2 - Center */}
      <div
        ref={lantern2Ref}
        className="absolute top-0 left-1/2 -translate-x-1/2"
        style={{ height: '220px' }}
      >
        <div className="w-full h-0.5 bg-gradient-to-b from-amber-900/30 to-transparent mb-2" />
        <Image
          src="https://res.cloudinary.com/zrqybpla/image/upload/v1784716136/lantern-svg_p2xfzd.svg"
          alt="Decorative lantern"
          width={70}
          height={90}
          className="opacity-25"
          priority={false}
        />
      </div>

      {/* Lantern 3 - Right */}
      <div
        ref={lantern3Ref}
        className="absolute top-0 right-[10%] hidden lg:block"
        style={{ height: '160px' }}
      >
        <div className="w-full h-0.5 bg-gradient-to-b from-amber-900/30 to-transparent mb-2" />
        <Image
          src="https://res.cloudinary.com/zrqybpla/image/upload/v1784716136/lantern-svg_p2xfzd.svg"
          alt="Decorative lantern"
          width={55}
          height={75}
          className="opacity-20"
          priority={false}
        />
      </div>


      {/* Elephant - Near center, slightly larger - Desktop only */}
      <div
        ref={elephantRef}
        className="absolute top-[30%] left-[55%] opacity-[0.08] hidden xl:block"
      >
        <Image
          src="https://res.cloudinary.com/zrqybpla/image/upload/v1784716136/elephant-svg_namgdc.svg"
          alt="Decorative elephant"
          width={350}
          height={280}
          priority={false}
        />
      </div>

      {/* Camel - Bottom left, facing inward - Desktop only */}
      <div
        ref={camelRef}
        className="absolute bottom-[15%] left-[5%] opacity-[0.1] hidden xl:block"
      >
        <Image
          src="https://res.cloudinary.com/zrqybpla/image/upload/v1784716138/camel-svg_lg5qp3.svg"
          alt="Decorative camel"
          width={200}
          height={150}
          className="scale-x-[-1]"
          priority={false}
        />
      </div>


      {/* Peacock - Near copyright, symmetrical - Always visible */}
      <div
        ref={peacockRef}
        className="absolute bottom-[20%] left-1/2 -translate-x-1/2 opacity-0"
      >
        <Image
          src="https://res.cloudinary.com/zrqybpla/image/upload/v1784716140/peacock-svg_vwgkdz.svg"
          alt="Decorative peacock"
          width={250}
          height={200}
          className="w-48 h-40 md:w-64 md:h-52"
          priority={false}
        />
      </div>
    </div>
  );
}
