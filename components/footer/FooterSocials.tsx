'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { contactConfig } from '@/lib/config/contact';

export function FooterSocials() {
  const socialLinks = [
    { name: 'Instagram', url: contactConfig.social.instagram.url, icon: 'instagram' },
    { name: 'Facebook', url: contactConfig.social.facebook.url, icon: 'facebook' },
    { name: 'Google', url: contactConfig.social.googleBusiness.url, icon: 'google' },
    { name: 'TripAdvisor', url: contactConfig.social.tripadvisor.url, icon: 'tripadvisor' },
  ];

  const iconRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    iconRefs.current.forEach((ref) => {
      if (ref) {
        ref.addEventListener('mouseenter', () => {
          gsap.to(ref, {
            scale: 1.15,
            rotation: 5,
            duration: 0.3,
            ease: 'back.out(1.7)',
          });
        });

        ref.addEventListener('mouseleave', () => {
          gsap.to(ref, {
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: 'power2.out',
          });
        });
      }
    });

    return () => {
      iconRefs.current.forEach((ref) => {
        if (ref) {
          ref.removeEventListener('mouseenter', () => {});
          ref.removeEventListener('mouseleave', () => {});
        }
      });
    };
  }, []);

  const getIconPath = (icon: string) => {
    switch (icon) {
      case 'instagram':
        return 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z';
      case 'facebook':
        return 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z';
      case 'google':
        return 'M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z';
      case 'tripadvisor':
        return 'M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.5 17.5c-3.037 0-5.5-2.463-5.5-5.5s2.463-5.5 5.5-5.5 5.5 2.463 5.5 5.5-2.463 5.5-5.5 5.5zm3 0c-3.037 0-5.5-2.463-5.5-5.5s2.463-5.5 5.5-5.5 5.5 2.463 5.5 5.5-2.463 5.5-5.5 5.5z';
      default:
        return '';
    }
  };

  return (
    <div className="flex gap-4">
      {socialLinks.map((link, index) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Follow us on ${link.name}`}
          ref={(el) => { iconRefs.current[index] = el; }}
          className="relative group"
        >
          <div className="w-10 h-10 rounded-full bg-amber-900/20 flex items-center justify-center transition-all duration-300 group-hover:bg-amber-800/30 group-hover:shadow-lg group-hover:shadow-amber-900/20">
            <svg
              className="w-5 h-5 text-amber-200/70 transition-colors group-hover:text-amber-100"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d={getIconPath(link.icon)} />
            </svg>
          </div>
          <div className="absolute inset-0 rounded-full bg-amber-400/0 blur-sm transition-all duration-300 group-hover:bg-amber-400/10" />
        </a>
      ))}
    </div>
  );
}
