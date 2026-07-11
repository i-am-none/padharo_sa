"use client";

import { ReactNode } from "react";
import { MenuContent } from "./menu.types";

interface MenuClientProps {
  content: MenuContent;
  children: ReactNode;
}

export function MenuClient({ content, children }: MenuClientProps) {
  return <>{children}</>;
}
