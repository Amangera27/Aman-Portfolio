/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "neutral-primary": "var(--neutral-primary)",
        "neutral-secondary": "var(--neutral-secondary)",
        "neutral-secondary-soft": "var(--neutral-secondary-soft)",
        "neutral-tertiary": "var(--neutral-tertiary)",
        "action-primary": "var(--action-primary)",
        "action-primary-hover": "var(--action-primary-hover)",
        "action-secondary": "var(--action-secondary)",
        "action-secondary-hover": "var(--action-secondary-hover)",
        "feedback-success": "var(--feedback-success)",
        "feedback-success-soft": "var(--feedback-success-soft)",
        "feedback-error": "var(--feedback-error)",
        "feedback-error-soft": "var(--feedback-error-soft)",
        "feedback-warning": "var(--feedback-warning)",
        "feedback-warning-soft": "var(--feedback-warning-soft)",
        "feedback-info": "var(--feedback-info)",
        "feedback-info-soft": "var(--feedback-info-soft)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-placeholder": "var(--text-placeholder)",
        "text-disabled": "var(--text-disabled)",
        "text-brand": "var(--text-brand)",
        "border-default": "var(--border-default)",
        "border-neutral": "var(--border-neutral)",
        "fg-brand": "var(--fg-brand)",
        "brand": "var(--brand)",
      },
    },
  },
  plugins: [],
};

export default config;