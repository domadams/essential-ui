/**********************************************************************
 * nsp is the main command line interface to the Node Security Project.
 * It allows for auditing a package.json or npm-shrinkwrap.json
 * file against the API.
 **********************************************************************/

import gulpNSP from 'gulp-nsp';

// don't stop gulp flow if some vulnerabilities
// have been found

export default function(gulp){
    gulp.task('nsp', function (cb) {
        gulpNSP({
            package: '../package.json',
            stopOnError: false
        }, cb);
    });
}