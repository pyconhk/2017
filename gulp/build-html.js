// @flow

'use strict';

const gulp = require('gulp-help')(require('gulp'));
const data = require('gulp-data');
const util = require('gulp-util');
const htmldata = require('./includes/html-data');
const htmlurl = require('./includes/html-url-append');

gulp.task('build:html', 'Build ./assets/pages/*.jinja into production HTML files', () => {
  const { Environment, FileSystemLoader } = require('nunjucks');
  const env = new Environment([
    new FileSystemLoader('assets/pages'),
    new FileSystemLoader('assets/layouts'),
  ]);
  htmlurl.addFilters(env);

  return gulp.src('assets/pages/**/*.jinja')
    .pipe(data(htmldata.fileData))
    .pipe(require('gulp-nunjucks').compile({}, { env }))
    .pipe(require('gulp-htmlmin')({
      collapseWhitespace: true,
    }))
    .pipe(require('gulp-rename')({
      extname: '.html',
    }))
    .on('error', util.log)
    .pipe(gulp.dest('public'));
});
