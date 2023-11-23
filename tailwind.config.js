/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      'sansSerif': ['Source Sans 3', 'sans-serif'],
      'mono': ['Source Code Pro', 'monospace'],
      'handWriting' : ['Kalam', 'cursive']
    },
    extend: {
      colors: {},
      zIndex: {
        navBarToggle: 91,
        navBar: 90,
      }
    },
  },
  plugins: [],
}

