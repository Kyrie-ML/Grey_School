import Link from "next/link";
import { Logo } from "./logo";

const groups = [
  { title: "Explore", links: [["About", "/about"], ["Academics", "/academics"], ["Admissions", "/admissions"], ["Student Life", "/student-life"], ["News", "/news"], ["Gallery", "/gallery"]] },
  { title: "Parents", links: [["Calendar", "/news#events"], ["Policies", "/policies"], ["Parent Portal", "/parent-portal"], ["Safeguarding", "/safeguarding"], ["Term Dates", "/news#events"]] },
];

export function SiteFooter() {
  return <footer className="bg-midnight text-white">
    <div className="container-site py-20 lg:py-28">
      <div className="grid gap-14 border-b border-white/15 pb-16 md:grid-cols-2 lg:grid-cols-[1.5fr_.8fr_.8fr_1.1fr]">
        <div><Logo light /><p className="mt-8 max-w-xs font-serif text-3xl italic leading-tight text-white/90">Learn. Grow. Lead.</p><p className="mt-5 max-w-xs text-sm leading-6 text-white/60">An ambitious junior school where every child is known, supported, challenged and inspired.</p></div>
        {groups.map(group => <div key={group.title}><h2 className="mb-5 font-sans text-xs font-bold uppercase tracking-[.18em] text-sage">{group.title}</h2><ul className="space-y-3">{group.links.map(([label, href]) => <li key={label}><Link className="focus-ring text-sm text-white/70 transition hover:text-white" href={href}>{label}</Link></li>)}</ul></div>)}
        <div><h2 className="mb-5 font-sans text-xs font-bold uppercase tracking-[.18em] text-sage">Find us</h2><address className="not-italic text-sm leading-7 text-white/70">18 Grey Lane<br />Westbrook, Nairobi<br />Kenya<br /><a className="mt-3 inline-block hover:text-white" href="tel:+254200000000">+254 (0)20 000 0000</a><br /><a className="hover:text-white" href="mailto:hello@greyschool.ac.ke">hello@greyschool.ac.ke</a></address></div>
      </div>
      <div className="flex flex-col gap-6 pt-7 text-xs text-white/50 md:flex-row md:items-center md:justify-between"><p>© 2026 Grey School Academy</p><div className="flex flex-wrap gap-5"><Link href="/privacy">Privacy</Link><Link href="/accessibility">Accessibility</Link><Link href="/policies">Policies</Link><Link href="/safeguarding">Reporting concerns</Link></div><div className="flex gap-5"><span>Instagram</span><span>Facebook</span><span>YouTube</span></div></div>
    </div>
  </footer>;
}
