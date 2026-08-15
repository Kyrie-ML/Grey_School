"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export const reveal: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

export const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.08 } },
};

export const imageReveal: Variants = {
  hidden: { opacity: 0, clipPath: "inset(8% 0 18% 0)" },
  visible: { opacity: 1, clipPath: "inset(0% 0 0% 0)", transition: { duration: 1.05, ease } },
};

export const softScale: Variants = {
  hidden: { opacity: 0, scale: 1.035 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1.1, ease } },
};

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ delay }} className={className}>{children}</motion.div>;
}

