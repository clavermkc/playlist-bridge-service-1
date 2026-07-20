import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#5B5CEB",
          hover: "#4A4BD6",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#E879F9",
          foreground: "#FFFFFF",
        },
        background: "#FAFAFC",
        surface: "#FFFFFF",
        border: "#E5E7EB",
        foreground: "#111827",
        muted: {
          DEFAULT: "#F3F4F6",
          foreground: "#6B7280",
        },
        success: "#22C55E",
        warning: "#F59E0B",
        danger: "#EF4444",
        spotify: "#1DB954",
        apple: "#FA243C",
      },
      borderRadius: {
        sm: "6px",
        md: "10px",
        lg: "14px",
        xl: "20px",
      },
      fontFamily: {
        sans: ["var(--font-geist)", "Inter", "sans-serif"],
      },
      keyframes: {
        "fade-in": { from: { opacity: "0" }, to: { opacity: "1" } },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.4s ease-out",
        "slide-up": "slide-up 0.5s ease-out",
      },
      boxShadow: {
        card: "0 1px 2px rgba(17, 24, 39, 0.04), 0 1px 6px rgba(17, 24, 39, 0.03)",
        "card-hover": "0 4px 12px rgba(17, 24, 39, 0.08)",
        glow: "0 0 0 4px rgba(91, 92, 235, 0.12)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
