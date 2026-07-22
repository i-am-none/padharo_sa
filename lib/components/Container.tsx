import { cn } from "../utils";

type ContainerProps = {
  children: React.ReactNode;
  variant?: "wide" | "content";
  className?: string;
};

export function Container({ children, variant = "content", className }: ContainerProps) {
  return (
    <div
      className={cn(
        "layout-container-content",
        variant === "wide" && "layout-container",
        className
      )}
    >
      {children}
    </div>
  );
}
