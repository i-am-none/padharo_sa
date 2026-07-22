import type { SocialPlatforms as SocialPlatformsType } from "../gallery.types";

type SocialPlatformsProps = {
  platforms: SocialPlatformsType;
};

export function SocialPlatforms({ platforms }: SocialPlatformsProps) {
  return (
    <section className="gallery-social-section">
      <div className="gallery-social-container">
        <h2 className="gallery-social-headline">Follow Our Journey</h2>
        <p className="gallery-social-description">
          Continue exploring authentic content from our social platforms
        </p>
        
        <div className="gallery-social-grid">
          <SocialCard
            platform="Instagram"
            url={platforms.instagram.url}
            purpose={platforms.instagram.purpose}
            cta={platforms.instagram.cta}
            icon={<InstagramIcon />}
          />
          
          <SocialCard
            platform="Facebook"
            url={platforms.facebook.url}
            purpose={platforms.facebook.purpose}
            cta={platforms.facebook.cta}
            icon={<FacebookIcon />}
          />
          
          <SocialCard
            platform="TikTok"
            url={platforms.tiktok.url}
            purpose={platforms.tiktok.purpose}
            cta={platforms.tiktok.cta}
            icon={<TikTokIcon />}
          />
          
          <SocialCard
            platform="Tripadvisor"
            url={platforms.tripadvisor.url}
            purpose={platforms.tripadvisor.purpose}
            cta={platforms.tripadvisor.cta}
            icon={<TripadvisorIcon />}
          />
          
          <SocialCard
            platform="Google"
            url={platforms.google.url}
            purpose={platforms.google.purpose}
            cta={platforms.google.cta}
            icon={<GoogleIcon />}
          />
        </div>
      </div>
    </section>
  );
}

type SocialCardProps = {
  platform: string;
  url: string;
  purpose: string;
  cta: string;
  icon: React.ReactNode;
};

function SocialCard({ platform, url, purpose, cta, icon }: SocialCardProps) {
  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="gallery-social-card"
    >
      <div className="gallery-social-icon">{icon}</div>
      <div className="gallery-social-content">
        <h3 className="gallery-social-platform">{platform}</h3>
        <p className="gallery-social-purpose">{purpose}</p>
        <span className="gallery-social-cta">{cta}</span>
      </div>
    </a>
  );
}

// Icon Components
function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="gallery-social-icon-svg">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="gallery-social-icon-svg">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="gallery-social-icon-svg">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  );
}

function TripadvisorIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="gallery-social-icon-svg">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8zm0 2c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6zm0 2c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4z"/>
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="gallery-social-icon-svg">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8zm0 2c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6zm0 2c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4z"/>
    </svg>
  );
}
