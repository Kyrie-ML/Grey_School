import Link from "next/link";

export function Logo({ light = false }: { light?: boolean }) {
  return <Link href="/" aria-label="Grey School Academy home" className={`focus-ring group inline-flex items-center gap-3 ${light ? "text-white" : "text-midnight"}`}>
    <span className={`grid h-10 w-10 place-items-center rounded-full border font-serif text-xl font-semibold ${light ? "border-white/40" : "border-midnight/30"}`}>G</span>
    <span className="font-sans text-[.72rem] font-bold uppercase leading-[1.2] tracking-[.15em]">Grey School<br />Academy</span>
  </Link>;
}
