import { HeroConstellation } from "@/components/home/hero-constellation";
import { Button } from "@/components/core/button";

export function HomeHero() {
  return <section className="hero-dashboard relative overflow-hidden bg-midnight text-white">
    <div className="container-site relative grid min-h-[900px] grid-cols-[minmax(0,1fr)] items-center gap-10 pb-7 pt-36 lg:grid-cols-[44fr_56fr] lg:gap-0 lg:pb-0 lg:pt-32">
      <div className="relative z-20 min-w-0 max-w-2xl lg:pr-8 xl:pr-14">
        <p className="eyebrow hero-copy hero-copy-1 text-sage">An international junior school · Nairobi</p>
        <h1 className="display text-[clamp(3rem,5.8vw,6.25rem)]">
          <span className="hero-copy hero-copy-2 block">A world of learning,</span>
          <span className="hero-copy hero-copy-3 block font-serif font-normal italic tracking-[-.035em] text-sage">built around the child.</span>
        </h1>
        <p className="hero-copy hero-copy-4 mt-7 max-w-xl text-base leading-7 text-white/75 md:text-lg">A thoughtful, ambitious school where children are known deeply, taught exceptionally and encouraged to meet the world with confidence.</p>
        <div className="hero-copy hero-copy-5 mt-7 flex flex-wrap gap-3"><Button href="/about" variant="light" arrow>Discover Grey</Button><Button href="/contact#visit" variant="outline">Book a Visit</Button></div>
        <a href="/admissions" className="hero-copy hero-copy-6 focus-ring mt-6 inline-block text-[.68rem] font-bold uppercase tracking-[.18em] text-sage hover:text-white">Admissions 2026/27 →</a>
      </div>
      <HeroConstellation />
      <div className="hero-copy hero-copy-rail relative z-20 col-span-full mt-7 grid border-t border-white/25 text-[.62rem] uppercase tracking-[.16em] text-white/60 sm:grid-cols-3 lg:mt-0">
        <div className="border-b border-white/15 py-4 sm:border-b-0 sm:border-r"><strong className="mr-2 text-white">Junior School</strong>Ages 4–11</div>
        <div className="hidden py-4 text-center sm:block sm:border-r">Westbrook · Nairobi</div>
        <a href="/admissions" className="py-4 text-left font-bold text-white hover:text-sage sm:text-right">Admissions 2026/27 · Now Open</a>
      </div>
    </div>
  </section>;
}
