import reservationContent from "@/content/reservation.json";
import { ReservationHero } from "@/features/marketing/reservation/reservation-hero";
import { ReservationOptions } from "@/features/marketing/reservation/reservation-options";
import { ReservationForm } from "@/features/marketing/reservation/reservation-form";
import { WhatsAppReservation } from "@/features/marketing/reservation/whatsapp-button";
import { TelegramReservation } from "@/features/marketing/reservation/telegram-button";
import { RestaurantInfo } from "@/features/marketing/reservation/restaurant-info";
import { ReservationFinalCTA } from "@/features/marketing/reservation/final-cta";
import type { ReservationHeroContentModel } from "@/features/marketing/reservation/reservation-hero/reservation-hero.types";

export default function ReservePage() {
  return (
    <>
      <ReservationHero content={reservationContent.hero as ReservationHeroContentModel} highlightWords={["table"]} />
      <ReservationOptions />
      <ReservationForm />
      <WhatsAppReservation />
      <TelegramReservation />
      <RestaurantInfo />
      <ReservationFinalCTA />
    </>
  );
}
