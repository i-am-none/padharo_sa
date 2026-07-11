import type { NavigationCta, NavigationItem } from "./types";

export const navigationItems: NavigationItem[] = [
  { id: "menu", label: "Menu", href: "/menu" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "story", label: "Story", href: "#story" },
  { id: "cuisine", label: "Cuisine", href: "#cuisine" },
  { id: "gallery", label: "Gallery", href: "#gallery" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export const navigationCta: NavigationCta = {
  label: "Reserve a Table",
  href: "#reservation",
};

export const navigationBrandLabel = "Padharo Sa";
