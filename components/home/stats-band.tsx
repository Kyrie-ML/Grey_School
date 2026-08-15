"use client";

import { CounterReveal } from "@/components/core/motion";

const stats = [
  { value: "12:1", label: "Pupil–teacher ratio" },
  { value: "20+", label: "Weekly clubs" },
  { value: "95%", label: "Parent satisfaction" },
  { value: "100%", label: "Known by name" },
];

export function StatsBand() {
  return <section aria-label="Grey School at a glance" className="bg-cream py-8"><div className="container-site grid grid-cols-2 border-y border-midnight/10 md:grid-cols-4">{stats.map((stat, index) => <div key={stat.label} className={`relative px-3 py-7 md:px-8 ${index > 0 ? "border-l border-midnight/12" : ""}`}><CounterReveal {...stat} delay={index * 0.08} /><span className="absolute left-3 top-0 h-px w-8 bg-gold md:left-8" /></div>)}</div></section>;
}
