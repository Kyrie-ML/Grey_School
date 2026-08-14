import type { Metadata } from "next";
import { PageHero } from "@/components/editorial/page-hero";
import { GalleryGrid } from "@/components/media/gallery-grid";
import { AdmissionsPanel } from "@/components/editorial/admissions-panel";
import { Container, Section, SectionHeading } from "@/components/core/container";
import { images } from "@/data/site";

export const metadata: Metadata = { title: "Gallery", description: "A visual story of learning and life at Grey School Academy." };
export default function GalleryPage(){ return <><PageHero eyebrow="Gallery" title="See what a Grey day feels like." intro="Concentration, movement, friendship, making and the quiet satisfaction of understanding something new." image={images.art} imageAlt="Creative materials and artwork in the studio"/><Section><Container><SectionHeading eyebrow="In pictures" title="Life, observed closely." intro="Filter by interest or simply wander. Every image is part of the same story: children fully present in their school day."/><div className="mt-12"><GalleryGrid/></div></Container></Section><AdmissionsPanel/></> }
