'use client';

import { useRef, useEffect } from 'react';
import { homeMedia } from '@/data/homeMedia';

export function HospitalitySection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

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
    <section id="hospitality" className="section-shell">
      <div className="layout-container">
        <div className="section-layout section-layout--image-first">
          {/* Video */}
          <div className="section-media">
            <div className="relative h-full w-full overflow-hidden">
              <video
                ref={videoRef}
                className="section-media-image"
                poster={homeMedia.hospitality.video.poster}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              >
                {homeMedia.hospitality.video.sources.map((source, index) => (
                  <source key={index} src={source.src} type={source.type} />
                ))}
              </video>
            </div>
          </div>

          {/* Content */}
          <div className="section-content">
            <span className="cuisine-eyebrow">Royal Hospitality</span>
            <h2 className="cuisine-headline text-width-heading">
              Step Into Timeless <span className="highlight-yellow">Rajasthan</span>.
            </h2>
            <p className="cuisine-copy text-width-body">
              Every handcrafted detail, every warm greeting, and every softly lit corner
              is designed to make you feel at home while celebrating the rich traditions
              of Rajasthan.
            </p>
            <blockquote className="cuisine-quote">
              <p className="cuisine-quote-text">
                Hospitality begins long before the first meal is served.
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
