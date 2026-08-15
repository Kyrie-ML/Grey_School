"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { images } from "@/data/site";
import { editorialEase } from "@/components/core/motion";

const moments = [
  { src: images.sport, label: "Sport", copy: "Finding courage in the team.", className: "col-span-2 lg:col-span-7 aspect-[16/10]", x: -24, y: 12 },
  { src: images.heroArt, label: "Art", copy: "Making an idea visible.", className: "lg:col-span-5 row-span-2 min-h-[340px]", x: 18, y: 16 },
  { src: images.music, label: "Music", copy: "Listening, then finding a voice.", className: "lg:col-span-4 aspect-square", x: -14, y: 20 },
  { src: images.heroReading, label: "Reading", copy: "Quiet space for a big question.", className: "lg:col-span-3 aspect-square", x: 16, y: 22 },
];

export function StudentLifeMosaic() {
  const reduced = useReducedMotion();
  return <div className="grid grid-cols-2 gap-3 lg:col-span-8 lg:grid-cols-12">{moments.map((item, index) => <motion.div key={item.label} initial={reduced ? false : { opacity: 0.5, x: item.x, y: item.y, clipPath: "inset(8% 0 14% 0)" }} whileInView={{ opacity: 1, x: 0, y: 0, clipPath: "inset(0% 0 0% 0)" }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: reduced ? 0 : 0.72, delay: index * 0.11, ease: editorialEase }} className={item.className}><Link href="/student-life" className="focus-ring group relative block h-full min-h-[210px] overflow-hidden"><Image src={item.src} alt={`${item.label} at Grey School Academy`} fill sizes="(min-width:1024px) 40vw, 50vw" className="object-cover transition duration-700 group-hover:scale-[1.03]" /><span className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-midnight/5 to-transparent opacity-65 transition group-hover:opacity-90" /><span className="absolute inset-x-0 bottom-0 translate-y-5 p-4 text-white transition duration-300 group-hover:translate-y-0"><span className="block text-[.62rem] font-bold uppercase tracking-[.15em]">{item.label}</span><span className="mt-2 flex items-center justify-between text-xs opacity-0 transition group-hover:opacity-100">{item.copy}<ArrowUpRight className="h-4 w-4" /></span></span></Link></motion.div>)}</div>;
}
