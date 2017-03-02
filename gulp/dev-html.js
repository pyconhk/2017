//@flow
'use strict';

const gulp = require('gulp-help')(require('gulp'));
const data = require('gulp-data');
const util = require('gulp-util');
const path = require('path');
const nunjucks = require('gulp-nunjucks');

// base path for the application
const basepath = path.dirname(__dirname);
const assetpath = basepath + '/assets/pages';

function genPageID(pagePath) {
  if (pagePath === 'index') {
    return 'page-front';
  }
  return 'page--' + pagePath
    .replace('/', '--')
    .replace('.', '-')
    .replace(/--index$/, '');
}

function getPagePath(filepath) {
  return filepath
    .replace(assetpath, '')
    .replace(/\.jinja$/, '')
    .replace(/^\//, '');
}

gulp.task('dev:html', 'Build ./assets/pages/*.jinja into HTML files', () => {
  const {Environment, FileSystemLoader} = require('nunjucks');
  const env = new Environment([
    new FileSystemLoader('assets/pages', {watch: true}),
    new FileSystemLoader('assets/layouts', {watch: true})
  ]);

  return gulp.src('assets/pages/**/*.jinja')
    .pipe(data(function(file) {
      const pagePath = getPagePath(file.path);
      const pageID = genPageID(pagePath);
      util.log(`Working on '${util.colors.cyan('dev:html')}':`, {
        pagePath,
        pageID,
      });
      return {
        pagePath,
        pageID,
      };
    }))
    .pipe(nunjucks.compile({}, {env}))
    .pipe(require('gulp-rename')({
      extname: '.html'
    }))
    .on('error', util.log)
    .pipe(gulp.dest('public'));
});
