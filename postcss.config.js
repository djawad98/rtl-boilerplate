const isDev = (process.env.NODE_ENV == 'development');

module.exports = {
  syntax: "postcss-scss",
  map: isDev && { inline: false },
  plugins: [
    require('postcss-import'),
    require('postcss-advanced-variables'),
    require('postcss-extend-rule'),
    require('tailwindcss/nesting'),
    require('tailwindcss'),
    require('autoprefixer'),
    require('cssnano'),
  ]
}