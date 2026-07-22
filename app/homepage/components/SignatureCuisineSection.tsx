'use client';

import { useRef, useEffect } from 'react';
import { homeMedia } from '@/data/homeMedia';

export function SignatureCuisineSection() {
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
    <section id="cuisine" className="section-shell">
      <div className="layout-container">
        <div className="section-layout section-layout--image-first">
          {/* Video */}
          <div className="section-media">
            <div className="relative h-full w-full overflow-hidden">
              <video
                ref={videoRef}
                className="section-media-image"
                poster={homeMedia.signatureCuisine.video.poster}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              >
                {homeMedia.signatureCuisine.video.sources.map((source, index) => (
                  <source key={index} src={source.src} type={source.type} />
                ))}
              </video>
            </div>
          </div>

          {/* Content */}
          <div className="section-content">
            <span className="cuisine-eyebrow">Signature Cuisine</span>
            <h2 className="cuisine-headline text-width-heading">
              <span className="highlight-yellow">Crafted</span> With Centuries of <span className="highlight-yellow">Wisdom</span>
            </h2>
            <p className="cuisine-copy text-width-body">
              Each dish tells a story of Rajasthan's royal kitchens, where recipes were
              perfected over generations and spices were treated as precious treasures.
              Our signature offerings honor this legacy while celebrating the vibrant
              flavors that define authentic Rajasthani cuisine.
            </p>
            <blockquote className="cuisine-quote">
              <p className="cuisine-quote-text">
                Food is not merely sustenance—it is memory, tradition, and love served
                on a plate.
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
