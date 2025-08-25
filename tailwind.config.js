/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Keep your existing shadcn/ui colors
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        
        // ADD: Misty Mountains Brand Colors
        misty: {
          50: "hsl(var(--misty-50))",
          100: "hsl(var(--misty-100))",
          200: "hsl(var(--misty-200))",
          300: "hsl(var(--misty-300))",
          400: "hsl(var(--misty-400))",
          500: "hsl(var(--misty-500))",  // Your primary #7A9A95
          600: "hsl(var(--misty-600))",
          700: "hsl(var(--misty-700))",
          800: "hsl(var(--misty-800))",
          900: "hsl(var(--misty-900))",
          DEFAULT: "hsl(var(--misty-500))",
        },
        sage: {
          50: "hsl(var(--sage-50))",
          500: "hsl(var(--sage-500))",  // #A8C4A2
          600: "hsl(var(--sage-600))",
          DEFAULT: "hsl(var(--sage-500))",
        },
        sand: {
          50: "hsl(var(--sand-50))",
          500: "hsl(var(--sand-500))",  // #D4A574
          600: "hsl(var(--sand-600))",
          DEFAULT: "hsl(var(--sand-500))",
        },
        forest: {
          900: "hsl(var(--forest-900))", // #1F2937 for dark text
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        // ADD: Gentle animations for your brand
        "gentle-bounce": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        // ADD: Brand animations
        "gentle-bounce": "gentle-bounce 2s infinite",
        "fade-in": "fade-in 0.6s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
