'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export function FooterNewsletter() {
  const [email, setEmail] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!inputRef.current || !buttonRef.current) return;

    // Input glow animation on focus
    const handleFocus = () => {
      gsap.to(inputRef.current, {
        boxShadow: '0 0 20px rgba(217, 119, 6, 0.15)',
        duration: 0.3,
      });
    };

    const handleBlur = () => {
      gsap.to(inputRef.current, {
        boxShadow: '0 0 0px rgba(217, 119, 6, 0)',
        duration: 0.3,
      });
    };

    // Button lift animation on hover
    const handleMouseEnter = () => {
      gsap.to(buttonRef.current, {
        y: -2,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(buttonRef.current, {
        y: 0,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    inputRef.current.addEventListener('focus', handleFocus);
    inputRef.current.addEventListener('blur', handleBlur);
    buttonRef.current.addEventListener('mouseenter', handleMouseEnter);
    buttonRef.current.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (inputRef.current) {
        inputRef.current.removeEventListener('focus', handleFocus);
        inputRef.current.removeEventListener('blur', handleBlur);
      }
      if (buttonRef.current) {
        buttonRef.current.removeEventListener('mouseenter', handleMouseEnter);
        buttonRef.current.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter submission
    console.log('Newsletter submission:', email);
    setEmail('');
  };

  return (
    <div ref={containerRef} className="space-y-4">
      <h3 className="font-serif text-lg font-semibold text-amber-200 tracking-wide">
        Stay Connected
      </h3>
      <p className="font-sans text-sm text-amber-100/70 leading-relaxed">
        Receive exclusive offers, royal recipes, and updates on special events.
      </p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          ref={inputRef}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          aria-label="Email address for newsletter"
          suppressHydrationWarning
          className="w-full px-5 py-4 bg-amber-950/30 border border-amber-900/30 rounded-lg font-sans text-sm text-amber-100 placeholder-amber-100/40 focus:outline-none focus:border-amber-700/50 transition-all duration-300"
        />
        <button
          ref={buttonRef}
          type="submit"
          suppressHydrationWarning
          className="w-full px-6 py-4 bg-gradient-to-r from-amber-700 to-amber-600 hover:from-amber-600 hover:to-amber-500 rounded-lg font-sans text-sm font-semibold text-white tracking-wide transition-all duration-300 shadow-lg shadow-amber-900/20"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
