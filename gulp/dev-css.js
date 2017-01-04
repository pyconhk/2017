//@flow
'use strict';
const gulp = require('gulp-help')(require('gulp'));
const util = require('gulp-util');
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
    .pipe(sass())
    .pipe(postcss(processor))
    .on('error', util.log)
    .pipe(gulp.dest('public'));
});
