"use client";

import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "23012345678"; // Replace with actual WhatsApp number

export function WhatsAppReservation() {
  const handleWhatsAppReservation = () => {
    const message = `Hello Jain's Little India,

I would like to reserve a table.

Name:
Date:
Time:
Guests:`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="whatsapp-reservation" className="py-24 px-6 bg-bg-base">
      <div className="max-w-2xl mx-auto">
        <motion.div
          className="p-12 rounded-2xl border border-green-500/30 bg-gradient-to-br from-green-500/10 to-transparent text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-6xl mb-6">💬</div>
          <h2 className="text-3xl font-serif text-text-primary mb-4">
            Reserve via WhatsApp
          </h2>
          <p className="text-text-secondary mb-8">
            Chat directly with our team for instant assistance with your reservation
          </p>
          <motion.button
            onClick={handleWhatsAppReservation}
            className="w-full text-cta focus-ring inline-flex min-h-[var(--touch-target-min)] items-center justify-center rounded-[var(--radius-pill)] bg-green-500 px-[var(--space-6)] text-bg-base transition-colors duration-[var(--duration-fast)] hover:bg-green-600"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Open WhatsApp
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
