"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { images, navigation } from "@/data/site";
import { Logo } from "./logo";
import { Button } from "@/components/core/button";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => { document.body.style.overflow = mobileOpen ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [mobileOpen]);

  const light = !scrolled && !mobileOpen;
  return <>
    <div className="fixed inset-x-0 top-0 z-[70] h-8 bg-midnight px-5 text-white">
      <div className="container-site flex h-full items-center justify-center font-sans text-[.62rem] font-semibold uppercase tracking-[.13em] sm:justify-between">
        <span>Admissions for 2026/27 are open <Link className="ml-2 text-sage underline decoration-white/25" href="/admissions">Enquire</Link></span>
        <nav aria-label="Utility navigation" className="hidden items-center gap-6 text-white/65 sm:flex"><Link className="hover:text-white" href="/parent-portal">Parent Portal</Link><Link className="hover:text-white" href="/news#events">Calendar</Link></nav>
      </div>
    </div>
    <header className={`fixed inset-x-0 top-8 z-[60] border-b transition-all duration-500 ${scrolled ? "border-hairline bg-cream/95 shadow-sm backdrop-blur-xl" : "border-white/20 bg-transparent"}`}>
      <div className={`container-site flex items-center justify-between transition-all duration-500 ${scrolled ? "h-[70px]" : "h-[82px]"}`}>
        <Logo light={light} />
        <nav aria-label="Main navigation" className="hidden items-center xl:flex">
          {navigation.map((item) => <div key={item.label} className="group/menu relative" onMouseEnter={() => item.children && setOpenMenu(item.label)} onMouseLeave={() => setOpenMenu(null)}>
            <Link href={item.href} className={`focus-ring flex h-12 items-center gap-1.5 px-3 font-sans text-[.7rem] font-semibold transition ${light ? "text-white hover:text-sage" : "text-midnight hover:text-scholastic"}`}>
              {item.label}{item.children && <ChevronDown className="h-3 w-3" aria-hidden="true" />}
            </Link>
            {item.children && openMenu === item.label && <div className="absolute right-0 top-full w-[720px] border-t-2 border-growth bg-cream p-8 shadow-soft">
              <div className="grid grid-cols-[1.1fr_1.2fr_.8fr] gap-8">
                <div><p className="font-sans text-3xl font-semibold tracking-tight text-midnight">{item.label}</p><p className="mt-3 text-sm leading-6 text-slate">Thoughtful detail, clear purpose and a rich education shaped around each child.</p></div>
                <div className="grid content-start grid-cols-2 gap-x-5">{item.children.map(child => <Link key={child.label} href={child.href} className="focus-ring border-b border-hairline py-2.5 text-sm font-medium hover:text-scholastic">{child.label}</Link>)}</div>
                <Link href={item.href} className="focus-ring group relative min-h-32 overflow-hidden"><Image src={images.reading} alt="Pupils learning at Grey" fill className="object-cover transition duration-500 group-hover:scale-105" sizes="220px" /><span className="absolute inset-0 bg-midnight/25" /><span className="absolute bottom-3 left-3 text-xs font-bold text-white">Explore {item.label} →</span></Link>
              </div>
            </div>}
          </div>)}
        </nav>
        <div className="hidden items-center gap-4 xl:flex"><Link href="/contact#visit" className={`focus-ring text-[.7rem] font-bold uppercase tracking-[.12em] ${light ? "text-white" : "text-midnight"}`}>Book a visit</Link><Button href="/admissions#apply" variant={light ? "light" : "primary"}>Apply now</Button></div>
        <button onClick={() => setMobileOpen(true)} aria-label="Open navigation" aria-expanded={mobileOpen} className={`focus-ring grid h-12 w-12 place-items-center xl:hidden ${light ? "text-white" : "text-midnight"}`}><Menu /></button>
      </div>
    </header>
    <div className={`fixed inset-0 z-[100] bg-midnight text-white transition duration-500 xl:hidden ${mobileOpen ? "visible translate-x-0" : "invisible translate-x-full"}`} aria-hidden={!mobileOpen}>
      <div className="flex h-full flex-col overflow-y-auto px-6 py-6 sm:px-10">
        <div className="flex items-center justify-between"><Logo light /><button onClick={() => setMobileOpen(false)} aria-label="Close navigation" className="focus-ring grid h-12 w-12 place-items-center"><X /></button></div>
        <nav aria-label="Mobile navigation" className="my-auto py-10">
          {navigation.map((item, index) => <Link onClick={() => setMobileOpen(false)} key={item.href} href={item.href} className="focus-ring flex items-center justify-between border-b border-white/15 py-4 font-sans text-[clamp(1.6rem,7vw,2.5rem)] font-medium tracking-tight"><span>{item.label}</span><span className="text-xs text-white/40">0{index + 1}</span></Link>)}
        </nav>
        <div className="grid gap-3 sm:grid-cols-2"><Button href="/contact#visit" variant="light">Book a visit</Button><Button href="/admissions#apply" variant="outline">Apply now</Button></div>
        <div className="mt-6 flex justify-between text-xs text-white/60"><Link href="/parent-portal">Parent portal</Link><Link href="/news#events">Calendar</Link><Link href="/gallery">Gallery</Link></div>
      </div>
    </div>
  </>;
}
