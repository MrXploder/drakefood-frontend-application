// tailwind.config.js
module.exports = {
  plugins: [require('flowbite/plugin')],
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e60012'
      },
      fontFamily: {
        sans: [
          'Inter var',
          ...require('tailwindcss/defaultTheme').fontFamily.sans
        ]
      }
    }
  }
}
