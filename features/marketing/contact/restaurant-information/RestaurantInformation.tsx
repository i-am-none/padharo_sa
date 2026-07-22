"use client";

import { gsap } from "gsap";
import { useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

import type { RestaurantInformationContentModel } from "./restaurant-information.types";
import { Container } from "@/lib/components/Container";

type RestaurantInformationProps = {
  content: RestaurantInformationContentModel;
};

const dayOrder = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

export function RestaurantInformation({ content }: RestaurantInformationProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const sectionElement = sectionRef.current;
    if (!sectionElement) return;

    const context = gsap.context(() => {
      const headline = sectionElement.querySelector("[data-info-headline]");
      const infoItems = sectionElement.querySelectorAll("[data-info-item]");

      if (prefersReducedMotion) {
        gsap.set([headline, infoItems], { clearProps: "all", opacity: 1, y: 0 });
        return;
      }

      const timeline = gsap.timeline({
        defaults: {
          ease: "power2.out",
        },
      });

      timeline
        .set(headline, { opacity: 0, y: 20 })
        .set(infoItems, { opacity: 0, y: 24 })
        .to(headline, { opacity: 1, y: 0, duration: 0.55 }, 0)
        .to(
          infoItems,
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.08,
          },
          0.2,
        );
    }, sectionElement);

    return () => {
      context.revert();
    };
  }, [content, prefersReducedMotion]);

  const { info } = content;

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 lg:py-36 bg-[var(--bg-base)]"
      id={content.id}
    >
      <Container variant="content">
        <h2
          data-info-headline
          className="text-3xl md:text-4xl font-display font-semibold text-[var(--text-primary)] mb-12"
        >
          {content.headline}
        </h2>

        <div className="space-y-8">
          <div data-info-item className="border-b border-[var(--border-soft)] pb-6">
            <h3 className="text-sm uppercase tracking-[0.12em] text-[var(--accent-primary)] mb-2">
              Restaurant
            </h3>
            <p className="text-2xl font-display font-medium text-[var(--text-primary)]">
              {info.name}
            </p>
          </div>

          <div data-info-item className="border-b border-[var(--border-soft)] pb-6">
            <h3 className="text-sm uppercase tracking-[0.12em] text-[var(--accent-primary)] mb-2">
              Address
            </h3>
            <p className="text-lg text-[var(--text-secondary)]">{info.address}</p>
          </div>

          <div data-info-item className="border-b border-[var(--border-soft)] pb-6">
            <h3 className="text-sm uppercase tracking-[0.12em] text-[var(--accent-primary)] mb-2">
              Cuisine
            </h3>
            <p className="text-lg text-[var(--text-secondary)]">{info.cuisine}</p>
          </div>

          <div data-info-item className="border-b border-[var(--border-soft)] pb-6">
            <h3 className="text-sm uppercase tracking-[0.12em] text-[var(--accent-primary)] mb-3">
              Opening Hours
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {dayOrder.map((day) => {
                const hours = info.hours[day];
                if (!hours) return null;
                return (
                  <div key={day} className="flex justify-between">
                    <span className="text-[var(--text-secondary)] capitalize">
                      {day}
                    </span>
                    <span className="text-[var(--text-primary)] font-medium">
                      {hours.open} - {hours.close}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {info.dressCode && (
            <div data-info-item className="border-b border-[var(--border-soft)] pb-6">
              <h3 className="text-sm uppercase tracking-[0.12em] text-[var(--accent-primary)] mb-2">
                Dress Code
              </h3>
              <p className="text-lg text-[var(--text-secondary)]">{info.dressCode}</p>
            </div>
          )}

          <div data-info-item className="border-b border-[var(--border-soft)] pb-6">
            <h3 className="text-sm uppercase tracking-[0.12em] text-[var(--accent-primary)] mb-2">
              Parking
            </h3>
            <p className="text-lg text-[var(--text-secondary)]">{info.parking}</p>
          </div>

          <div data-info-item className="border-b border-[var(--border-soft)] pb-6">
            <h3 className="text-sm uppercase tracking-[0.12em] text-[var(--accent-primary)] mb-2">
              Accessibility
            </h3>
            <p className="text-lg text-[var(--text-secondary)]">{info.accessibility}</p>
          </div>

          <div data-info-item>
            <h3 className="text-sm uppercase tracking-[0.12em] text-[var(--accent-primary)] mb-2">
              Payment Methods
            </h3>
            <div className="flex flex-wrap gap-2">
              {info.paymentMethods.map((method) => (
                <span
                  key={method}
                  className="px-3 py-1 bg-[var(--bg-surface)] border border-[var(--border-soft)] rounded-sm text-sm text-[var(--text-secondary)]"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
