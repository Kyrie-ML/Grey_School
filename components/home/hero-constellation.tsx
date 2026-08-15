"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { useEffect, useState, type MouseEvent } from "react";
import { editorialEase } from "@/components/core/motion";
import { images } from "@/data/site";

type Photo = {
  id: string;
  src: string;
  alt: string;
  context: string;
  story: string;
  className: string;
  depth: number;
  priority?: boolean;
  sizes: string;
};

const photos: Photo[] = [
  { id: "main", src: images.heroClassroom, alt: "A teacher guiding a small group of pupils in class", context: "Lower Junior · Classroom", story: "Every child has a place in the conversation.", className: "hero-photo-main", depth: 3, priority: true, sizes: "(max-width: 640px) 82vw, (max-width: 1024px) 58vw, 34vw" },
  { id: "science", src: images.heroScience, alt: "A pupil and teacher carrying out a science experiment", context: "Year 5 · Science", story: "Questions become experiments.", className: "hero-photo-science", depth: 1, sizes: "(max-width: 640px) 38vw, (max-width: 1024px) 28vw, 15vw" },
  { id: "sport", src: images.sport, alt: "Pupils building confidence through team sport", context: "After-school football", story: "Confidence grows through teamwork.", className: "hero-photo-sport", depth: 2, sizes: "(max-width: 640px) 38vw, (max-width: 1024px) 28vw, 14vw" },
  { id: "reading", src: images.heroReading, alt: "Pupils reading and thinking together", context: "Lower Junior · Reading", story: "Quiet spaces for big questions.", className: "hero-photo-reading", depth: 1, sizes: "(max-width: 1024px) 28vw, 15vw" },
  { id: "art", src: images.heroArt, alt: "Children making art together in the studio", context: "Art Studio", story: "Ideas become something visible.", className: "hero-photo-art", depth: 2, sizes: "(max-width: 1024px) 28vw, 14vw" },
  { id: "friendship", src: images.friendship, alt: "Friends learning together in a bright classroom", context: "Everyday at Grey", story: "Belonging makes brave learning possible.", className: "hero-photo-friendship", depth: 1, sizes: "12vw" },
];

function ConstellationPhoto({ photo, index, rotatingSrc }: { photo: Photo; index: number; rotatingSrc?: string }) {
  const [loaded, setLoaded] = useState(false);
  const reduced = useReducedMotion();
  const src = rotatingSrc ?? photo.src;
  return <motion.figure
    className={`hero-photo group ${photo.className}`}
    data-depth={photo.depth}
    initial={reduced ? false : photo.id === "main" ? { opacity: 0.72, clipPath: "inset(100% 0 0 0)", scale: 1.04 } : { opacity: 0.55, y: 24, scale: 0.88, rotate: -2 }}
    animate={{ opacity: 1, y: 0, scale: 1, rotate: 0, clipPath: "inset(0% 0 0 0)" }}
    transition={{ duration: reduced ? 0 : photo.id === "main" ? 0.86 : 0.62, delay: reduced ? 0 : 0.35 + index * 0.11, ease: editorialEase }}
  >
    <div className={`hero-photo-float hero-float-${(index % 4) + 1}`}>
      <div className="absolute inset-0 bg-sage" aria-hidden="true" />
      <AnimatePresence mode="wait" initial={false}>
        <motion.div key={src} className="absolute inset-0" initial={reduced ? false : { opacity: 0, scale: 1.025, clipPath: "inset(0 0 12% 0)" }} animate={{ opacity: 1, scale: 1, clipPath: "inset(0 0 0% 0)" }} exit={{ opacity: 0, scale: 0.99 }} transition={{ duration: reduced ? 0 : 0.65, ease: editorialEase }}>
          <Image src={src} alt={photo.alt} fill priority={photo.priority} sizes={photo.sizes} onLoad={() => setLoaded(true)} className={`object-cover transition duration-500 group-hover:scale-[1.025] ${loaded ? "opacity-100" : "opacity-0"}`} />
        </motion.div>
      </AnimatePresence>
      <span className="absolute inset-0 bg-gradient-to-t from-midnight/75 via-midnight/0 to-transparent opacity-25 transition duration-500 group-hover:opacity-80" />
      <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 p-3 text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <span className="block text-[.55rem] font-bold uppercase tracking-[.14em] text-sage">{photo.context}</span>
        <span className="mt-1 flex items-end justify-between gap-2 text-xs font-semibold leading-4"><span>{photo.story}</span><ArrowUpRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" /></span>
      </figcaption>
    </div>
  </motion.figure>;
}

export function HeroConstellation() {
  const reduced = useReducedMotion();
  const [alternateScience, setAlternateScience] = useState(false);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 55, damping: 20 });
  const springY = useSpring(pointerY, { stiffness: 55, damping: 20 });
  const x = useTransform(springX, [-1, 1], [-8, 8]);
  const y = useTransform(springY, [-1, 1], [-6, 6]);

  useEffect(() => {
    if (reduced) return;
    const timer = window.setInterval(() => setAlternateScience(current => !current), 6200);
    return () => window.clearInterval(timer);
  }, [reduced]);

  const onPointerMove = (event: MouseEvent<HTMLDivElement>) => {
    if (reduced || window.matchMedia("(max-width: 1023px)").matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 2);
    pointerY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 2);
  };

  return <div className="hero-constellation" onMouseMove={onPointerMove} onMouseLeave={() => { pointerX.set(0); pointerY.set(0); }}>
    <motion.div className="absolute inset-0" style={reduced ? undefined : { x, y }}>
      {photos.map((photo, index) => <ConstellationPhoto key={photo.id} photo={photo} index={index} rotatingSrc={photo.id === "science" && alternateScience ? images.heroScienceAlt : undefined} />)}
    </motion.div>
  </div>;
}
