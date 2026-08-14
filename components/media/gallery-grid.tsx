"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { gallery } from "@/data/site";

const filters = ["All", "Learning", "Arts", "Sport", "Campus", "Trips", "Community"];
export function GalleryGrid() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState<number | null>(null);
  const shown = filter === "All" ? gallery : gallery.filter(item => item.category === filter);
  useEffect(() => { document.body.style.overflow = active === null ? "" : "hidden"; return () => { document.body.style.overflow = ""; }; }, [active]);
  return <>
    <div className="mb-10 flex flex-wrap gap-2" aria-label="Filter gallery">{filters.map(item => <button key={item} onClick={() => setFilter(item)} aria-pressed={filter === item} className={`focus-ring min-h-11 border px-4 text-xs font-bold transition ${filter === item ? "border-midnight bg-midnight text-white" : "border-hairline bg-white hover:border-midnight"}`}>{item}</button>)}</div>
    <div className="grid auto-rows-[240px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">{shown.map((item, index) => <button key={`${filter}-${item.src}`} onClick={() => setActive(index)} className={`focus-ring group relative overflow-hidden text-left ${item.span === "wide" ? "sm:col-span-2" : ""} ${item.span === "tall" ? "row-span-2" : ""}`}><Image src={item.src} alt={item.alt} fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-[1.03]" /><span className="absolute inset-0 bg-gradient-to-t from-midnight/70 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" /><span className="absolute bottom-5 left-5 translate-y-3 text-sm font-bold text-white opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">{item.category}</span></button>)}</div>
    {active !== null && shown[active] && <div role="dialog" aria-modal="true" aria-label="Gallery image" className="fixed inset-0 z-[150] grid place-items-center bg-midnight/95 p-4" onClick={() => setActive(null)}><button aria-label="Close image" className="focus-ring absolute right-5 top-5 grid h-12 w-12 place-items-center text-white"><X /></button><div className="relative h-[80vh] w-[90vw] max-w-6xl" onClick={e => e.stopPropagation()}><Image src={shown[active].src} alt={shown[active].alt} fill sizes="90vw" className="object-contain" /></div></div>}
  </>;
}
