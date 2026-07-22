"use client";

import { motion } from "framer-motion";

export function RestaurantInfo() {
  return (
    <section className="py-24 px-6 bg-bg-base">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif text-text-primary mb-4">
            Visit Us
          </h2>
          <p className="text-lg text-text-secondary">
            Experience authentic Rajasthani hospitality in the heart of Mauritius
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            className="p-8 rounded-2xl border border-accent-primary/20 bg-gradient-to-br from-accent-primary/5 to-transparent"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="text-4xl mb-4">📍</div>
            <h3 className="text-2xl font-serif text-text-primary mb-3">Location</h3>
            <p className="text-text-secondary">
              123 Royal Street<br />
              Grand Baie, Mauritius
            </p>
          </motion.div>

          <motion.div
            className="p-8 rounded-2xl border border-accent-primary/20 bg-gradient-to-br from-accent-primary/5 to-transparent"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="text-4xl mb-4">🕐</div>
            <h3 className="text-2xl font-serif text-text-primary mb-3">Hours</h3>
            <p className="text-text-secondary">
              Monday - Sunday<br />
              11:00 AM - 11:00 PM
            </p>
          </motion.div>

          <motion.div
            className="p-8 rounded-2xl border border-accent-primary/20 bg-gradient-to-br from-accent-primary/5 to-transparent"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="text-4xl mb-4">📞</div>
            <h3 className="text-2xl font-serif text-text-primary mb-3">Contact</h3>
            <p className="text-text-secondary">
              Phone: +230 123 4567<br />
              Email: hello@padharo.mu
            </p>
          </motion.div>

          <motion.div
            className="p-8 rounded-2xl border border-accent-primary/20 bg-gradient-to-br from-accent-primary/5 to-transparent"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="text-4xl mb-4">🅿️</div>
            <h3 className="text-2xl font-serif text-text-primary mb-3">Parking</h3>
            <p className="text-text-secondary">
              Complimentary parking<br />
              Available on-site
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
