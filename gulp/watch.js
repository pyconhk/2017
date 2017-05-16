// @flow

'use strict';

const gulp = require('gulp-help')(require('gulp'));

gulp.task('watch:css', false, () => gulp.watch([
  './assets/scss/**/*.scss',
], ['dev:css']));

gulp.task('watch:html', false, () => gulp.watch([
  './assets/pages/**/*.jinja',
  './assets/layouts/**/*.jinja',
], ['dev:html']));

gulp.task('watch:image', false, () => gulp.watch([
  './assets/images/**/*.*',
], ['image']));

gulp.task('watch:data', false, () => gulp.watch([
  './assets/data/**/*.yml',
  './manifest.json',
], ['data']));

gulp.task('watch', 'Monitor and rebuild images, pages and css files.',
  ['watch:image', 'watch:html', 'watch:css', 'watch:data']);
