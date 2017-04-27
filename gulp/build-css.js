// @flow

'use strict';

const gulp = require('gulp-help')(require('gulp'));
const util = require('gulp-util');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const cleanCss = require('gulp-clean-css');
const postcss = require('gulp-postcss');
const plugins = require('./postcss');

gulp.task('build:css', 'Build ./assets/scss/*.scss production version into ./public', () => gulp.src('./assets/scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .on('error', util.log)
    .pipe(postcss(plugins))
    .pipe(cleanCss({ level: 2 }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('public')));
