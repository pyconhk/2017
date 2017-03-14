//@flow
'use strict';

const gulp = require('gulp-help')(require('gulp'));
const data = require('gulp-data');
const util = require('gulp-util');
const path = require('path');
const htmldata = require('./includes/html-data');

function swallowError (error) {
  util.log(`Failed on '${util.colors.cyan('dev:html')}': ${error.toString()}`);
  this.emit('end')
}

gulp.task('dev:html', 'Build ./assets/pages/*.jinja into HTML files', () => {
  const {Environment, FileSystemLoader} = require('nunjucks');
  const env = new Environment([
    new FileSystemLoader('assets/pages', {watch: true}),
    new FileSystemLoader('assets/layouts', {watch: true})
  ]);

  return gulp.src('assets/pages/**/*.jinja')
    .pipe(data(htmldata.fileData))
    .pipe(require('gulp-nunjucks').compile({}, {env}).on('error', swallowError))
    .pipe(require('gulp-rename')({
      extname: '.html'
    }))
    .on('error', swallowError)
    .pipe(gulp.dest('public'));
});
