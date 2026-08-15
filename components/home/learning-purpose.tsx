"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { Container, SectionHeading } from "@/components/core/container";
import { editorialEase } from "@/components/core/motion";
import { images } from "@/data/site";

const principles = [
  { number: "01", title: "Know", copy: "Core knowledge gives children something substantial to think with.", image: images.heroReading, alt: "Pupils reading and building secure knowledge together" },
  { number: "02", title: "Question", copy: "Curiosity turns information into insight and memorable understanding.", image: images.heroScience, alt: "A child testing an idea during science" },
  { number: "03", title: "Contribute", copy: "Communication and character help learning travel beyond the individual.", image: images.heroArt, alt: "Children making and contributing ideas together" },
];

export function LearningPurpose() {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  return <section className="section-space bg-porcelain">
    <Container><div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-6"><div className="lg:sticky lg:top-32"><SectionHeading eyebrow="Academic philosophy" title="Learning with purpose." intro="Knowledge matters. So does knowing what to do with it. We give children secure foundations, then invite them to question, connect, make and explain." />
        <div className="relative mt-10 aspect-[4/5] min-h-[420px] overflow-hidden bg-sage"><AnimatePresence initial={false} mode="popLayout">{principles.map((item, index) => index === active && <motion.div key={item.title} initial={reduced ? false : { opacity: 0, scale: 1.025, clipPath: "inset(8% 0 16% 0)" }} animate={{ opacity: 1, scale: 1, clipPath: "inset(0% 0 0% 0)" }} exit={{ opacity: 0, scale: 0.99 }} transition={{ duration: reduced ? 0 : 0.55, ease: editorialEase }} className="absolute inset-0"><Image src={item.image} alt={item.alt} fill sizes="(min-width:1024px) 46vw, 100vw" className="object-cover" /><span className="absolute inset-0 bg-gradient-to-t from-midnight/60 to-transparent" /><span className="absolute bottom-6 left-6 text-[.62rem] font-bold uppercase tracking-[.16em] text-white">{item.number} · {item.title}</span></motion.div>)}</AnimatePresence></div>
      </div></div>
      <div className="lg:col-span-6 lg:pt-40">{principles.map((item, index) => <motion.article key={item.title} onViewportEnter={() => setActive(index)} viewport={{ amount: 0.58 }} transition={{ duration: reduced ? 0 : 0.35 }} className="min-h-[270px] border-t border-midnight/15 py-10"><motion.span animate={{ color: active === index ? "#2B5F8F" : "#52715E" }} className="text-[.65rem] font-bold tracking-[.16em]">{item.number}</motion.span><h3 className={`mt-5 font-sans text-4xl font-semibold tracking-tight text-midnight transition-transform duration-500 ${active === index ? "translate-x-2" : ""}`}>{item.title}</h3><p className="mt-4 max-w-md leading-7 text-slate">{item.copy}</p></motion.article>)}</div>
    </div></Container>
  </section>;
}
