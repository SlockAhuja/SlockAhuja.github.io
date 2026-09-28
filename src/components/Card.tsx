import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface CardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const Card = ({ children, className, delay = 0 }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "bg-navy-800 border border-navy-700 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.05)]",
        className
      )}
    >
      {children}
    </motion.div>
  );
};
