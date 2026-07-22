"use client";

import { motion } from "framer-motion";

const TELEGRAM_BOT_USERNAME = "padharo_sa_bot"; // Replace with actual Telegram bot username

export function TelegramReservation() {
  const handleTelegramReservation = () => {
    const telegramUrl = `https://t.me/${TELEGRAM_BOT_USERNAME}`;
    window.open(telegramUrl, "_blank");
  };

  return (
    <section id="telegram-reservation" className="py-24 px-6 bg-bg-base">
      <div className="max-w-2xl mx-auto">
        <motion.div
          className="p-12 rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-transparent text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-6xl mb-6">✈️</div>
          <h2 className="text-3xl font-serif text-text-primary mb-4">
            Reserve via Telegram
          </h2>
          <p className="text-text-secondary mb-8">
            Connect with our Telegram assistant for quick and easy reservations
          </p>
          <motion.button
            onClick={handleTelegramReservation}
            className="w-full text-cta focus-ring inline-flex min-h-[var(--touch-target-min)] items-center justify-center rounded-[var(--radius-pill)] bg-blue-500 px-[var(--space-6)] text-bg-base transition-colors duration-[var(--duration-fast)] hover:bg-blue-600"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Open Telegram
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
