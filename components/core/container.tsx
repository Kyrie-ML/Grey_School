import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

export function Container({ children, className = "", as: Tag = "div" }: { children: ReactNode; className?: string; as?: ElementType }) {
  return <Tag className={`container-site ${className}`}>{children}</Tag>;
}

export function Section({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) {
  return <section id={id} className={`section-space ${className}`}>{children}</section>;
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`eyebrow ${className}`}>{children}</p>;
}

export function SectionHeading({ eyebrow, title, intro, light = false, className = "" }: { eyebrow?: string; title: string; intro?: string; light?: boolean; className?: string }) {
  return <div className={`max-w-4xl ${className}`}>
    {eyebrow && <Eyebrow className={light ? "text-sage" : "text-growth"}>{eyebrow}</Eyebrow>}
    <h2 className={`section-title ${light ? "text-white" : "text-midnight"}`}>{title}</h2>
    {intro && <p className={`mt-7 max-w-2xl text-lg leading-8 ${light ? "text-white/70" : "text-slate"}`}>{intro}</p>}
  </div>;
}

export type DivProps = ComponentPropsWithoutRef<"div">;
