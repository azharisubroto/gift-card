/** @type {import('twind').Configuration} */
export default {
  theme: {
    extend: {
      screens: {
        standalone: { raw: '(display-mode:standalone)' },
      },
      fontFamily: {
        sans: `Poppins, sans-serif`,
      },
      colors: {}
    }
  },
  mode: 'silent'
}
