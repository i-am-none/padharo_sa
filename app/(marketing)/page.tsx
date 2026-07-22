import { Hero } from '@/features/marketing/hero/Hero';
import { HospitalitySection } from '@/app/homepage/components/HospitalitySection';
import { PhilosophySection } from '@/app/homepage/components/PhilosophySection';
import { SignatureCuisineSection } from '@/app/homepage/components/SignatureCuisineSection';
import { FeaturedDishesSection } from '@/app/homepage/components/FeaturedDishesSection';
import { CulinaryJourneyCTA } from '@/app/homepage/components/CulinaryJourneyCTA';
import { Footer } from '@/components/footer/Footer';
import homeContent from '@/content/home.json';

export default function HomePage() {
  return (
    <>
      <main>
        <Hero content={homeContent.hero} highlightWords={["Soul", "Rajasthan"]} />
        <HospitalitySection />
        <PhilosophySection />
        <SignatureCuisineSection />
        <FeaturedDishesSection />
        <CulinaryJourneyCTA />
      </main>
      <Footer />
    </>
  );
}
