import { Reviews } from "@/features/marketing/reviews";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guest Reviews | Jain's Little India Mauritius",
  description: "Read authentic guest reviews and experiences at Jain's Little India Mauritius. Discover what diners say about our authentic Indian vegetarian cuisine, warm hospitality, and memorable dining experiences.",
  keywords: ["Indian restaurant Mauritius reviews", "vegetarian restaurant Mauritius", "authentic Indian dining experience", "Mauritius restaurant reviews", "Jain's Little India reviews"],
  openGraph: {
    title: "Guest Reviews | Jain's Little India Mauritius",
    description: "Read authentic guest reviews and experiences at Jain's Little India Mauritius.",
    type: "website",
    locale: "en_US",
    siteName: "Jain's Little India",
  },
};

export default function ReviewsPage() {
  return <Reviews />;
}
