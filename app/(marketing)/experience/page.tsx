import type { Metadata } from "next";

import { ExperienceClient } from "./ExperienceClient";

export const metadata: Metadata = {
  title: "Experience Authentic Rajasthan Hospitality | Jain's Little India",
  description:
    "Discover the complete dining experience at Jain's Little India, where authentic vegetarian cuisine, Rajasthan hospitality and unforgettable moments come together.",
  openGraph: {
    title: "Experience Authentic Rajasthan Hospitality | Jain's Little India",
    description:
      "Discover the complete dining experience at Jain's Little India, where authentic vegetarian cuisine, Rajasthan hospitality and unforgettable moments come together.",
  },
};

export default function ExperiencePage() {
  return <ExperienceClient />;
}
