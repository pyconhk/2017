//@flow
'use strict';

const gulp = require('gulp-help')(require('gulp'));

gulp.task('build:dev', false, ['js', 'image', 'css', 'page', 'server']);
gulp.task('dev', 'Development mode. Starts',['build:dev', 'watch']);
gulp.task('build', 'Build the site.', ['image', 'css', 'page', 'js']);