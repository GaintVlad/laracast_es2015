var webpack = require('webpack');

module.exports = {
    entry: './src/main.js',
    devtool: "sourcemap",
    mode: "development",
    output: {
        filename: './main.js'
    },
    module: {
        rules: [
            {test: /\.js$/, loader: 'buble-loader'}
        ]
    }
}