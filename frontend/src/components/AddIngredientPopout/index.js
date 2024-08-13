// index.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-background-default-default": "var(--color-background-default-default)",
        "color-background-neutral-tertiary": "var(--color-background-neutral-tertiary)",
        "color-background-neutral-tertiary-hover": "var(--color-background-neutral-tertiary-hover)",
        "color-border-default-default": "var(--color-border-default-default)",
        "color-border-neutral-secondary": "var(--color-border-neutral-secondary)",
        "color-primitives-gray-300": "var(--color-primitives-gray-300)",
        "color-primitives-gray-400": "var(--color-primitives-gray-400)",
        "color-primitives-slate-200": "var(--color-primitives-slate-200)",
        "color-primitives-slate-300": "var(--color-primitives-slate-300)",
        "color-primitives-slate-600": "var(--color-primitives-slate-600)",
        "color-text-default-default": "var(--color-text-default-default)",
        "color-text-default-tertiary": "var(--color-text-default-tertiary)",
      },
      fontFamily: {
        "body-base": "var(--body-base-font-family)",
        "single-line-body-base": "var(--single-line-body-base-font-family)",
      },
    },
  },
  plugins: [],
};