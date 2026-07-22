import type { NavigationCta, NavigationItem } from "./types";

export const navigationItems: NavigationItem[] = [
  { id: "home", label: "Home", href: "/" },
  { id: "menu", label: "Menu", href: "/menu" },
  { id: "stories", label: "Stories", href: "/stories" },
  { id: "gallery", label: "Gallery", href: "/gallery" },
  { id: "reviews", label: "Reviews", href: "/reviews" },
  { id: "contact", label: "Contact", href: "/contact" },
];

export const navigationCta: NavigationCta = {
  label: "Reserve a Table",
  href: "/reserve",
};

export const navigationBrandLabel = "Padharo Sa";
