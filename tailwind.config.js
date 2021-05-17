module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Barlow Condensed'],
        roboto: 'Roboto'
      },
      colors: {
        yellow: {
          brand: '#F8CB10'
        },
        blue: {
          brand: '#62C3CB'
        },
        purple: {
          brand: '#142B70'
        }
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar')
  ]
}
