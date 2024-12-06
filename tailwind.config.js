/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'inter-tight': ['Inter Tight', 'sans-serif'],
        'playfairDisplay': ['Playfair Display', 'serif']
      },
    },
  },
  plugins: [],
}

