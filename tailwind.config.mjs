/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        hankenGrotesk: ["Hanken Grotesk", "sans-serif"],
      },
      colors: {
        primary: "#008ECC",
        text: "#666666",
        heading: "#222222",
        border: "#EDEDED",
        bg: "#F5F5F5",
        bgBlue: "#F3F9FB",
        green: "#249B3E",
      },
    },
  },
  plugins: [],
};
