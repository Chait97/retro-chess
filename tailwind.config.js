module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        mango: '#ff8e47ff',
        corn: '#ffed68ff',
        fuchsia: '#ff4794ff',
        radicalred: '#ff4365ff',
        turquoise: '#2de2e6ff',
        violet: {
          a: '#44355bff', 
          b: '#463285ff', 
          c: '#1a023bff',
        }
      },
      textShadow: {
        '2xl': '1px 1px 5px rgb(33 34 43 / 20%)',
        '3xl': '0 0 3px rgba(0, 0, 0, .8), 0 0 5px rgba(0, 0, 0, .9)',
        mango: '1px 1px 2px #ff8e47ff',
        corn: '1px 1px 2px #ffed68ff',
        fuchsia: '1px 1px 2px #ff4794ff',
        radicalred: '1px 1px 2px #ff4365ff',
        turquoise: '1px 1px 2px #2de2e6ff',
        neon_violet: '2px 2px 3px #463285ff, 1px 1px 2px #ff4794ff'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}
