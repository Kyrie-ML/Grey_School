"use client";

import Image from "next/image";
import { CounterReveal, FadeReveal, ImageMaskReveal, ImagePop } from "@/components/core/motion";
import { Container, Eyebrow } from "@/components/core/container";
import { images } from "@/data/site";

export function InsideGreyToday() {
  return <section className="inside-grey overflow-hidden bg-midnight py-24 text-white md:py-32">
    <Container>
      <div className="grid items-end gap-8 md:grid-cols-2"><div><Eyebrow className="text-sage">Inside Grey Today</Eyebrow><h2 className="section-title max-w-2xl text-white">A few moments from an ordinary day.</h2></div><p className="max-w-md leading-7 text-white/62 md:justify-self-end">Learning at Grey moves between careful concentration, shared discoveries and the simple joy of making something together.</p></div>
      <div className="mt-14 grid auto-rows-[150px] grid-cols-2 gap-3 md:auto-rows-[170px] md:grid-cols-12">
        <ImageMaskReveal className="relative col-span-2 row-span-3 overflow-hidden md:col-span-7 md:row-span-3"><Image src={images.heroScienceAlt} alt="Pupils testing an idea during a practical science lesson" fill sizes="(min-width:768px) 58vw, 100vw" className="object-cover" /><span className="absolute inset-0 bg-gradient-to-t from-midnight/70 via-transparent to-transparent" /><span className="absolute bottom-6 left-6 text-[.65rem] font-bold uppercase tracking-[.16em] text-white">Year 5 · Science</span></ImageMaskReveal>
        <FadeReveal delay={0.08} className="col-span-1 row-span-1 flex flex-col justify-between border border-white/20 p-5 md:col-span-2"><time className="font-serif text-3xl italic text-sage">08:45</time><p className="text-xs font-bold uppercase leading-5 tracking-[.13em] text-white/90">Pond study<br />Year 5</p></FadeReveal>
        <ImagePop delay={0.16} className="relative col-span-1 row-span-2 overflow-hidden md:col-span-3"><Image src={images.heroArt} alt="Children creating together in the art studio" fill sizes="(min-width:768px) 25vw, 50vw" className="object-cover" /><span className="absolute inset-0 bg-gradient-to-t from-midnight/65 via-transparent to-transparent" /><span className="absolute bottom-4 left-4 text-[.6rem] font-bold uppercase tracking-[.15em]">14:00 · Art studio</span></ImagePop>
        <FadeReveal delay={0.24} className="col-span-2 row-span-1 flex items-center border-y border-sage/25 px-5 md:col-span-5"><blockquote className="font-serif text-xl italic leading-7 text-sage">“Today we tested three ideas. One worked.”<cite className="mt-2 block font-sans text-[.58rem] not-italic uppercase tracking-[.14em] text-white/75">Eli · Year 5</cite></blockquote></FadeReveal>
        <FadeReveal delay={0.3} className="col-span-1 row-span-1 bg-sage p-5 text-midnight md:col-span-2"><CounterReveal value="20+" label="Weekly clubs" /></FadeReveal>
        <ImagePop delay={0.36} className="relative col-span-1 row-span-2 overflow-hidden md:col-span-5 md:row-span-1"><Image src={images.sport} alt="Pupils enjoying outdoor team sport" fill sizes="(min-width:768px) 42vw, 50vw" className="object-cover" /><span className="absolute inset-0 bg-gradient-to-t from-midnight/65 to-transparent" /><span className="absolute bottom-4 left-4 text-[.6rem] font-bold uppercase tracking-[.15em]">12:45 · Outdoor play</span></ImagePop>
      </div>
    </Container>
  </section>;
}
