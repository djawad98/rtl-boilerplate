const isDev = (process.env.NODE_ENV == 'development');

module.exports = {
    map: isDev && { inline: false },
    plugins: [
        require('postcss-import'),
        require('postcss-nested'),
        require('tailwindcss'),
        require('autoprefixer'),
        require('cssnano'),
    ]
}