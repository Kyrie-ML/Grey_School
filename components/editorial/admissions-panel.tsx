import Image from "next/image";
import { images } from "@/data/site";
import { Button } from "@/components/core/button";

export function AdmissionsPanel() {
  return <section className="relative overflow-hidden bg-growth text-white">
    <div className="absolute inset-y-0 right-0 hidden w-[42%] lg:block"><Image src={images.campus} alt="The welcoming grounds of Grey School Academy" fill sizes="42vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-r from-growth to-transparent" /></div>
    <div className="container-site relative py-24 lg:py-32"><div className="max-w-3xl"><p className="eyebrow text-sage">Your next step</p><h2 className="section-title text-white">Come and see Grey for yourself.</h2><p className="mt-7 max-w-2xl text-lg leading-8 text-white/80">The best way to understand our school is to experience it in person—meet our teachers, explore our classrooms and see how our pupils learn.</p><div className="mt-9 flex flex-wrap gap-3"><Button href="/contact#visit" variant="light">Book a visit</Button><Button href="/admissions" variant="outline" arrow>Explore admissions</Button></div></div></div>
  </section>;
}
