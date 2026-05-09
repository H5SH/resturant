/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'primary-light': 'var(--color-primary-light)',
        'primary-dark': 'var(--color-primary-dark)',
        accent: 'var(--color-accent)',
        'accent-light': 'var(--color-accent-light)',
        bg: 'var(--color-bg)',
        'bg-soft': 'var(--color-bg-soft)',
        'bg-dark': 'var(--color-bg-dark)',
        'bg-card': 'var(--color-bg-card)',
        'bg-paper': 'var(--color-bg-paper)',
        text: 'var(--color-text)',
        'text-muted': 'var(--color-text-muted)',
        'text-inverse': 'var(--color-text-inverse)',
        'text-accent': 'var(--color-text-accent)',
        border: 'var(--color-border)',
        'border-dark': 'var(--color-border-dark)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        accent: ['var(--font-accent)', 'cursive'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        full: 'var(--radius-full)',
        organic: 'var(--radius-organic)',
      },
    },
  },
  plugins: [],
}
