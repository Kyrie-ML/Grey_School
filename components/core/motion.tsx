"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion";
import type { ReactNode } from "react";

export const editorialEase = [0.22, 1, 0.36, 1] as const;

export const reveal: Variants = {
  hidden: { opacity: 0.35, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.78, ease: editorialEase } },
};

export const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.06 } },
};

export const imageReveal: Variants = {
  hidden: { opacity: 0.45, clipPath: "inset(10% 0 20% 0)", scale: 1.025 },
  visible: { opacity: 1, clipPath: "inset(0% 0 0% 0)", scale: 1, transition: { duration: 0.92, ease: editorialEase } },
};

export const softScale: Variants = {
  hidden: { opacity: 0.45, scale: 1.025 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.9, ease: editorialEase } },
};

type MotionBlockProps = HTMLMotionProps<"div"> & { children: ReactNode; delay?: number };

export function FadeReveal({ children, className = "", delay = 0, ...props }: MotionBlockProps) {
  const reduced = useReducedMotion();
  return <motion.div initial={reduced ? false : { y: 24 }} whileInView={{ y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: reduced ? 0 : 0.72, delay, ease: editorialEase }} className={className} {...props}>{children}</motion.div>;
}

export function ImageMaskReveal({ children, className = "", delay = 0, ...props }: MotionBlockProps) {
  const reduced = useReducedMotion();
  return <motion.div initial={reduced ? false : { opacity: 0.6, clipPath: "inset(14% 0 24% 0)", scale: 1.025 }} whileInView={{ opacity: 1, clipPath: "inset(0% 0 0% 0)", scale: 1 }} viewport={{ once: true, amount: 0.16 }} transition={{ duration: reduced ? 0 : 0.88, delay, ease: editorialEase }} className={className} {...props}>{children}</motion.div>;
}

export function ImagePop({ children, className = "", delay = 0, ...props }: MotionBlockProps) {
  const reduced = useReducedMotion();
  return <motion.div initial={reduced ? false : { opacity: 0.6, y: 22, scale: 0.94, rotate: -1.2 }} whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }} viewport={{ once: true, amount: 0.16 }} transition={{ duration: reduced ? 0 : 0.7, delay, ease: editorialEase }} className={className} {...props}>{children}</motion.div>;
}

export function StaggerGroup({ children, className = "", ...props }: HTMLMotionProps<"div"> & { children: ReactNode }) {
  return <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.14 }} className={className} {...props}>{children}</motion.div>;
}

export function CrossfadeMedia({ mediaKey, children, className = "" }: { mediaKey: string | number; children: ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return <AnimatePresence mode="wait" initial={false}><motion.div key={mediaKey} initial={reduced ? false : { opacity: 0, x: 8, scale: 1.015 }} animate={{ opacity: 1, x: 0, scale: 1 }} exit={reduced ? undefined : { opacity: 0, x: -8, scale: 0.995 }} transition={{ duration: reduced ? 0 : 0.38, ease: editorialEase }} className={className}>{children}</motion.div></AnimatePresence>;
}

export function CounterReveal({ value, label, delay = 0 }: { value: string; label: string; delay?: number }) {
  const reduced = useReducedMotion();
  return <motion.div initial={reduced ? false : { y: 12 }} whileInView={{ y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: reduced ? 0 : 0.68, delay, ease: editorialEase }}><strong className="block font-sans text-[clamp(2.75rem,5vw,5.25rem)] font-medium tracking-[-.065em] text-midnight">{value}</strong><span className="mt-2 block text-[.65rem] font-bold uppercase tracking-[.15em] text-midnight">{label}</span></motion.div>;
}

export const Reveal = FadeReveal;
