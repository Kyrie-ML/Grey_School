"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { images } from "@/data/site";
import { Button } from "@/components/core/button";

export function HomeHero() {
  const ease = [0.22, 1, 0.36, 1] as const;
  return <section className="relative min-h-[calc(100svh-118px)] overflow-hidden bg-midnight text-white">
    <motion.div initial={{ scale: 1.07, opacity: .7 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.3, ease }} className="absolute inset-0"><Image src={images.hero} alt="Pupils engaged in a bright classroom at Grey School Academy" fill priority sizes="100vw" className="object-cover object-center" /></motion.div>
    <div className="absolute inset-0 bg-gradient-to-r from-midnight/90 via-midnight/55 to-midnight/10" /><div className="absolute inset-0 bg-gradient-to-t from-midnight/70 via-transparent to-transparent" />
    <div className="container-site relative flex min-h-[calc(100svh-118px)] flex-col justify-end pb-10 pt-24 lg:pb-14">
      <div className="max-w-5xl">
        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .25, duration: .6 }} className="eyebrow text-sage">Grey School Academy</motion.p>
        <h1 className="display max-w-[950px]">
          <motion.span initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .4, duration: .75, ease }} className="block">Where curiosity</motion.span>
          <motion.span initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .54, duration: .75, ease }} className="block font-serif font-normal italic tracking-[-.045em] text-sage">becomes confidence.</motion.span>
        </h1>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .75, duration: .65 }} className="mt-8 flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
          <div><p className="max-w-xl text-base leading-7 text-white/80 md:text-lg">A thoughtful, ambitious junior school where children learn deeply, grow confidently and discover who they can become.</p><div className="mt-7 flex flex-wrap gap-3"><Button href="/about" variant="light" arrow>Discover Grey</Button><Button href="/contact#visit" variant="outline">Book a visit</Button></div></div>
          <a href="#welcome" className="focus-ring hidden items-center gap-3 text-xs font-bold uppercase tracking-[.18em] lg:flex">Begin the story <span className="grid h-11 w-11 place-items-center rounded-full border border-white/30"><ArrowDown className="h-4 w-4" /></span></a>
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.05 }} className="mt-10 flex items-end justify-between border-t border-white/25 pt-5 text-xs uppercase tracking-[.14em] text-white/70"><span><strong className="mr-2 text-white">Junior School</strong> Ages 4–11</span><a href="/admissions" className="font-bold text-white hover:text-sage">Admissions 2026/27 →</a></motion.div>
    </div>
  </section>;
}
