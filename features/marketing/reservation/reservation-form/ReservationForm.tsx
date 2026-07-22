"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type FormData = {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  email?: string;
  specialRequest?: string;
};

export function ReservationForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    email: "",
    specialRequest: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Reservation submitted:", formData);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (isSubmitted) {
    return (
      <section id="reservation-form" className="py-24 px-6 bg-bg-base">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-12 rounded-2xl border border-accent-primary/30 bg-gradient-to-br from-accent-primary/10 to-transparent"
          >
            <div className="text-6xl mb-6">✨</div>
            <h2 className="text-3xl font-serif text-text-primary mb-4">
              Reservation Request Received
            </h2>
            <p className="text-text-secondary mb-8">
              Thank you for choosing Padharo Sa. We will confirm your reservation shortly.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="text-cta focus-ring inline-flex min-h-[var(--touch-target-min)] items-center justify-center rounded-[var(--radius-pill)] bg-accent-primary px-[var(--space-6)] text-bg-base transition-colors duration-[var(--duration-fast)] hover:bg-accent-hover"
            >
              Make Another Reservation
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="reservation-form" className="py-24 px-6 bg-bg-base">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-text-primary mb-4">
            Reserve Your Table
          </h2>
          <p className="text-lg text-text-secondary">
            Complete the form below to secure your dining experience
          </p>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-accent-primary/20 bg-bg-base text-text-primary focus:outline-none focus:border-accent-primary transition-colors"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-2">
                Phone *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-accent-primary/20 bg-bg-base text-text-primary focus:outline-none focus:border-accent-primary transition-colors"
                placeholder="Your phone number"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-text-primary mb-2">
                Date *
              </label>
              <input
                type="date"
                id="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-accent-primary/20 bg-bg-base text-text-primary focus:outline-none focus:border-accent-primary transition-colors"
              />
            </div>

            <div>
              <label htmlFor="time" className="block text-sm font-medium text-text-primary mb-2">
                Time *
              </label>
              <input
                type="time"
                id="time"
                name="time"
                required
                value={formData.time}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-accent-primary/20 bg-bg-base text-text-primary focus:outline-none focus:border-accent-primary transition-colors"
              />
            </div>

            <div>
              <label htmlFor="guests" className="block text-sm font-medium text-text-primary mb-2">
                Guests *
              </label>
              <select
                id="guests"
                name="guests"
                required
                value={formData.guests}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-accent-primary/20 bg-bg-base text-text-primary focus:outline-none focus:border-accent-primary transition-colors"
              >
                <option value="">Select guests</option>
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5">5 Guests</option>
                <option value="6">6 Guests</option>
                <option value="7+">7+ Guests</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
              Email (Optional)
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-accent-primary/20 bg-bg-base text-text-primary focus:outline-none focus:border-accent-primary transition-colors"
              placeholder="Your email address"
            />
          </div>

          <div>
            <label htmlFor="specialRequest" className="block text-sm font-medium text-text-primary mb-2">
              Special Request (Optional)
            </label>
            <textarea
              id="specialRequest"
              name="specialRequest"
              value={formData.specialRequest}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-accent-primary/20 bg-bg-base text-text-primary focus:outline-none focus:border-accent-primary transition-colors resize-none"
              placeholder="Any special requests or dietary requirements?"
            />
          </div>

          <motion.button
            type="submit"
            className="w-full text-cta focus-ring inline-flex min-h-[var(--touch-target-min)] items-center justify-center rounded-[var(--radius-pill)] bg-accent-primary px-[var(--space-6)] text-bg-base transition-colors duration-[var(--duration-fast)] hover:bg-accent-hover"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Submit Reservation
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
