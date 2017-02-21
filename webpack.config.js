var path = require('path')

module.exports = {
    entry: path.resolve(__dirname, 'src/index.coffee'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'eagle.js',
        library: 'Eagle',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [
            { test: /\.js/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.coffee$/, loader: "coffee-loader" }
        ]
    }
}
