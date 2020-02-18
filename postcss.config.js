const tailwindcss = require(`tailwindcss`);
const postcssCssNext = require('postcss-cssnext');
module.exports = {
  plugins: [
    postcssCssNext({
      features: {
        customProperties: {
          warnings: false
        }
      }
    }),
    tailwindcss('./tailwind.config.js'),
    require('postcss-import'),
    require('postcss-nested'),
    require('cssnano')
  ]
};
