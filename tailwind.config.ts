import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        accent: "#003F8A",
      },
      colors: {
        accent: { DEFAULT: "#0369A1", light: "#0284C7" },
        brand: { DEFAULT: "#fc6903", light: "#fd8830" },
        violet: { DEFAULT: "#0369A1", light: "#0284C7" },
        orange: { DEFAULT: "#fc6903", light: "#fd8830" },
        cyan: { DEFAULT: "#0369A1", light: "#0284C7" },
        cream: { DEFAULT: "#020617", muted: "#475569" },
        base: {
          deep: "#FFFFFF",
          DEFAULT: "#FFFFFF",
          elevated: "#F5F5F5",
          surface: "#EEEEEE",
        },
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
        label: ["var(--font-syne)", "sans-serif"],
      },
      fontSize: {
        hero: [
          "96px",
          { lineHeight: "0.95", letterSpacing: "-0.03em", fontWeight: "800" },
        ],
        section: [
          "48px",
          { lineHeight: "1.05", letterSpacing: "-0.02em", fontWeight: "800" },
        ],
        label: [
          "11px",
          { lineHeight: "1.4", letterSpacing: "0.12em", fontWeight: "400" },
        ],
      },
    },
  },
  plugins: [],
};

export default config;
