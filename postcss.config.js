module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-cssnext'),
    require('cssnano'),
    require('postcss-nested'),
    require('tailwindcss')('./tailwind.js')
  ]
}
