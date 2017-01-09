'use strict';

const gulp = require('gulp-help')(require('gulp'));
const webpack = require('webpack');
const config = require('../webpack.config');
const WebpackDevServer = require('webpack-dev-server');

gulp.task('server', 'Start a webpack-dev-server for the project at http://localhost:8080', () => {
  const compiler = webpack(config.dev);
  const server = new WebpackDevServer(compiler, {
    hot: true,
    contentBase: './public',
    proxy: {
      '/2017': {
        target: 'http://localhost:8080',
        pathRewrite: {
          '^/2017': '',
          '^/2017/js': ''
        }
      }
    }
  });

  server.listen(8080);
});
