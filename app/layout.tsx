import type { Metadata } from "next";
import { Inter, Manrope, Newsreader } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/navigation/site-header";
import { SiteFooter } from "@/components/navigation/site-footer";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const newsreader = Newsreader({ subsets: ["latin"], variable: "--font-newsreader", display: "swap", style: ["normal", "italic"] });

export const metadata: Metadata = {
  title: { default: "Grey School Academy | Learn. Grow. Lead.", template: "%s | Grey School Academy" },
  description: "A thoughtful, ambitious junior school where children learn deeply, grow confidently and discover who they can become.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${manrope.variable} ${inter.variable} ${newsreader.variable}`}><a href="#main" className="focus-ring fixed left-4 top-3 z-[200] -translate-y-24 bg-white px-4 py-3 font-bold text-midnight transition focus:translate-y-0">Skip to content</a><SiteHeader /><main id="main">{children}</main><SiteFooter /></body></html>;
}
