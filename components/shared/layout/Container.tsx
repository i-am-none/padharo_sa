import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ContainerVariant = "wide" | "content";

type ContainerProps<T extends ElementType = "div"> = {
  as?: T;
  children: ReactNode;
  variant?: ContainerVariant;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

const variantClassMap: Record<ContainerVariant, string> = {
  wide: "layout-container",
  content: "layout-container-content",
};

export function Container<T extends ElementType = "div">({
  as,
  children,
  variant = "wide",
  className,
  ...props
}: ContainerProps<T>) {
  const Component = as ?? "div";

  return (
    <Component className={cn(variantClassMap[variant], className)} {...props}>
      {children}
    </Component>
  );
}
