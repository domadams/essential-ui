var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

function getTask(task) {
    return require('./tasks/' + task)(gulp, plugins);
}

gulp.task('webpack:build', getTask('webpack-build'));

gulp.task('default', ['webpack:build']);

