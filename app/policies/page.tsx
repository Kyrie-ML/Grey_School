import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/core/container";

export const metadata: Metadata = { title: "School Policies" };
export default function PoliciesPage() {
  const policies = ["Safeguarding and child protection", "Behaviour and relationships", "Anti-bullying", "Health and safety", "Admissions", "Special educational needs", "Complaints procedure", "Online safety"];
  return <><section className="bg-midnight py-24 text-white"><Container><p className="eyebrow text-sage">School information</p><h1 className="page-title">Policies</h1></Container></section><Section><Container><SectionHeading eyebrow="Clear expectations" title="How we care, decide and act." intro="Approved copies are available from the school office while the public document library is prepared."/><div className="mt-12 grid gap-px bg-hairline md:grid-cols-2">{policies.map(policy => <Link href="/contact" key={policy} className="focus-ring flex min-h-20 items-center justify-between bg-cream px-6 text-left font-semibold hover:bg-porcelain">{policy}<ArrowRight className="h-4 w-4 text-growth"/></Link>)}</div></Container></Section></>;
}
