"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { images, testimonials } from "@/data/site";

export function Testimonials() {
  const [active, setActive] = useState(0);
  return <div className="grid items-stretch gap-0 lg:grid-cols-[.75fr_1.25fr]">
    <div className="relative min-h-[460px] overflow-hidden"><Image src={images.community} alt="A warm classroom exchange within the Grey community" fill sizes="(min-width:1024px) 38vw, 100vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-midnight/65 via-transparent to-transparent" /><p className="absolute bottom-7 left-7 max-w-xs font-serif text-2xl italic text-white">A community built through attention, conversation and trust.</p></div>
    <div className="flex min-h-[560px] flex-col justify-between border-y border-r border-white/15 p-8 sm:p-12 lg:p-16"><div><p className="eyebrow text-sage">Parent voices</p><h2 className="section-title max-w-xl text-white">What families notice.</h2></div><div aria-live="polite" className="mt-14"><AnimatePresence mode="wait"><motion.div key={active} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: .4 }}><span className="font-serif text-6xl leading-none text-gold">“</span><blockquote className="-mt-4 font-serif text-[clamp(1.85rem,3.3vw,3.25rem)] italic leading-[1.12] tracking-[-.02em] text-white">{testimonials[active].quote}</blockquote><p className="mt-7 text-[.68rem] font-semibold uppercase tracking-[.14em] text-white/55">{testimonials[active].attribution}</p></motion.div></AnimatePresence></div><div className="mt-10 flex items-center gap-3"><span className="text-[.62rem] font-bold tracking-[.15em] text-white/45">0{active + 1}</span>{testimonials.map((_, index) => <button key={index} onClick={() => setActive(index)} aria-label={`Show testimonial ${index + 1}`} aria-pressed={active === index} className={`focus-ring h-px transition-all ${active === index ? "w-14 bg-sage" : "w-8 bg-white/25"}`} />)}</div></div>
  </div>;
}
