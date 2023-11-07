/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      boxShadow: {
        bright: "0 0 10px rgba(255, 255, 255, 0.5)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
