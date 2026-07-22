'use client';

import { useRef, useEffect } from 'react';
import { homeMedia } from '@/data/homeMedia';

export function PhilosophySection() {
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
    <section id="philosophy" className="section-shell">
      <div className="layout-container">
        <div className="section-layout section-layout--text-first">
          {/* Content */}
          <div className="section-content">
            <span className="philosophy-eyebrow">Our Philosophy</span>
            <h2 className="philosophy-headline text-width-heading">
              Preserving <span className="highlight-yellow">Tradition</span> Through <span className="highlight-yellow">Hospitality</span>
            </h2>
            <div className="philosophy-body text-width-body">
              <p className="philosophy-paragraph">
                Padharo Sa exists to preserve and present the authentic spirit of
                Rajasthani culture. Every dish, every gesture, and every detail carries
                the weight of centuries of tradition, passed down through generations of
                artisans, chefs, and hosts.
              </p>
              <p className="philosophy-paragraph">
                We believe that true hospitality is not merely about serving food—it is
                about creating an experience where every guest feels the warmth of being
                welcomed into a Rajasthani home. This philosophy of 'Atithi Devo
                Bhava'—the guest is god—guides everything we do.
              </p>
              <p className="philosophy-paragraph">
                Our commitment extends beyond the kitchen. We honor the craftsmanship of
                Rajasthan, from the intricate patterns of traditional textiles to the
                time-honored techniques of royal cuisine. Each visit is an invitation to
                become part of this living heritage.
              </p>
            </div>
            <blockquote className="philosophy-quote">
              <p className="philosophy-quote-text">
                We do not simply serve food. We share a piece of Rajasthan's soul with
                every guest who walks through our doors.
              </p>
            </blockquote>
          </div>

          {/* Video */}
          <div className="section-media">
            <div className="relative h-full w-full overflow-hidden">
              <video
                ref={videoRef}
                className="section-media-image"
                poster={homeMedia.philosophy.video.poster}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              >
                {homeMedia.philosophy.video.sources.map((source, index) => (
                  <source key={index} src={source.src} type={source.type} />
                ))}
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
