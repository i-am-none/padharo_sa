"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "framer-motion";
import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type MouseEvent,
} from "react";

import { Container } from "@/lib/components/Container";
import { useFocusTrap } from "@/hooks/use-focus-trap";

import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";
import { NavigationCTA } from "./NavigationCTA";
import { NavigationLogo } from "./NavigationLogo";
import { NavigationToggle } from "./NavigationToggle";
import type { NavigationCta, NavigationItem } from "./types";

type NavigationClientProps = {
  items: NavigationItem[];
  cta: NavigationCta;
  brandLabel: string;
};

export function NavigationClient({ items, cta, brandLabel }: NavigationClientProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string | null>(items[0]?.href ?? null);
  const navRef = useRef<HTMLElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const menuId = useId();

  const sectionIds = useMemo(
    () => items.filter((item) => item.href.startsWith("#")).map((item) => item.href.slice(1)),
    [items],
  );

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  useFocusTrap({
    containerRef: overlayRef,
    isActive: isMobileMenuOpen,
    onEscape: closeMobileMenu,
  });

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const navElement = navRef.current;
    if (!navElement) {
      return;
    }

    const rootStyle = getComputedStyle(document.documentElement);
    const animationDuration =
      Number.parseFloat(rootStyle.getPropertyValue("--duration-nav-state-seconds")) || 0.5;
    const fromState = {
      "--nav-glass-opacity": 0,
      "--nav-border-opacity": 0,
      "--nav-shadow-opacity": 0,
      "--nav-logo-scale": 1,
    };
    const toState = {
      "--nav-glass-opacity": 1,
      "--nav-border-opacity": 1,
      "--nav-shadow-opacity": 1,
      "--nav-logo-scale": 0.96,
      duration: animationDuration,
      ease: "power2.out",
      overwrite: "auto" as const,
    };

    const animateToScrolled = () => {
      gsap.to(navElement, toState);
    };

    const animateToInitial = () => {
      gsap.to(navElement, { ...fromState, duration: animationDuration, ease: "power2.out" });
    };

    if (prefersReducedMotion) {
      const isScrolled = window.scrollY > 24;
      gsap.set(navElement, isScrolled ? toState : fromState);
      return;
    }

    const trigger = ScrollTrigger.create({
      start: "top+=24 top",
      end: "max",
      onEnter: animateToScrolled,
      onLeaveBack: animateToInitial,
    });

    return () => {
      trigger.kill();
    };
  }, [prefersReducedMotion]);

  useEffect(() => {
    const updateFromHash = () => {
      const hash = window.location.hash;
      if (hash) {
        setActiveHref(hash);
      }
    };

    updateFromHash();
    window.addEventListener("hashchange", updateFromHash);

    return () => {
      window.removeEventListener("hashchange", updateFromHash);
    };
  }, []);

  useEffect(() => {
    if (sectionIds.length === 0) {
      return;
    }

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visibleEntry) {
          return;
        }

        setActiveHref(`#${visibleEntry.target.id}`);
      },
      {
        rootMargin: "-38% 0px -42% 0px",
        threshold: [0.25, 0.45, 0.7],
      },
    );

    for (const section of sections) {
      observer.observe(section);
    }

    return () => {
      observer.disconnect();
    };
  }, [sectionIds]);

  const handleNavigate = useCallback(
    (event: MouseEvent<HTMLAnchorElement>) => {
      const href = event.currentTarget.getAttribute("href");
      if (!href || !href.startsWith("#")) {
        closeMobileMenu();
        return;
      }

      const targetElement = document.getElementById(href.slice(1));
      if (!targetElement) {
        closeMobileMenu();
        return;
      }

      event.preventDefault();
      setActiveHref(href);
      closeMobileMenu();

      targetElement.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "start",
      });
      window.history.replaceState(null, "", href);
    },
    [closeMobileMenu, prefersReducedMotion],
  );

  return (
    <header className="nav-shell" ref={navRef}>
      <Container>
        <div className="nav-inner">
          <div className="grid min-h-[var(--nav-height)] grid-cols-[auto_1fr_auto] items-center gap-[var(--space-4)]">
            <div className="justify-self-start">
              <NavigationLogo label={brandLabel} onNavigate={handleNavigate} />
            </div>

            <DesktopNavigation activeHref={activeHref} items={items} onNavigate={handleNavigate} />

            <div className="flex items-center justify-self-end gap-[var(--space-3)]">
              <NavigationCTA
                className="hidden md:inline-flex"
                href={cta.href}
                label={cta.label}
                onNavigate={handleNavigate}
              />
              <div className="md:hidden">
                <NavigationToggle
                  controlsId={menuId}
                  isOpen={isMobileMenuOpen}
                  onToggle={() => setIsMobileMenuOpen((prev) => !prev)}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>

      <MobileNavigation
        activeHref={activeHref}
        cta={cta}
        isOpen={isMobileMenuOpen}
        items={items}
        menuId={menuId}
        onClose={closeMobileMenu}
        onNavigate={handleNavigate}
        overlayRef={overlayRef}
      />
    </header>
  );
}
