"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type ReservationOption = {
  id: string;
  title: string;
  description: string;
  icon: string;
  action: () => void;
};

const reservationOptions: ReservationOption[] = [
  {
    id: "online",
    title: "Reserve Online",
    description: "Complete reservation directly through website",
    icon: "🌐",
    action: () => {
      const formElement = document.getElementById("reservation-form");
      formElement?.scrollIntoView({ behavior: "smooth" });
    },
  },
  {
    id: "whatsapp",
    title: "WhatsApp",
    description: "Chat directly with our team",
    icon: "💬",
    action: () => {
      const whatsappElement = document.getElementById("whatsapp-reservation");
      whatsappElement?.scrollIntoView({ behavior: "smooth" });
    },
  },
  {
    id: "telegram",
    title: "Telegram",
    description: "Connect through Telegram assistant",
    icon: "✈️",
    action: () => {
      const telegramElement = document.getElementById("telegram-reservation");
      telegramElement?.scrollIntoView({ behavior: "smooth" });
    },
  },
];

export function ReservationOptions() {
  const [hoveredOption, setHoveredOption] = useState<string | null>(null);

  return (
    <section className="py-24 px-6 bg-bg-base">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-text-primary mb-4">
            Choose Your Reservation Method
          </h2>
          <p className="text-lg text-text-secondary">
            Select the option that suits you best
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reservationOptions.map((option, index) => (
            <motion.div
              key={option.id}
              className="relative group cursor-pointer"
              onHoverStart={() => setHoveredOption(option.id)}
              onHoverEnd={() => setHoveredOption(null)}
              onClick={option.action}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="h-full p-8 rounded-2xl border border-accent-primary/20 bg-gradient-to-br from-accent-primary/5 to-transparent hover:border-accent-primary/40 transition-all duration-300">
                <div className="text-5xl mb-6">{option.icon}</div>
                <h3 className="text-2xl font-serif text-text-primary mb-3">
                  {option.title}
                </h3>
                <p className="text-text-secondary">{option.description}</p>
                
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-accent-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                  animate={{
                    opacity: hoveredOption === option.id ? 0.1 : 0,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
