/* jshint -W079 */ // prevent redefinition of $ warning

'use strict';
// gulp
var gulp = require('gulp');
var paths = gulp.paths;
// plugins
var $ = require('gulp-load-plugins')();

// check for jshint errors
gulp.task('jshint', function () {
  return gulp.src(paths.jsFiles)
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.jshint.reporter('fail'));
});

// check for jscs errors
gulp.task('jscs', function () {
  return gulp.src(paths.jsFiles)
    .pipe($.jscs());
});