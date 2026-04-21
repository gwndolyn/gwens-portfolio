/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0b',
        'bg-2': '#111114',
        'bg-3': '#16161a',
        ink: '#d6d0c4',
        'ink-2': '#a8a39a',
        'ink-3': '#6a6660',
        'ink-4': '#44403c',
        rule: '#1f1f24',
        'rule-2': '#2a2a30',
      },
      fontFamily: {
        serif: ['Fraunces', 'Iowan Old Style', 'Georgia', 'serif'],
        sans: ['Inter Tight', '-apple-system', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'Menlo', 'monospace'],
      },
    },
  },
  plugins: [],
}