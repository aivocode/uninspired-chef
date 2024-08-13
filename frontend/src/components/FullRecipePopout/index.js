/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-background-neutral-tertiary": "var(--color-background-neutral-tertiary)",
        "color-border-neutral-secondary": "var(--color-border-neutral-secondary)",
        "color-primitives-gray-500": "var(--color-primitives-gray-500)",
        "color-primitives-gray-900": "var(--color-primitives-gray-900)",
        "color-primitives-slate-200": "var(--color-primitives-slate-200)",
        "color-primitives-slate-600": "var(--color-primitives-slate-600)",
        "color-text-default-default": "var(--color-text-default-default)",
        "color-text-default-secondary": "var(--color-text-default-secondary)",
      },
      fontFamily: {
        "body-base": "var(--body-base-font-family)",
        heading: "var(--heading-font-family)",
        "single-line-body-base": "var(--single-line-body-base-font-family)",
      },
    },
  },
  plugins: [],
};