//@flow
'use strict';
const gulp = require('gulp-help')(require('gulp'));
const util = require('gulp-util');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');

const processor = [
  autoprefixer({
    browsers: ['last 5 version']
  })
];

gulp.task('dev:css', 'Build development version ./assets/scss/*.scss into ./public', () => {
  return gulp.src('./assets/scss/*.scss')
    .on('error', util.log)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(postcss(processor))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('public'));
});
