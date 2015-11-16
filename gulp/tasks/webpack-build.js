var webpackConfig = require('../../webpack.config');
var webpack = require('webpack');

module.exports = function(gulp, plugins) {
    return function () {
        // run webpack
        webpack(webpackConfig, function (err, stats) {
            if (err) throw new plugins.util.PluginError('webpack:build', err);
            plugins.util.log('[webpack:build]', stats.toString({
                colors: true
            }));
        });
    }
};


