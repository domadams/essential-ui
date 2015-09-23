/*******************************************************
 * ESLint Task
 * kicks off ESLint to test for code quality through the
 * components and JavaScript. Will flag any errors that
 * do not conform to our standards set in .eslintrc
 ******************************************************/

import eslint from 'gulp-eslint';

export default function(gulp) {
    gulp.task('eslint', function() {
        return gulp
            .src([
                '**/*.js',
                '!node_modules/**/*.js',
                '!site/node_modules/**/*.js',
                '!site/public/**/*.js',
                '!dist/**/*.js'
            ])
            // eslint() attaches the lint output to the eslint property
            // of the file object so it can be used by other modules.
            .pipe(eslint())
            // eslint.format() outputs the lint results to the console.
            // Alternatively use eslint.formatEach() (see Docs).
            .pipe(eslint.format())
            // To have the process exit with an error code (1) on
            // lint error, return the stream and pipe to failOnError last.
            .pipe(eslint.failOnError());
    });
}
