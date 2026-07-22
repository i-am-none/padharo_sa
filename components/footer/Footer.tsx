'use client';

import { FooterBackground } from './FooterBackground';
import { FooterDecorations } from './FooterDecorations';
import { FooterColumns } from './FooterColumns';
import { FooterCopyright } from './FooterCopyright';

export function Footer() {
  return (
    <footer className="relative w-full overflow-hidden" role="contentinfo" aria-label="Site footer">
      {/* Layer 1: Background */}
      <FooterBackground />

      {/* Layer 2: Decorative SVGs */}
      <FooterDecorations />

      {/* Layer 3: Footer Content */}
      <div className="relative z-10">
        <FooterColumns />
      </div>

      {/* Layer 4: Copyright */}
      <FooterCopyright />
    </footer>
  );
}
