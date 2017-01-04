//@flow
'use strict';

const fs = require('fs');
const gulp = require('gulp-help')(require('gulp'));
const util = require('gulp-util');
const webpack = require('webpack');
const config = require('../webpack.config');

gulp.task('build:js', 'Build javascript bundle into ./public/js/app.js', (cb) => {
  webpack(config.production, (e, stats) => {
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