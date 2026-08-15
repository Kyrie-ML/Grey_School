"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { gallery } from "@/data/site";

const filters = ["All", "Learning", "Arts", "Sport", "Campus", "Trips", "Community"];

export function GalleryGrid() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);
  const touchStart = useRef<number | null>(null);
  const shown = filter === "All" ? gallery : gallery.filter(item => item.category === filter);
  const previous = useCallback(() => setActive(current => current === null ? null : (current - 1 + shown.length) % shown.length), [shown.length]);
  const next = useCallback(() => setActive(current => current === null ? null : (current + 1) % shown.length), [shown.length]);

  useEffect(() => {
    if (active === null) return;
    lastFocused.current = document.activeElement as HTMLElement;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowLeft") previous();
      if (event.key === "ArrowRight") next();
      if (event.key === "Tab" && dialogRef.current) {
        const controls = Array.from(dialogRef.current.querySelectorAll<HTMLElement>("button, [href], [tabindex]:not([tabindex='-1'])"));
        if (!controls.length) return;
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKeyDown); lastFocused.current?.focus(); };
  }, [active, next, previous]);

  return <>
    <div className="mb-12 flex flex-wrap gap-x-6 gap-y-2 border-y border-midnight/15 py-3" aria-label="Filter gallery">{filters.map(item => <button key={item} onClick={() => { setFilter(item); setActive(null); }} aria-pressed={filter === item} className={`focus-ring min-h-10 border-b text-[.65rem] font-bold uppercase tracking-[.13em] transition ${filter === item ? "border-growth text-growth" : "border-transparent text-slate hover:text-midnight"}`}>{item}</button>)}</div>
    <div className="grid auto-rows-[230px] grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">{shown.map((item, index) => <button key={`${filter}-${item.src}`} onClick={() => setActive(index)} aria-label={`Open image: ${item.alt}`} className={`focus-ring group relative overflow-hidden text-left ${item.span === "wide" ? "sm:col-span-2" : ""} ${item.span === "tall" ? "row-span-2" : ""}`}><Image src={item.src} alt={item.alt} fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-[1.035]" /><span className="absolute inset-0 bg-gradient-to-t from-midnight/75 via-transparent to-transparent opacity-60 transition group-hover:opacity-90" /><span className="absolute bottom-5 left-5 text-[.65rem] font-bold uppercase tracking-[.15em] text-white">{item.category}</span></button>)}</div>
    {active !== null && shown[active] && <div ref={dialogRef} role="dialog" aria-modal="true" aria-label={`Gallery image ${active + 1} of ${shown.length}`} className="fixed inset-0 z-[150] bg-midnight/98 p-4 text-white" onMouseDown={event => { if (event.target === event.currentTarget) setActive(null); }} onTouchStart={event => { touchStart.current = event.touches[0].clientX; }} onTouchEnd={event => { if (touchStart.current === null) return; const distance = event.changedTouches[0].clientX - touchStart.current; if (Math.abs(distance) > 55) distance > 0 ? previous() : next(); touchStart.current = null; }}>
      <div className="mx-auto flex h-full max-w-7xl flex-col">
        <div className="flex h-16 items-center justify-between border-b border-white/15 text-[.65rem] uppercase tracking-[.16em] text-white/60"><span>Grey in pictures · {shown[active].category}</span><span>{String(active + 1).padStart(2, "0")} / {String(shown.length).padStart(2, "0")}</span><button ref={closeRef} onClick={() => setActive(null)} aria-label="Close gallery" className="focus-ring grid h-11 w-11 place-items-center text-white"><X /></button></div>
        <div className="relative min-h-0 flex-1"><Image src={shown[active].src} alt={shown[active].alt} fill priority sizes="94vw" className="object-contain" /><button onClick={previous} aria-label="Previous image" className="focus-ring absolute left-0 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center bg-midnight/75 text-white sm:left-4"><ChevronLeft /></button><button onClick={next} aria-label="Next image" className="focus-ring absolute right-0 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center bg-midnight/75 text-white sm:right-4"><ChevronRight /></button></div>
        <p className="border-t border-white/15 py-5 font-serif text-lg italic text-white/80">{shown[active].alt}</p>
      </div>
    </div>}
  </>;
}
