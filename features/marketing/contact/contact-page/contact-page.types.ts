import type { ContactHeroContentModel } from "../contact-hero/contact-hero.types";
import type { ContactOverviewContentModel } from "../contact-overview/contact-overview.types";
import type { RestaurantInformationContentModel } from "../restaurant-information/restaurant-information.types";
import type { MapSectionContentModel } from "../map-section/map-section.types";
import type { ContactFormContentModel } from "../contact-form/contact-form.types";
import type { MessagingPlatformsContentModel } from "../messaging-platforms/messaging-platforms.types";
import type { SocialPresenceContentModel } from "../social-presence/social-presence.types";
import type { FAQContentModel } from "../faq/faq.types";
import type { ReservationCTAContentModel } from "../reservation-cta/reservation-cta.types";

export type ContactPageContentModel = {
  hero: ContactHeroContentModel;
  overview: ContactOverviewContentModel;
  restaurantInfo: RestaurantInformationContentModel;
  map: MapSectionContentModel;
  form: ContactFormContentModel;
  messaging: MessagingPlatformsContentModel;
  social: SocialPresenceContentModel;
  faq: FAQContentModel;
  cta: ReservationCTAContentModel;
};
