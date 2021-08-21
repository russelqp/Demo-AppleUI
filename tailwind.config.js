module.exports = {
  mode:'jit',
  purge: [
    './public/**/*.html',
    './public/**/*.js',
    './src/**/*.{js,jsx,ts,tsx,vue}',
    "./**/*.js"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
