/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: "oklch(var(--background))",
        foreground: "oklch(var(--foreground))",
        card: {
          DEFAULT: "oklch(var(--card))",
          foreground: "oklch(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "oklch(var(--popover))",
          foreground: "oklch(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "oklch(var(--primary))",
          foreground: "oklch(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "oklch(var(--secondary))",
          foreground: "oklch(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "oklch(var(--muted))",
          foreground: "oklch(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "oklch(var(--accent))",
          foreground: "oklch(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "oklch(var(--destructive))",
          foreground: "oklch(var(--destructive-foreground))",
        },
        border: "oklch(var(--border))",
        input: "oklch(var(--input))",
        ring: "oklch(var(--ring))",
        // Brand colors
        maroon: {
          50: '#fdf2f2',
          100: '#fce4e4',
          200: '#f9c5c5',
          300: '#f49898',
          400: '#ec5c5c',
          500: '#de2b2b',
          600: '#c01c1c',
          700: '#9e1515',
          800: '#6b1a1a',
          900: '#3d0f0f',
          950: '#1f0808',
        },
        gold: {
          50: '#fdf8ee',
          100: '#faedd2',
          200: '#f4d8a1',
          300: '#edc068',
          400: '#e8aa3c',
          500: '#c9933a',
          600: '#a67428',
          700: '#875b1e',
          800: '#6e481a',
          900: '#5c3c18',
        },
        cream: {
          50: '#fdf6e3',
          100: '#faefd0',
          200: '#f3dfa4',
          300: '#eacf7a',
          400: '#e0be55',
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        'gold': '0 4px 24px rgba(201, 147, 58, 0.2)',
        'gold-lg': '0 8px 48px rgba(201, 147, 58, 0.3)',
        'maroon': '0 4px 24px rgba(107, 26, 26, 0.2)',
        'luxury': '0 20px 60px rgba(107, 26, 26, 0.15)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #c9933a, #f0c060, #a67428)',
        'maroon-gradient': 'linear-gradient(135deg, #6b1a1a, #3d0f0f)',
        'luxury-hero': 'linear-gradient(160deg, #1f0808 0%, #6b1a1a 40%, #3d0f0f 70%, #0d0505 100%)',
        'cream-gradient': 'linear-gradient(180deg, #fdf6e3, #faefd0)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
