import homeContent from '@/content/home.json';
import { PeacockDecoration, LanternDecoration } from '@/components/decorative/SectionDecorations';

export function CulinaryJourneyCTA() {
  const cta = homeContent.cuisine.cta;

  return (
    <section className="section-shell relative">
      <PeacockDecoration />
      <LanternDecoration />
      <div className="layout-container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="cuisine-headline mb-6">Begin Your <span className="highlight-yellow">Culinary Journey</span></h2>
          <p className="cuisine-copy mb-10 text-center">
            {cta.description}
          </p>
          <a
            href={cta.href}
            className="inline-flex h-12 items-center justify-center rounded-full border border-text-primary px-8 text-cta font-semibold text-text-primary transition-colors hover:bg-text-primary hover:text-bg-base focus-ring"
          >
            Explore the Complete Menu
          </a>
        </div>
      </div>
    </section>
  );
}
