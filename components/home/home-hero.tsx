import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { images } from "@/data/site";
import { Button } from "@/components/core/button";

export function HomeHero() {
  return <section className="relative min-h-[94svh] overflow-hidden bg-midnight text-white">
    <div className="absolute inset-0 quiet-drift"><Image src={images.hero} alt="Pupils engaged together in a bright classroom at Grey School Academy" fill priority sizes="100vw" className="object-cover object-[62%_center] md:object-center" /></div>
    <div className="absolute inset-0 bg-gradient-to-r from-midnight/90 via-midnight/42 to-midnight/5" /><div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-midnight/25" />
    <div className="absolute bottom-0 right-[7%] top-[20%] hidden w-px bg-white/20 lg:block" />
    <div className="container-site relative flex min-h-[94svh] flex-col justify-end pb-7 pt-40 lg:pb-9">
      <div className="max-w-[1060px]">
        <p className="eyebrow text-sage">An international junior school · Nairobi</p>
        <h1 className="display max-w-[1000px]">
          <span className="block">A world of learning,</span>
          <span className="block font-serif font-normal italic tracking-[-.035em] text-sage">built around the child.</span>
        </h1>
        <div className="mt-7 flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between lg:mt-9">
          <div><p className="max-w-xl text-base leading-7 text-white/82 md:text-lg">A thoughtful, ambitious school where children are known deeply, taught exceptionally and encouraged to meet the world with confidence.</p><div className="mt-7 flex flex-wrap gap-3"><Button href="/about" variant="light" arrow>Discover Grey</Button><Button href="/contact#visit" variant="outline">Book a visit</Button></div></div>
          <a href="#welcome" className="focus-ring hidden items-center gap-3 text-[.68rem] font-bold uppercase tracking-[.18em] lg:flex">Enter the story <span className="grid h-11 w-11 place-items-center border border-white/35"><ArrowDown className="h-4 w-4" /></span></a>
        </div>
      </div>
      <div className="mt-9 grid border-t border-white/30 text-[.62rem] uppercase tracking-[.16em] text-white/65 sm:grid-cols-3 lg:mt-11">
        <div className="border-b border-white/20 py-4 sm:border-b-0 sm:border-r"><strong className="mr-2 text-white">Junior School</strong>Ages 4–11</div>
        <div className="hidden py-4 text-center sm:block sm:border-r">Westbrook · Nairobi</div>
        <a href="/admissions" className="py-4 text-left font-bold text-white hover:text-sage sm:text-right">Admissions 2026/27 →</a>
      </div>
    </div>
  </section>;
}
