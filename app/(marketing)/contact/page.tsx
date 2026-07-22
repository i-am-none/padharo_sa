import type { Metadata } from "next";
import { ContactPage } from "@/features/marketing/contact/contact-page";
import { contactConfig } from "@/lib/config/contact";

export const metadata: Metadata = {
  title: "Contact | Jain's Little India Mauritius",
  description:
    "Get in touch with Jain's Little India. Find our location, opening hours, contact details and reserve your dining experience in Mauritius.",
  openGraph: {
    title: "Contact | Jain's Little India Mauritius",
    description:
      "Get in touch with Jain's Little India. Find our location, opening hours, contact details and reserve your dining experience in Mauritius.",
    type: "website",
  },
};

const contactPageContent = {
  hero: {
    id: "contact-hero",
    eyebrow: "Get In Touch",
    headline: "We'd Love To Hear From You",
    copy: "Whether you're planning a celebration, making a reservation, or simply have a question, our team is always delighted to help.",
    primaryCta: {
      label: "Reserve A Table",
      href: contactConfig.reservations.url,
    },
    background: {
      image: "/images/contact-hero.jpg",
    },
  },
  overview: {
    id: "contact-overview",
    headline: "Reach Us",
    cards: [
      {
        id: "call-card",
        title: "Call Us",
        value: contactConfig.restaurant.phone,
        cta: {
          label: "Call Now",
          href: `tel:${contactConfig.restaurant.phone}`,
        },
        icon: "Phone",
      },
      {
        id: "email-card",
        title: "Email",
        value: contactConfig.restaurant.email,
        cta: {
          label: "Send Email",
          href: `mailto:${contactConfig.restaurant.email}`,
        },
        icon: "Mail",
      },
      {
        id: "visit-card",
        title: "Visit Us",
        value: contactConfig.restaurant.address,
        cta: {
          label: "Open in Google Maps",
          href: contactConfig.maps.googleMaps.directionsUrl,
        },
        icon: "MapPin",
      },
      {
        id: "hours-card",
        title: "Opening Hours",
        value: "11:00 - 22:00 (Daily)",
        cta: {
          label: "View Hours",
          href: "#restaurant-info",
        },
        icon: "Clock",
      },
    ],
  },
  restaurantInfo: {
    id: "restaurant-info",
    headline: "Restaurant Information",
    info: {
      name: contactConfig.restaurant.name,
      address: contactConfig.restaurant.address,
      cuisine: contactConfig.cuisine,
      hours: contactConfig.hours,
      dressCode: contactConfig.dressCode,
      parking: contactConfig.parking,
      accessibility: contactConfig.accessibility,
      paymentMethods: contactConfig.paymentMethods,
    },
  },
  map: {
    id: "map-section",
    headline: "Find Us",
    map: contactConfig.maps.googleMaps,
  },
  form: {
    id: "contact-form",
    headline: "Send Us a Message",
    description:
      "Have a question or special request? Fill out the form below and our team will get back to you shortly.",
  },
  messaging: {
    id: "messaging-platforms",
    headline: "Continue The Conversation",
    platforms: [
      {
        id: "whatsapp",
        name: "WhatsApp",
        description: contactConfig.platforms.whatsapp.description,
        url: contactConfig.platforms.whatsapp.url,
        cta: contactConfig.platforms.whatsapp.cta,
        icon: "MessageCircle",
      },
      {
        id: "telegram",
        name: "Telegram",
        description: contactConfig.platforms.telegram.description,
        url: contactConfig.platforms.telegram.url,
        cta: contactConfig.platforms.telegram.cta,
        icon: "Send",
      },
      {
        id: "phone",
        name: "Phone",
        description: contactConfig.platforms.phone.description,
        url: contactConfig.platforms.phone.url,
        cta: contactConfig.platforms.phone.cta,
        icon: "Phone",
      },
      {
        id: "email",
        name: "Email",
        description: contactConfig.platforms.email.description,
        url: contactConfig.platforms.email.url,
        cta: contactConfig.platforms.email.cta,
        icon: "Mail",
      },
    ],
  },
  social: {
    id: "social-presence",
    headline: "Stay Connected",
    platforms: [
      {
        id: "instagram",
        name: "Instagram",
        handle: contactConfig.social.instagram.handle,
        url: contactConfig.social.instagram.url,
        icon: "Instagram",
      },
      {
        id: "facebook",
        name: "Facebook",
        handle: contactConfig.social.facebook.handle,
        url: contactConfig.social.facebook.url,
        icon: "Facebook",
      },
      {
        id: "tiktok",
        name: "TikTok",
        handle: contactConfig.social.tiktok.handle,
        url: contactConfig.social.tiktok.url,
        icon: "Music",
      },
      {
        id: "tripadvisor",
        name: "TripAdvisor",
        handle: contactConfig.social.tripadvisor.handle,
        url: contactConfig.social.tripadvisor.url,
        icon: "Star",
      },
      {
        id: "google",
        name: "Google Business",
        handle: contactConfig.social.googleBusiness.handle,
        url: contactConfig.social.googleBusiness.url,
        icon: "MapPin",
      },
    ],
  },
  faq: {
    id: "faq",
    headline: "Frequently Asked Questions",
    items: [
      {
        id: "faq-1",
        question: "Do I need a reservation?",
        answer:
          "While walk-ins are welcome, we highly recommend making a reservation, especially for dinner and weekends, to ensure we have a table ready for you.",
      },
      {
        id: "faq-2",
        question: "Do you offer vegan dishes?",
        answer:
          "Yes, we offer a variety of vegan options. Our menu includes several plant-based dishes prepared with authentic Rajasthani flavors.",
      },
      {
        id: "faq-3",
        question: "Do you host private events?",
        answer:
          "Yes, we host private events including birthdays, anniversaries, corporate gatherings, and weddings. Please contact us for more details.",
      },
      {
        id: "faq-4",
        question: "Where can I park?",
        answer:
          "We offer free parking on our premises for our guests. Additional street parking is also available nearby.",
      },
      {
        id: "faq-5",
        question: "Can I celebrate birthdays?",
        answer:
          "Absolutely! We love celebrating special occasions. Let us know when you book your reservation and we'll help make it memorable.",
      },
      {
        id: "faq-6",
        question: "Do you offer takeaway?",
        answer:
          "Yes, we offer takeaway services. You can order by phone or visit us directly. Packaging is available for all menu items.",
      },
      {
        id: "faq-7",
        question: "Do you provide catering?",
        answer:
          "Yes, we provide catering services for events and gatherings. Please contact us with your requirements and we'll create a custom menu for you.",
      },
    ],
  },
  cta: {
    id: "reservation-cta",
    headline: "Your Table Is Waiting",
    primaryCta: {
      label: "Reserve Table",
      href: contactConfig.reservations.url,
    },
    secondaryCta: {
      label: "Explore Menu",
      href: contactConfig.reservations.menuUrl,
    },
  },
};

export default function ContactPageRoute() {
  return (
    <>
      <ContactPage content={contactPageContent} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            name: contactConfig.restaurant.name,
            address: {
              "@type": "PostalAddress",
              streetAddress: contactConfig.restaurant.address,
              addressLocality: "Grand Baie",
              addressCountry: "MU",
            },
            telephone: contactConfig.restaurant.phone,
            email: contactConfig.restaurant.email,
            servesCuisine: contactConfig.cuisine,
            openingHoursSpecification: Object.entries(contactConfig.hours).map(
              ([day, hours]) => ({
                "@type": "OpeningHoursSpecification",
                dayOfWeek: day.charAt(0).toUpperCase() + day.slice(1),
                opens: hours.open,
                closes: hours.close,
              }),
            ),
            contactPoint: {
              "@type": "ContactPoint",
              telephone: contactConfig.restaurant.phone,
              contactType: "reservations",
              areaServed: "MU",
              availableLanguage: ["English", "French"],
            },
          }),
        }}
      />
    </>
  );
}
