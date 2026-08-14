"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import type { FAQItem } from "@/types/content";

export function FAQ({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState(0);
  return <div className="border-t border-midnight">{items.map((item, index) => <div className="border-b border-hairline" key={item.question}><h3><button className="focus-ring flex w-full items-center justify-between gap-6 py-6 text-left font-sans text-lg font-semibold text-midnight" aria-expanded={open === index} onClick={() => setOpen(open === index ? -1 : index)}><span>{item.question}</span>{open === index ? <Minus className="h-5 w-5 shrink-0" /> : <Plus className="h-5 w-5 shrink-0" />}</button></h3>{open === index && <div className="max-w-3xl pb-7 pr-12 leading-7 text-slate">{item.answer}</div>}</div>)}</div>;
}
