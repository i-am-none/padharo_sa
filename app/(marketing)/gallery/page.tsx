import { Metadata } from "next";
import { GalleryClient } from "./GalleryClient";
import galleryData from "@/content/gallery.json";
import type { GalleryContentModel } from "@/features/marketing/gallery/gallery.types";

export const metadata: Metadata = {
  title: "Gallery | Jain's Little India Mauritius",
  description: "Explore authentic Indian cuisine, hospitality, interiors, and cultural moments from Jain's Little India Mauritius.",
};

export default function GalleryPage() {
  return <GalleryClient content={galleryData as GalleryContentModel} />;
}
