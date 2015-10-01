var path = require('path');
var webpack = require('webpack');

module.exports = {
    context: path.join(__dirname, 'site'),
    entry: './components/client.js',

    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'site/public')
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            }
        ]
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(true),
        new webpack.optimize.UglifyJsPlugin({minimize: true})
    ]
};
