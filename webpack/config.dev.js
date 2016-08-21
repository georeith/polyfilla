const path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: path.join(__dirname, '../src/js/index.js'),
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'source-map-loader',
            },
        ],
        loaders: [
            {
                exclude: /node_modules/,
                loaders: ['babel-loader', 'eslint-loader'],
                test: /\.js$/,
            },
        ],
    },
    output: {
        filename: 'app.js',
    },
};
