'use client';

import { useRef, useEffect } from 'react';

interface VideoBackgroundProps {
  poster: string;
  sources: ReadonlyArray<{
    src: string;
    type: string;
  }>;
  className?: string;
}

export function VideoBackground({ poster, sources, className = '' }: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Attempt to play video
    const playVideo = async () => {
      try {
        await video.play();
      } catch (error) {
        console.log('Video autoplay failed:', error);
      }
    };

    playVideo();
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        {sources.map((source, index) => (
          <source key={index} src={source.src} type={source.type} />
        ))}
      </video>
      {/* Fallback image if video fails */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${poster})` }}
      />
    </div>
  );
}
