"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Container, SectionHeading } from "@/components/core/container";
import { LinkArrow } from "@/components/core/button";
import { editorialEase } from "@/components/core/motion";
import { stages } from "@/data/site";

export function LearningJourney() {
  const reduced = useReducedMotion();
  return <section className="section-space overflow-hidden bg-sage/30"><Container><SectionHeading eyebrow="The learning journey" title="Growing, one assured step at a time." intro="The years from four to eleven are a remarkable stretch of childhood. Each stage at Grey has its own pace, purpose and possibility." />
    <div className="relative mt-16 grid gap-8 lg:grid-cols-3 lg:gap-0"><motion.div className="absolute left-0 right-0 top-7 hidden h-px origin-left bg-growth/45 lg:block" initial={reduced ? false : { scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: reduced ? 0 : 1.4, ease: editorialEase }} />
      {stages.map((stage, index) => <motion.article key={stage.name} initial={reduced ? false : { y: 30 }} whileInView={{ y: 0 }} viewport={{ once: true, amount: 0.22 }} transition={{ duration: reduced ? 0 : 0.72, delay: index * 0.16, ease: editorialEase }} className={`relative ${index > 0 ? "lg:pt-20" : ""} ${index === 2 ? "lg:pt-40" : ""}`}><div className="relative z-10 mb-7 flex items-center gap-4"><motion.span whileInView={reduced ? undefined : { scale: [0.86, 1] }} viewport={{ once: true }} className="grid h-14 w-14 place-items-center rounded-full bg-growth font-sans text-xs font-bold text-white">0{index + 1}</motion.span><span className="text-xs font-bold uppercase tracking-[.16em] text-growth">{stage.ages}</span></div><motion.div className="relative aspect-[4/5] overflow-hidden lg:mr-7" initial={reduced ? false : { clipPath: "inset(0 0 100% 0)", scale: 1.03 }} whileInView={{ clipPath: "inset(0 0 0% 0)", scale: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: reduced ? 0 : 0.8, delay: 0.12 + index * 0.12, ease: editorialEase }}><Image src={stage.image} alt={`${stage.name} stage pupils learning together`} fill sizes="(min-width: 1024px) 30vw, 100vw" className="object-cover transition duration-700 hover:scale-[1.03]" /></motion.div><div className="relative -mt-12 ml-7 bg-cream p-7"><h3 className="font-sans text-4xl font-semibold tracking-tight text-midnight">{stage.name}</h3><p className="mt-4 text-sm leading-6 text-slate">{stage.copy}</p><div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">{stage.priorities.map(priority => <span className="text-xs font-bold text-growth" key={priority}>{priority}</span>)}</div><LinkArrow href="/academics#stages" className="mt-6 text-scholastic">Explore this stage</LinkArrow></div></motion.article>)}
    </div></Container></section>;
}
