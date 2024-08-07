/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './formkit.theme.ts',
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      inter: ['Inter'],
    },
    extend: {
      colors: {
        water: '#0ea5e9',
        whatsapp: '#25d667',
        darkwater: '#0d9bdb',
      },
    },
  },
  plugins: [require('@formkit/themes/tailwindcss')],
}
