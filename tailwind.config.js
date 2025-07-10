/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom dark theme colors
        dark: {
          bg: '#0f172a',
          'bg-secondary': '#1e293b',
          'bg-tertiary': '#334155',
          text: '#f8fafc',
          'text-secondary': '#cbd5e1',
          'text-muted': '#94a3b8',
          border: '#475569',
          accent: '#3b82f6',
          'accent-hover': '#2563eb',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
  darkMode: 'class', // Enable class-based dark mode
}
