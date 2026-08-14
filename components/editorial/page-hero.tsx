import Image from "next/image";
import { Container, Eyebrow } from "@/components/core/container";

export function PageHero({ eyebrow, title, intro, image, imageAlt }: { eyebrow: string; title: string; intro: string; image: string; imageAlt: string }) {
  return <section className="relative min-h-[650px] overflow-hidden bg-midnight text-white">
    <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-r from-midnight/95 via-midnight/65 to-midnight/15" /><div className="absolute inset-0 bg-gradient-to-t from-midnight/60 via-transparent to-transparent" />
    <Container className="relative flex min-h-[650px] items-end py-16 lg:py-24"><div className="max-w-4xl"><Eyebrow className="text-sage">{eyebrow}</Eyebrow><h1 className="page-title text-white">{title}</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-white/75">{intro}</p></div></Container>
  </section>;
}
