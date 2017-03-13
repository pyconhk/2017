//@flow
'use strict';

const gulp = require('gulp-help')(require('gulp'));
const data = require('gulp-data');
const util = require('gulp-util');
const path = require('path');
const htmldata = require('./includes/html-data');

gulp.task('build:html', 'Build ./assets/pages/*.jinja into production HTML files', () => {
  const {Environment, FileSystemLoader} = require('nunjucks');
  const env = new Environment([
    new FileSystemLoader('assets/pages'),
    new FileSystemLoader('assets/layouts')
  ]);

  return gulp.src('assets/pages/**/*.jinja')
    .pipe(data(function(file) {
      const pagePath = htmldata.getPagePath(file.path);
      const pageID = htmldata.genPageID(pagePath);
      util.log(`Working on '${util.colors.cyan('dev:html')}':`, {
        pagePath,
        pageID,
      });
      return {
        pagePath,
        pageID,
      };
    }))
    .pipe(require('gulp-nunjucks').compile({}, {env}))
    .pipe(require('gulp-htmlmin')({
      collapseWhitespace: true
    }))
    .pipe(require('gulp-rename')({
      extname: '.html'
    }))
    .on('error', util.log)
    .pipe(gulp.dest('public'));
});
