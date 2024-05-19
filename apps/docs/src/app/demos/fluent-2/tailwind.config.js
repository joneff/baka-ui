/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/demos/fluent-2/**/*.{js,ts,jsx,tsx,mdx}"],
  important: "#fluent-2--demos",
  presets: [require("baka-fluent-2/tailwind")],
  theme: {},
  plugins: [],
};
