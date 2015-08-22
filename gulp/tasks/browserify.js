import browserify from 'browserify';
import babelify from 'babelify';
import gulp from 'gulp';
import gulpUtil from 'gulp-util';
import path from 'path';
import source from 'vinyl-source-stream';

var debug = process.env.NODE_ENV !== 'production';

function getBundler() {
    return (
        browserify({debug})
            .transform(babelify)
            .add(
            path.resolve('site/components/client.js'),
            { entry: true }
        )
    );
}

function createBundle(bundler) {
    return bundler
        .bundle()
        .on('error', gulpUtil.log)
        .on('end', function() {
            return gulpUtil.log('Bundle complete');
        })
        .pipe(source('app.js'))
        .pipe(gulp.dest('site/public'));
}

export default function () {
    gulp.task('browserify', () => createBundle(getBundler()));
}
