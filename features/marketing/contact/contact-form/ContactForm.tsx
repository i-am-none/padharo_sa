"use client";

import { gsap } from "gsap";
import { useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import type { ContactFormData, ContactFormContentModel } from "./contact-form.types";
import { Container } from "@/lib/components/Container";

type ContactFormProps = {
  content: ContactFormContentModel;
};

type FormState = "idle" | "loading" | "success" | "error";

export function ContactForm({ content }: ContactFormProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const [formState, setFormState] = useState<FormState>("idle");
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    occasion: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  useEffect(() => {
    const sectionElement = sectionRef.current;
    if (!sectionElement) return;

    const context = gsap.context(() => {
      const headline = sectionElement.querySelector("[data-form-headline]");
      const description = sectionElement.querySelector("[data-form-description]");
      const formElement = sectionElement.querySelector("[data-form-element]");

      if (prefersReducedMotion) {
        gsap.set([headline, description, formElement], { clearProps: "all", opacity: 1, y: 0 });
        return;
      }

      const timeline = gsap.timeline({
        defaults: {
          ease: "power2.out",
        },
      });

      timeline
        .set(headline, { opacity: 0, y: 20 })
        .set(description, { opacity: 0, y: 20 })
        .set(formElement, { opacity: 0, y: 32 })
        .to(headline, { opacity: 1, y: 0, duration: 0.55 }, 0)
        .to(description, { opacity: 1, y: 0, duration: 0.55 }, 0.1)
        .to(formElement, { opacity: 1, y: 0, duration: 0.65 }, 0.2);
    }, sectionElement);

    return () => {
      context.revert();
    };
  }, [content, prefersReducedMotion]);

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setFormState("loading");

    // Architecture for future backend integration
    // Currently simulating API call
    setTimeout(() => {
      setFormState("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        occasion: "",
        message: "",
      });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (formState === "success") {
    return (
      <section
        ref={sectionRef}
        className="py-20 md:py-28 lg:py-36 bg-[var(--bg-base)]"
        id={content.id}
      >
        <Container variant="content">
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-500/10 flex items-center justify-center">
              <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-display font-medium text-[var(--text-primary)] mb-4">
              Thank you.
            </h3>
            <p className="text-lg text-[var(--text-secondary)]">
              Our team will get back to you shortly.
            </p>
            <button
              onClick={() => setFormState("idle")}
              className="mt-8 px-6 py-3 bg-[var(--accent-primary)] text-[var(--bg-base)] font-medium rounded-sm hover:bg-[var(--accent-hover)] transition-colors duration-300 focus-ring"
            >
              Send another message
            </button>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 lg:py-36 bg-[var(--bg-base)]"
      id={content.id}
    >
      <Container variant="content">
        <h2
          data-form-headline
          className="text-3xl md:text-4xl font-display font-semibold text-[var(--text-primary)] mb-4 text-center"
        >
          {content.headline}
        </h2>
        <p
          data-form-description
          className="text-lg text-[var(--text-secondary)] mb-12 text-center max-w-2xl mx-auto"
        >
          {content.description}
        </p>

        <form
          ref={formRef}
          data-form-element
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                Name <span className="text-[var(--accent-primary)]">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                suppressHydrationWarning
                className={`w-full px-4 py-3 bg-[var(--bg-surface)] border rounded-sm focus-ring transition-colors duration-300 ${
                  errors.name ? "border-red-500" : "border-[var(--border-soft)] hover:border-[var(--accent-primary)]"
                } text-[var(--text-primary)] placeholder-[var(--text-muted)]`}
                placeholder="Your name"
              />
              {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                Email <span className="text-[var(--accent-primary)]">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                suppressHydrationWarning
                className={`w-full px-4 py-3 bg-[var(--bg-surface)] border rounded-sm focus-ring transition-colors duration-300 ${
                  errors.email ? "border-red-500" : "border-[var(--border-soft)] hover:border-[var(--accent-primary)]"
                } text-[var(--text-primary)] placeholder-[var(--text-muted)]`}
                placeholder="your@email.com"
              />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                suppressHydrationWarning
                className="w-full px-4 py-3 bg-[var(--bg-surface)] border border-[var(--border-soft)] rounded-sm hover:border-[var(--accent-primary)] focus-ring transition-colors duration-300 text-[var(--text-primary)] placeholder-[var(--text-muted)]"
                placeholder="+230 123 4567"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                suppressHydrationWarning
                className="w-full px-4 py-3 bg-[var(--bg-surface)] border border-[var(--border-soft)] rounded-sm hover:border-[var(--accent-primary)] focus-ring transition-colors duration-300 text-[var(--text-primary)] placeholder-[var(--text-muted)]"
                placeholder="General enquiry"
              />
            </div>
          </div>

          <div>
            <label htmlFor="occasion" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
              Occasion
            </label>
            <select
              id="occasion"
              name="occasion"
              value={formData.occasion}
              onChange={handleChange}
              suppressHydrationWarning
              className="w-full px-4 py-3 bg-[var(--bg-surface)] border border-[var(--border-soft)] rounded-sm hover:border-[var(--accent-primary)] focus-ring transition-colors duration-300 text-[var(--text-primary)]"
            >
              <option value="">Select an occasion (optional)</option>
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
              <option value="corporate">Corporate Event</option>
              <option value="wedding">Wedding</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
              Message <span className="text-[var(--accent-primary)]">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className={`w-full px-4 py-3 bg-[var(--bg-surface)] border rounded-sm focus-ring transition-colors duration-300 resize-none ${
                errors.message ? "border-red-500" : "border-[var(--border-soft)] hover:border-[var(--accent-primary)]"
              } text-[var(--text-primary)] placeholder-[var(--text-muted)]`}
              placeholder="Tell us about your enquiry..."
            />
            {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={formState === "loading"}
            suppressHydrationWarning
            className="w-full md:w-auto px-8 py-4 bg-[var(--accent-primary)] text-[var(--bg-base)] font-medium rounded-sm hover:bg-[var(--accent-hover)] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus-ring"
          >
            {formState === "loading" ? "Sending..." : "Send Message"}
          </button>
        </form>
      </Container>
    </section>
  );
}
