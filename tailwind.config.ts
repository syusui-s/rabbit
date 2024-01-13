import tailwindForms from '@tailwindcss/forms';
import { type Config } from 'tailwindcss';

// 参考
// https://github.com/shadcn-ui/taxonomy/blob/main/tailwind.config.js
// https://github.com/shadcn-ui/taxonomy/blob/651f984e52edd65d40ccd55e299c1baeea3ff017/styles/globals.css#L78
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        fg: {
          DEFAULT: 'rgb(var(--color-fg))',
          secondary: 'rgb(var(--color-fg-secondary))',
          tertiary: 'rgb(var(--color-fg-tertiary))',
        },
        bg: {
          DEFAULT: 'rgb(var(--color-bg))',
          secondary: 'rgb(var(--color-bg-secondary))',
          tertiary: 'rgb(var(--color-bg-tertiary))',
        },
        border: 'rgb(var(--color-border))',
        primary: {
          DEFAULT: 'rgb(var(--color-primary))',
          disabled: 'rgb(var(--color-primary-disabled))',
          hover: 'rgb(var(--color-primary-hover))',
          fg: 'rgb(var(--color-primary-fg))',
        },
        danger: {
          DEFAULT: 'rgb(var(--color-danger))',
          fg: 'rgb(var(--color-danger-fg))',
        },
        link: 'rgb(var(--color-link))',
        r: {
          sidebar: 'rgb(var(--color-r-sidebar))',
          reaction: 'rgb(var(--color-r-reaction))',
          repost: 'rgb(var(--color-r-repost))',
          zap: 'rgb(var(--color-r-zap))',
        },
      },
    },
  },
  plugins: [tailwindForms],
} satisfies Config;
