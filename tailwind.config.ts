import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#0B1F33",
        scholastic: "#2B5F8F",
        growth: "#52715E",
        sage: "#E8EFE9",
        sandstone: "#EEE6D8",
        porcelain: "#F6F8FA",
        cream: "#FBF8F2",
        ink: "#16212D",
        slate: "#68737D",
        hairline: "#D9DEE1",
        gold: "#C59A54",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-newsreader)", "serif"],
      },
      maxWidth: { site: "1360px" },
      boxShadow: { soft: "0 24px 70px rgba(11,31,51,.12)" },
    },
  },
  plugins: [],
} satisfies Config;
