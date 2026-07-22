import { ContactHero } from "../contact-hero";
import { ContactOverview } from "../contact-overview";
import { RestaurantInformation } from "../restaurant-information";
import { MapSection } from "../map-section";
import { ContactForm } from "../contact-form";
import { MessagingPlatforms } from "../messaging-platforms";
import { SocialPresence } from "../social-presence";
import { FAQ } from "../faq";
import { ReservationCTA } from "../reservation-cta";

import type { ContactPageContentModel } from "./contact-page.types";

type ContactPageProps = {
  content: ContactPageContentModel;
};

export function ContactPage({ content }: ContactPageProps) {
  return (
    <>
      <ContactHero content={content.hero} highlightWords={["love", "you"]} />
      <ContactOverview content={content.overview} />
      <RestaurantInformation content={content.restaurantInfo} />
      <MapSection content={content.map} />
      <ContactForm content={content.form} />
      <MessagingPlatforms content={content.messaging} />
      <SocialPresence content={content.social} />
      <FAQ content={content.faq} />
      <ReservationCTA content={content.cta} />
    </>
  );
}
