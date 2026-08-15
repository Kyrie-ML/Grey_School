"use client";

import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
  { value: 12, suffix: ":1", label: "Pupil–teacher ratio" },
  { value: 20, suffix: "+", label: "Weekly clubs" },
  { value: 95, suffix: "%", label: "Parent satisfaction" },
  { value: 100, suffix: "%", label: "Known by name" },
];

function Stat({ value, suffix, label, index }: (typeof stats)[number] & { index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, latest => `${Math.round(latest)}${suffix}`);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, { duration: 1.25, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] });
    return controls.stop;
  }, [count, inView, index, value]);
  return <div ref={ref} className={`relative px-3 py-7 md:px-8 ${index > 0 ? "border-l border-midnight/12" : ""}`}><motion.strong className="block font-sans text-[clamp(2.75rem,5vw,5.25rem)] font-medium tracking-[-.065em] text-midnight">{rounded}</motion.strong><span className="mt-2 block text-[.65rem] font-bold uppercase tracking-[.15em] text-slate">{label}</span><span className="absolute left-3 top-0 h-px w-8 bg-gold md:left-8" /></div>;
}

export function StatsBand() {
  return <section aria-label="Grey School at a glance" className="bg-cream py-8"><div className="container-site grid grid-cols-2 border-y border-midnight/10 md:grid-cols-4">{stats.map((stat, index) => <Stat key={stat.label} {...stat} index={index} />)}</div></section>;
}
