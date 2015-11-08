var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var commonLoaders = [
    {
        test: /\.js$|\.jsx$/,
        loaders: ['jsx-loader', 'babel-loader'],
        exclude: /(node_modules|site\/node_modules)/
    }
];

var clientConfig = {
    context: path.join(__dirname, 'site'),
    entry: './components/client.js',

    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'site/public')
    },
    module: {
        loaders:  commonLoaders.concat([
            // SASS
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css-loader!sass-loader')
            }
        ])
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(true),
        new webpack.optimize.UglifyJsPlugin({minimize: true}),
        new webpack.DefinePlugin({
            'process.env': {
                BROWSER: JSON.stringify(true)
            }
        }),
        new ExtractTextPlugin('style.css', {
            allChunks: true
        })
    ]
};

export default [clientConfig];
