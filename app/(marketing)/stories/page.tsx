import { Stories } from "@/features/marketing/stories";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stories | Padharo Sa - Discover Rajasthan's Culinary Heritage",
  description: "Explore the traditions, flavors, and stories behind Rajasthan's iconic vegetarian cuisine. Discover heritage articles, culinary stories, and cultural experiences at Padharo Sa Mauritius.",
  keywords: ["Rajasthani cuisine", "Indian vegetarian food", "Mauritius restaurant", "traditional Indian cooking", "heritage cuisine"],
  openGraph: {
    title: "Stories | Padharo Sa - Discover Rajasthan's Culinary Heritage",
    description: "Explore the traditions, flavors, and stories behind Rajasthan's iconic vegetarian cuisine.",
    type: "website",
    locale: "en_US",
    siteName: "Padharo Sa",
  },
};

export default function StoriesPage() {
  return <Stories />;
}
