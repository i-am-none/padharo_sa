import { motion } from 'framer-motion';

interface ImageRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export function ImageReveal({
  children,
  delay = 0,
  duration = 0.8,
  className = '',
}: ImageRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.1 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ delay, duration, ease: [0.22, 0.61, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
