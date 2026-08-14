import type { Metadata } from "next";
import Link from "next/link";
import { CalendarDays, FileText, LockKeyhole, Mail } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/core/container";

export const metadata: Metadata = { title: "Parent Portal" };
const links = [
  { Icon: CalendarDays, label: "Calendar", href: "/news#events" },
  { Icon: FileText, label: "Policies", href: "/policies" },
  { Icon: Mail, label: "Contact school", href: "/contact" },
  { Icon: LockKeyhole, label: "Request portal access", href: "/contact" },
];

export default function ParentPortalPage() {
  return <>
    <section className="bg-midnight py-24 text-white"><Container><p className="eyebrow text-sage">Current families</p><h1 className="page-title">Parent portal</h1><p className="mt-6 max-w-xl text-lg text-white/70">Practical school information, gathered in one calm place.</p></Container></section>
    <Section><Container><SectionHeading eyebrow="Quick access" title="What do you need today?"/><div className="mt-12 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-4">{links.map(({ Icon, label, href }) => <Link key={label} href={href} className="focus-ring bg-cream p-7 hover:bg-sage/40"><Icon className="h-7 w-7 text-growth"/><h2 className="mt-8 font-sans text-xl font-semibold">{label}</h2><p className="mt-2 text-sm text-slate">Open resource →</p></Link>)}</div><div className="mt-12 border-l-4 border-growth bg-porcelain p-7"><p className="font-semibold">Secure portal integration pending</p><p className="mt-2 text-sm text-slate">This production-ready entry page is prepared for your selected school information system or single sign-on provider.</p></div></Container></Section>
  </>;
}
