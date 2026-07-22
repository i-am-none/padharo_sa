"use client";

import { ExperienceHero } from "@/features/marketing/experience/experience-hero/ExperienceHero";
import { Arrival } from "@/features/marketing/experience/arrival/Arrival";
import { Welcome } from "@/features/marketing/experience/welcome/Welcome";
import { Atmosphere } from "@/features/marketing/experience/atmosphere/Atmosphere";
import { CulinaryJourney } from "@/features/marketing/experience/culinary-journey/CulinaryJourney";
import { Craftsmanship } from "@/features/marketing/experience/craftsmanship/Craftsmanship";
import { Celebration } from "@/features/marketing/experience/celebration/Celebration";
import { Hospitality } from "@/features/marketing/experience/hospitality/Hospitality";
import { Farewell } from "@/features/marketing/experience/farewell/Farewell";
import { ReservationCTA } from "@/features/marketing/experience/reservation-cta/ReservationCTA";

export function ExperienceClient() {
  return (
    <main>
      <ExperienceHero />
      <Arrival />
      <Welcome />
      <Atmosphere />
      <CulinaryJourney />
      <Craftsmanship />
      <Celebration />
      <Hospitality />
      <Farewell />
      <ReservationCTA />
    </main>
  );
}
