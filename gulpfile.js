/*******************************************************
 * Gulp file
 * Use Babel to convert ES6 to ES5 and then kick off
 * the gulp tasks by calling index.js in gulp directory
 ******************************************************/

require('babel-core/register');
require('./gulp');
