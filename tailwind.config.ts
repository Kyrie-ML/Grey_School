import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#0A2540",
        scholastic: "#145DA0",
        growth: "#3B7A57",
        sage: "#DDEBDD",
        porcelain: "#F8FAFC",
        cream: "#FFFEFA",
        ink: "#15202B",
        slate: "#667085",
        hairline: "#DFE5EA",
        gold: "#C89D58",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-newsreader)", "serif"],
      },
      maxWidth: { site: "1360px" },
      boxShadow: { soft: "0 18px 50px rgba(10,37,64,.10)" },
    },
  },
  plugins: [],
} satisfies Config;
