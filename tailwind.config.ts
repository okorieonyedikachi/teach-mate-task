import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors:{
        primary:"#00000",
        hover: "rgb(123, 104, 238, 0.7)",
        secondary: "rgb(123, 104, 238)",

      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config