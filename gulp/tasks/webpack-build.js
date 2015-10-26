var webpack = require('webpack');
var webpackConfig = require('../../webpack.config');
var webpackStream = require('webpack-stream');

export default function (gulp) {

    // this tells gulp to take the index.js file and send it to Webpack along with the config and put the resulting files in dist/
    gulp.task('webpack-build', function() {
        return gulp.src('site/components/client.js')
            .pipe(webpackStream(webpackConfig, webpack) )
            .pipe(gulp.dest('site/public'))
    });
}
