"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function ReservationFinalCTA() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-bg-base to-accent-primary/10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif text-text-primary mb-6">
            Your Table Awaits
          </h2>
          <p className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto">
            Join us for an unforgettable dining experience. Reserve your table today and discover the flavors of Rajasthan.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/reserve">
              <motion.button
                className="text-cta focus-ring inline-flex min-h-[var(--touch-target-min)] items-center justify-center rounded-[var(--radius-pill)] bg-accent-primary px-[var(--space-8)] text-bg-base transition-colors duration-[var(--duration-fast)] hover:bg-accent-hover"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Reserve Now
              </motion.button>
            </Link>
            
            <Link href="/menu">
              <motion.button
                className="text-cta focus-ring inline-flex min-h-[var(--touch-target-min)] items-center justify-center rounded-[var(--radius-pill)] border-2 border-accent-primary px-[var(--space-8)] text-accent-primary transition-colors duration-[var(--duration-fast)] hover:bg-accent-primary hover:text-bg-base"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Menu
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
