/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/Components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [
    require("flowbite/plugin"),
    require("daisyui")
  ],
  daisyui: {
    themes: ["light"]
  }
};