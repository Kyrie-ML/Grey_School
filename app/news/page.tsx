import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/editorial/page-hero";
import { Container, Section, SectionHeading } from "@/components/core/container";
import { events, images, news } from "@/data/site";

export const metadata: Metadata = { title: "News & Events", description: "Stories, dates and notices from Grey School Academy." };

export default function NewsPage() {
  const more = [...news, { ...news[1], title: "Year 3 artists exhibit studies in light and shadow", category: "Learning", date: "22 May 2026" }, { ...news[0], title: "Families and pupils plant the new kitchen garden", category: "Community", date: "16 May 2026" }];
  return <>
    <PageHero eyebrow="News & events" title="The life of the school, thoughtfully told." intro="Work worth sharing, dates worth keeping and glimpses of the people who make Grey what it is." image={images.music} imageAlt="A musical performance in progress"/>
    <Section><Container>
      <SectionHeading eyebrow="Latest" title="From classrooms and beyond."/>
      <article id="lead-story" className="mt-14 grid overflow-hidden bg-midnight text-white lg:grid-cols-[1.4fr_.6fr]">
        <div className="relative min-h-[440px]"><Image src={news[0].image} alt="Pupils carrying out a practical science investigation" fill sizes="65vw" className="object-cover"/></div>
        <div className="flex flex-col justify-end p-8 lg:p-10"><p className="text-xs font-bold uppercase tracking-[.16em] text-sage">{news[0].category} · {news[0].date}</p><h2 className="mt-5 font-sans text-3xl font-semibold leading-tight tracking-tight">{news[0].title}</h2><p className="mt-5 text-sm leading-6 text-white/65">{news[0].excerpt}</p><p className="mt-7 text-sm font-bold text-sage">Featured story</p></div>
      </article>
      <div className="mt-14 grid gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3">{more.slice(1).map((article, i) => <article key={`${article.title}-${i}`}><div className="relative aspect-[4/3]"><Image src={article.image} alt="" fill sizes="33vw" className="object-cover"/></div><p className="mt-5 text-xs font-bold uppercase tracking-[.14em] text-growth">{article.category} · {article.date}</p><h2 className="mt-3 font-sans text-xl font-semibold leading-snug text-midnight">{article.title}</h2><p className="mt-3 text-sm leading-6 text-slate">{article.excerpt}</p></article>)}</div>
    </Container></Section>
    <Section id="events" className="bg-porcelain"><Container><div className="grid gap-12 lg:grid-cols-[.6fr_1.4fr]"><div><SectionHeading eyebrow="Events" title="Save the date." intro="The moments that bring pupils, families and the wider Grey community together."/></div><div className="border-t border-midnight">{events.map(event => <div key={event.title} className="grid grid-cols-[80px_1fr] gap-6 border-b border-hairline py-7 sm:grid-cols-[80px_1fr_auto] sm:items-center"><div><strong className="font-sans text-4xl font-semibold">{event.day}</strong><span className="ml-1 text-xs font-bold text-growth">{event.month}</span></div><div><h3 className="font-sans text-xl font-semibold">{event.title}</h3><p className="mt-1 text-sm text-slate">{event.audience}</p></div><p className="text-sm font-semibold text-scholastic">{event.time}</p></div>)}</div></div></Container></Section>
  </>;
}
