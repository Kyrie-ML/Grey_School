"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { curriculum } from "@/data/site";
import { LinkArrow } from "@/components/core/button";

export function CurriculumExplorer() {
  const [active, setActive] = useState(0);
  const subject = curriculum[active];
  return <div className="mt-14">
    <div className="hidden overflow-hidden border-y border-midnight/15 lg:grid lg:grid-cols-[.68fr_1.32fr]">
      <div role="tablist" aria-label="Curriculum subjects" className="border-r border-midnight/15 py-5 pr-7 xl:pr-12">
        {curriculum.map((item, index) => <button key={item.name} role="tab" aria-selected={active === index} aria-controls="curriculum-panel" onClick={() => setActive(index)} className={`focus-ring flex w-full items-center gap-5 border-b border-hairline py-3.5 text-left font-sans text-base font-semibold transition ${active === index ? "text-scholastic" : "text-midnight hover:text-scholastic"}`}><span className={`text-[.6rem] tracking-[.12em] ${active === index ? "text-growth" : "text-slate/50"}`}>{String(index + 1).padStart(2, "0")}</span><span className="flex-1">{item.name}</span><span className={`h-px transition-all ${active === index ? "w-8 bg-growth" : "w-0 bg-transparent"}`} /></button>)}
      </div>
      <div id="curriculum-panel" role="tabpanel" aria-live="polite" className="min-h-[610px]"><AnimatePresence mode="wait"><motion.div key={subject.name} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} transition={{ duration: .38 }} className="grid min-h-[610px] grid-rows-[1fr_auto]"><div className="relative min-h-[340px] overflow-hidden"><Image src={subject.image} alt={`${subject.name} learning at Grey School Academy`} fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-midnight/55 to-transparent" /><p className="absolute bottom-6 left-7 font-sans text-xs font-bold uppercase tracking-[.18em] text-white">{subject.kicker}</p></div><div className="grid gap-8 bg-cream p-8 xl:grid-cols-[1fr_.75fr] xl:p-10"><div><h3 className="font-sans text-4xl font-semibold tracking-tight text-midnight">{subject.name}</h3><p className="mt-4 max-w-xl leading-7 text-slate">{subject.description}</p></div><div><p className="mb-3 text-xs font-bold uppercase tracking-[.16em] text-growth">Pupils learn to</p><ul className="space-y-2">{subject.outcomes.map(o => <li key={o} className="border-b border-hairline pb-2 text-sm font-medium">{o}</li>)}</ul></div></div></motion.div></AnimatePresence>
      </div>
    </div>
    <div className="border-t border-hairline lg:hidden">{curriculum.map((item, index) => <div key={item.name} className="border-b border-hairline"><button aria-expanded={active === index} onClick={() => setActive(index)} className="focus-ring flex min-h-16 w-full items-center justify-between py-4 text-left font-sans text-lg font-semibold text-midnight">{item.name}<ChevronDown className={`h-5 w-5 transition ${active === index ? "rotate-180" : ""}`} /></button>{active === index && <div className="pb-7"><div className="relative mb-5 aspect-[16/9]"><Image src={item.image} alt={`${item.name} learning`} fill sizes="100vw" className="object-cover" /></div><p className="text-sm leading-7 text-slate">{item.description}</p><ul className="mt-4 flex flex-wrap gap-2">{item.outcomes.map(o => <li key={o} className="bg-sage px-3 py-2 text-xs font-semibold text-midnight">{o}</li>)}</ul></div>}</div>)}</div>
    <LinkArrow href="/academics#curriculum" className="mt-8 text-scholastic">Explore the full curriculum</LinkArrow>
  </div>;
}
