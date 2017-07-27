// @flow

'use strict';

const gulp = require('gulp-help')(require('gulp'));
const util = require('gulp-util');

gulp.task('data:manifest', 'Copy manifest.json to public', () => gulp.src('./manifest.json')
  .pipe(gulp.dest('public'))
  .on('error', util.log));

gulp.task('data:assets', 'Copy files in assets/data to public/data', () => gulp.src('./assets/data/**/*.yml')
  .pipe(gulp.dest('public/data'))
  .on('error', util.log));

gulp.task('data', 'Copy data to public', ['data:manifest', 'data:assets']);
