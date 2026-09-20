/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary, #0B1F3A)',
          dark: '#071527',
          light: '#132E54',
        },
        accent: {
          DEFAULT: 'var(--color-accent, #0E7C86)',
          hover: '#0A5C64',
          subtle: '#E6F4F5',
        },
        ink: {
          DEFAULT: 'var(--color-ink, #1F2937)',
          soft: '#374151',
        },
        muted: 'var(--color-muted, #475569)',
        surface: {
          DEFAULT: 'var(--color-surface, #FFFFFF)',
          alt: 'var(--color-surface-alt, #F5F7FA)',
        },
        border: 'var(--color-border, #E2E8F0)',
        success: 'var(--color-success, #15803D)',
        danger: 'var(--color-danger, #B91C1C)',
      },
      fontFamily: {
        serif: ['"Source Serif 4"', 'Georgia', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
      },
      maxWidth: {
        container: '1120px',
      },
      boxShadow: {
        subtle: '0 1px 3px 0 rgba(11, 31, 58, 0.05), 0 1px 2px -1px rgba(11, 31, 58, 0.05)',
        card: '0 4px 6px -1px rgba(11, 31, 58, 0.06), 0 2px 4px -2px rgba(11, 31, 58, 0.04)',
        hover: '0 10px 15px -3px rgba(11, 31, 58, 0.08), 0 4px 6px -4px rgba(11, 31, 58, 0.04)',
      },
    },
  },
  plugins: [],
};
