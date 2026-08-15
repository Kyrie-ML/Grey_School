import Image from "next/image";
import { Container, Eyebrow } from "@/components/core/container";

export function PageHero({ eyebrow, title, intro, image, imageAlt }: { eyebrow: string; title: string; intro: string; image: string; imageAlt: string }) {
  return <section className="relative min-h-[700px] overflow-hidden bg-midnight text-white">
    <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-r from-midnight/94 via-midnight/57 to-midnight/8" /><div className="absolute inset-0 bg-gradient-to-t from-midnight/72 via-transparent to-midnight/20" />
    <Container className="relative flex min-h-[700px] items-end pb-16 pt-44 lg:pb-24"><div className="grid w-full gap-10 lg:grid-cols-12"><div className="lg:col-span-8"><Eyebrow className="text-sage">{eyebrow}</Eyebrow><h1 className="page-title text-white">{title}</h1></div><div className="flex items-end lg:col-span-4"><p className="border-l border-sage/60 pl-6 text-lg leading-8 text-white/75">{intro}</p></div></div></Container>
    <div className="absolute bottom-0 left-0 h-1 w-28 bg-gold" />
  </section>;
}
