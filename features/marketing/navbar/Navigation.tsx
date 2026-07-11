import { navigationBrandLabel, navigationCta, navigationItems } from "./navigation.config";
import { NavigationClient } from "./NavigationClient";

export function Navigation() {
  return (
    <NavigationClient
      brandLabel={navigationBrandLabel}
      cta={navigationCta}
      items={navigationItems}
    />
  );
}
