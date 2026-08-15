import Link from "next/link";

export function Logo({ light = false }: { light?: boolean }) {
  return <Link href="/" aria-label="Grey School Academy home" className={`focus-ring group inline-flex items-center gap-3.5 ${light ? "text-white" : "text-midnight"}`}>
    <svg aria-hidden="true" viewBox="0 0 48 44" className="h-10 w-11 overflow-visible" fill="none">
      <path d="M4 36V9.5C10.5 8.2 17 10 24 15.4V41C17.5 35.7 11 34 4 36Z" stroke="currentColor" strokeWidth="2" />
      <path d="M44 36V9.5C37.5 8.2 31 10 24 15.4V41C30.5 35.7 37 34 44 36Z" stroke="currentColor" strokeWidth="2" />
      <path d="M13 5.5C17.7 6.2 21.3 8 24 10.4C26.7 8 30.3 6.2 35 5.5" stroke="currentColor" strokeWidth="2" />
      <path d="M24 15.5V40.5" stroke="currentColor" strokeWidth="1.2" opacity=".55" />
      <circle cx="24" cy="4" r="2" fill={light ? "#E8EFE9" : "#C59A54"} />
    </svg>
    <span className="font-sans text-[.68rem] font-bold uppercase leading-[1.25] tracking-[.17em]">Grey School<br /><span className={light ? "text-white/65" : "text-growth"}>Academy</span></span>
  </Link>;
}
