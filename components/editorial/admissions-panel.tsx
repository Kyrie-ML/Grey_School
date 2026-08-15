import Image from "next/image";
import { images } from "@/data/site";
import { Button } from "@/components/core/button";

export function AdmissionsPanel() {
  return <section className="overflow-hidden bg-sandstone">
    <div className="container-site grid min-h-[640px] items-stretch py-12 lg:grid-cols-12 lg:py-20"><div className="flex flex-col justify-center py-16 lg:col-span-7 lg:pr-16"><p className="eyebrow text-growth">A personal invitation</p><h2 className="section-title text-midnight">Come and see how your child might feel here.</h2><p className="mt-7 max-w-2xl text-lg leading-8 text-slate">Visit during an ordinary school day: meet our teachers, step into the rhythm of a lesson and notice the small exchanges that make Grey feel like Grey.</p><div className="mt-9 flex flex-wrap gap-3"><Button href="/contact#visit">Book a personal visit</Button><Button href="/admissions" variant="text" arrow>How admissions works</Button></div></div><div className="relative min-h-[420px] lg:col-span-5"><Image src={images.campus} alt="The welcoming grounds of Grey School Academy" fill sizes="(min-width:1024px) 42vw, 100vw" className="object-cover" /><div className="absolute bottom-0 left-0 bg-midnight p-6 text-white"><p className="font-serif text-2xl italic text-sage">We would love to meet you.</p><p className="mt-2 text-[.62rem] uppercase tracking-[.15em] text-white/55">Admissions team · Monday–Friday</p></div></div></div>
  </section>;
}
