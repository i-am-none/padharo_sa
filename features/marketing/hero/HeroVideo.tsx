import { useEffect, useRef, useState } from "react";
import type { HeroVideoSource } from "./hero.types";

type HeroVideoProps = {
  poster: string;
  sources: HeroVideoSource[];
};

export function HeroVideo({ poster, sources }: HeroVideoProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (sources.length <= 1) return;

    const transitionDuration = 8000; // 8 seconds per video
    const crossfadeDuration = 1500; // 1.5s crossfade following motion language

    intervalRef.current = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % sources.length);
        setIsTransitioning(false);
      }, crossfadeDuration);
    }, transitionDuration);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [sources.length]);

  const setVideoRef = (index: number) => (el: HTMLVideoElement | null) => {
    videoRefs.current[index] = el;
  };

  return (
    <div className="hero-video-frame relative h-full w-full overflow-hidden" style={{ backgroundImage: `url(${poster})` }}>
      {sources.map((source, index) => (
        <video
          key={source.src}
          ref={setVideoRef(index)}
          aria-label={`Ambient views of Padharo Sa - Video ${index + 1}`}
          autoPlay
          className={`hero-video absolute inset-0 h-full w-full object-cover transition-opacity duration-[1500ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          loop
          muted
          playsInline
          poster={poster}
          preload="metadata"
        >
          <source src={source.src} type={source.type} />
        </video>
      ))}
    </div>
  );
}
