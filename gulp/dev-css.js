// @flow

'use strict';

const gulp = require('gulp-help')(require('gulp'));
const util = require('gulp-util');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const plugins = require('./postcss');

gulp.task('dev:css', 'Build development version ./assets/scss/*.scss into ./public', () => gulp.src('./assets/scss/*.scss')
  .on('error', util.log)
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(postcss(plugins))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('public')));
