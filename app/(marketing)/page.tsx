import homeContent from "@/content/home.json";
import { Atmosphere } from "@/features/marketing/atmosphere";
import { Cuisine } from "@/features/marketing/cuisine";
import { Hero } from "@/features/marketing/hero";
import { Philosophy } from "@/features/marketing/philosophy";
import type { AtmosphereContentModel } from "@/features/marketing/atmosphere/atmosphere.types";
import type { CuisineContentModel } from "@/features/marketing/cuisine/cuisine.types";
import type { PhilosophyContentModel } from "@/features/marketing/philosophy/philosophy.types";

export default function HomePage() {
  return (
    <>
      <Hero content={homeContent.hero} />
      <Atmosphere content={homeContent.atmosphere as AtmosphereContentModel} />
      <Philosophy content={homeContent.philosophy as PhilosophyContentModel} />
      <Cuisine content={homeContent.cuisine as CuisineContentModel} />
      <div aria-hidden="true" id="experience" />
      <div aria-hidden="true" id="reservation" />
    </>
  );
}
