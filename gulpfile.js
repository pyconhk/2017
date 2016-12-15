'use strict';

const gulp = require('gulp-help')(require('gulp'));
const util = require('gulp-util');
const rename = require('gulp-rename');

const imagemin = require('gulp-imagemin');

const sass = require('gulp-sass');
const cleanCss = require('gulp-clean-css');

const webpack = require('webpack');
const merge = require('webpack-merge');
const config = require('./webpack.config');
const fs = require('fs');

const WebpackDevServer = require('webpack-dev-server');

const {NODE_ENV} = process.env;
const PRODUCTION = process.env.NODE_ENV === 'production';

gulp.task('image', 'Build imagemin version of ./assets/images/**/* into ./public/images', () => {
  return gulp.src('./assets/images/**/*.*')
    .pipe(imagemin())
    .on('error', util.log)
    .pipe(gulp.dest('public/images'));
});

gulp.task('css', 'Build ./assets/scss/*.scss into ./public', () => {
  return gulp.src('./assets/scss/*.scss')
    .pipe(sass())
    .on('error', util.log)
    .pipe(gulp.dest('public'))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(cleanCss())
    .pipe(gulp.dest('public'));
});

gulp.task('page', 'Build ./assets/pages/*.jinja into HTML files', () => {
  const {readdirSync} = require('fs');
  const {Environment, FileSystemLoader} = require('nunjucks');
  const env = new Environment([
    new FileSystemLoader('assets/pages', {watch: !PRODUCTION}),
    new FileSystemLoader('assets/layouts', {watch: !PRODUCTION})
  ]);

  return gulp.src('assets/pages/**/*.jinja')
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

gulp.task('server', 'Start a webpack-dev-server for the project at http://localhost:8080', () => {
  const compiler = webpack(config.dev);
  const server = new WebpackDevServer(compiler, {
    hot: true,
    contentBase: './public',
    proxy: {
      '/2017': {
        target: 'http://localhost:8080',
        pathRewrite: {'^/2017': ''}
      }
    }
  });

  server.listen(8080);
});

gulp.task('js', 'Build javascripts bundle into ./public/js/app.js', (cb) => {
  webpack(NODE_ENV == 'production' ? config.production : config.dev, (e, stats) => {
    if (e) {
      throw new webpack.PluginError('[webpack]', e);
    } else {
      util.log('[webpack]', stats.toString({
        version: true,
        timings: true,
        assets: true,
        chunks: true,
        chunkModules: true,
        modules: true
      }));
      fs.writeFile('./webpack.json', JSON.stringify(stats.toJson('verbose')));
    }
    cb();
  });
});

gulp.task('watch:css', false, () => {
  return gulp.watch([
    './assets/scss/**/*.scss'
  ], ['css']);
});

gulp.task('watch:page', false, () => {
  return gulp.watch([
    './assets/pages/**/*.jinja',
    './assets/layouts/**/*.jinja'
  ], ['page']);
});

gulp.task('watch:image', false, () => {
  return gulp.watch([
    './assets/images/**/*.*'
  ], ['image']);
});

gulp.task('watch', 'Monitor and rebuild images, pages and css files.',
  ['watch:image', 'watch:page', 'watch:css']);
gulp.task('build:dev', false, ['js', 'image', 'css', 'page', 'server']);
gulp.task('dev', 'Development mode. Starts',['build:dev', 'watch']);
gulp.task('build', 'Build the site.', ['image', 'css', 'page', 'js']);
