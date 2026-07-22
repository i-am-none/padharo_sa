import { useEffect, useRef, useState, type ForwardedRef } from "react";

type ReservationHeroMediaProps = {
  poster: string;
  sources: Array<{
    src: string;
    type: string;
  }>;
  overlayRef: React.RefObject<HTMLDivElement | null>;
  ref?: ForwardedRef<HTMLDivElement>;
};

export function ReservationHeroMedia({ poster, sources, overlayRef, ref }: ReservationHeroMediaProps) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleVideoEnd = () => {
      setCurrentVideoIndex((prev) => (prev + 1) % sources.length);
    };

    video.addEventListener("ended", handleVideoEnd);
    return () => video.removeEventListener("ended", handleVideoEnd);
  }, [sources.length]);

  useEffect(() => {
    const video = videoRef.current;
    if (video && sources[currentVideoIndex]) {
      video.load();
      video.play().catch(console.error);
    }
  }, [currentVideoIndex, sources]);

  return (
    <div className="hero-media" ref={ref}>
      <div className="hero-media-frame">
        <video
          ref={videoRef}
          autoPlay
          className="hero-video"
          muted
          playsInline
          poster={poster}
          key={sources[currentVideoIndex]?.src}
        >
          {sources[currentVideoIndex] && (
            <source src={sources[currentVideoIndex].src} type={sources[currentVideoIndex].type} />
          )}
        </video>
        <div className="hero-overlay" ref={overlayRef}>
          <div className="hero-overlay-gradient" />
          <div className="hero-overlay-vignette" />
          <div className="hero-overlay-ambient" />
        </div>
      </div>
    </div>
  );
}
