import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#08132F",
        "navy-light": "#13255F",
        cyan: "#24E6FF",
        "muted-foreground": "#B7C2D9",
      },
      boxShadow: {
        cyan: "0 0 34px rgba(36, 230, 255, 0.18)",
        "cyan-lg": "0 0 80px rgba(36, 230, 255, 0.16)",
      },
      backgroundImage: {
        "hero-grid": "linear-gradient(rgba(36, 230, 255, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(36, 230, 255, 0.06) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
