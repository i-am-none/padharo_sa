import type { MenuHeroContent } from "./menu.types";

interface HeroContentProps {
  content: MenuHeroContent;
}

export function MenuHeroContent({ content }: HeroContentProps) {
  return (
    <div className="container mx-auto px-4 text-center">
      <p className="menu-hero-eyebrow text-accent-primary mb-4 text-sm uppercase tracking-widest">
        {content.eyebrow}
      </p>
      <h1 className="menu-hero-headline text-heading mb-6 font-display text-4xl md:text-5xl lg:text-6xl">
        {content.headline}
      </h1>
      <p className="menu-hero-description text-text-secondary mx-auto max-w-2xl text-lg">
        {content.description}
      </p>
    </div>
  );
}
