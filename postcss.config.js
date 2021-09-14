const isDev = (process.env.NODE_ENV == 'development');

module.exports = {
    map: isDev && { inline: false },
    plugins: [
        require('postcss-import'),
        require('postcss-advanced-variables'),
        require('postcss-extend-rule'),
        require('postcss-nested'),
        require('autoprefixer'),
        require('cssnano'),
    ]
}