const isProd = (process.env.NODE_ENV == 'production');

module.exports = {
    map: !isProd,
    syntax: "postcss-scss",
    plugins: [
        require('postcss-import'),
        require('autoprefixer'),
        require('cssnano'),
    ]
}