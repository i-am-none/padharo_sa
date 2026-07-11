"use client";

import { type RefObject, useEffect } from "react";

const focusableSelectors = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
].join(", ");

type UseFocusTrapParams = {
  containerRef: RefObject<HTMLElement | null>;
  isActive: boolean;
  initialFocusRef?: RefObject<HTMLElement | null>;
  onEscape?: () => void;
};

export function useFocusTrap({
  containerRef,
  isActive,
  initialFocusRef,
  onEscape,
}: UseFocusTrapParams) {
  useEffect(() => {
    if (!isActive) {
      return;
    }

    const container = containerRef.current;
    if (!container) {
      return;
    }

    const previousActiveElement = document.activeElement as HTMLElement | null;
    const focusableElements = Array.from(
      container.querySelectorAll<HTMLElement>(focusableSelectors),
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    const initialElement = initialFocusRef?.current ?? firstElement;

    initialElement?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onEscape?.();
        return;
      }

      if (event.key !== "Tab" || focusableElements.length === 0) {
        return;
      }

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement?.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previousActiveElement?.focus();
    };
  }, [containerRef, initialFocusRef, isActive, onEscape]);
}
