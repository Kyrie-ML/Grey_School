"use client";

import { useState } from "react";
import { testimonials } from "@/data/site";

export function Testimonials() {
  const [active, setActive] = useState(0);
  return <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
    <div><p className="eyebrow text-sage">Parent voices</p><h2 className="section-title text-white">What families notice.</h2><div className="mt-10 flex gap-2">{testimonials.map((_, index) => <button key={index} onClick={() => setActive(index)} aria-label={`Show testimonial ${index + 1}`} aria-pressed={active === index} className={`focus-ring h-1.5 transition-all ${active === index ? "w-12 bg-sage" : "w-7 bg-white/25"}`} />)}</div></div>
    <div aria-live="polite"><span className="font-serif text-7xl leading-none text-sage">“</span><blockquote className="-mt-5 font-serif text-[clamp(2rem,4vw,4rem)] italic leading-[1.08] tracking-[-.025em] text-white">{testimonials[active].quote}</blockquote><p className="mt-8 text-sm font-semibold text-white/60">{testimonials[active].attribution}</p></div>
  </div>;
}
