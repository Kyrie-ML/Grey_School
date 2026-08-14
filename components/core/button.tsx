import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type ButtonProps = { href: string; children: ReactNode; variant?: "primary" | "light" | "outline" | "text"; className?: string; arrow?: boolean };

export function Button({ href, children, variant = "primary", className = "", arrow = false }: ButtonProps) {
  const styles = {
    primary: "bg-midnight text-white hover:bg-scholastic border-midnight",
    light: "bg-white text-midnight hover:bg-sage border-white",
    outline: "border-current bg-transparent hover:bg-white/10",
    text: "border-transparent px-0 hover:text-scholastic",
  }[variant];
  return <Link href={href} className={`focus-ring group inline-flex min-h-12 items-center justify-center gap-3 border px-6 font-sans text-sm font-bold transition duration-300 hover:-translate-y-0.5 ${styles} ${className}`}>
    {children}{arrow && <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
  </Link>;
}

export function LinkArrow({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return <Link href={href} className={`focus-ring group inline-flex items-center gap-3 font-sans text-sm font-bold ${className}`}>
    {children}<ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
  </Link>;
}
