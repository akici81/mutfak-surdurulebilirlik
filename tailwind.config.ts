import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        earth: {
          50:  '#fdf8f0',
          100: '#faebd7',
          200: '#f5d5b0',
          300: '#edb87a',
          400: '#e09444',
          500: '#c97b2e',
          600: '#a85e22',
          700: '#864a1e',
          800: '#6b3b1e',
          900: '#57311c',
        },
        forest: '#1a3d2b',
        sage:   '#5a7a5e',
        cream:  '#faf7f2',
        warm:   '#f5f0e8',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body:    ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
