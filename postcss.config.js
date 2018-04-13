module.exports = {
  plugins: [
    require('postcss-cssnext'),
    require('postcss-import'),
    require('cssnano'),
    require('postcss-nested'),
    require('tailwindcss')('./tailwind.js')
  ]
}
