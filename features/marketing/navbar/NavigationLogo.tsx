import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { MouseEvent } from "react";

import { cn } from "@/lib/utils";

type NavigationLogoProps = {
  label: string;
  onNavigate?: (event: MouseEvent<HTMLAnchorElement>) => void;
  className?: string;
};

export function NavigationLogo({ label, onNavigate, className }: NavigationLogoProps) {
  return (
    <motion.div className={cn("nav-logo-scale", className)} whileHover={{ opacity: 0.92 }}>
      <Link
        aria-label="Go to homepage"
        className="focus-ring inline-flex items-center transition-opacity duration-[var(--duration-fast)]"
        href="/"
        onClick={onNavigate}
      >
        <Image
          src="https://res.cloudinary.com/zrqybpla/image/upload/v1784608071/Logo-padharo-sa1-1024x410_ro9af0.webp"
          alt={label}
          width={200}
          height={80}
          className="h-12 w-auto object-contain"
        />
      </Link>
    </motion.div>
  );
}
