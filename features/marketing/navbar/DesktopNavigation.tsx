import type { MouseEvent } from "react";

import type { NavigationItem } from "./types";
import { NavigationMenu } from "./NavigationMenu";

type DesktopNavigationProps = {
  items: NavigationItem[];
  activeHref?: string | null;
  onNavigate?: (event: MouseEvent<HTMLAnchorElement>) => void;
};

export function DesktopNavigation({ items, activeHref, onNavigate }: DesktopNavigationProps) {
  return (
    <div className="hidden justify-self-center md:block">
      <nav aria-label="Primary navigation">
        <NavigationMenu activeHref={activeHref} items={items} onNavigate={onNavigate} />
      </nav>
    </div>
  );
}
