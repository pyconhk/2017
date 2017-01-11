'use strict';

const UglifyPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const OccurenceOrderPlugin = require('webpack/lib/optimize/OccurrenceOrderPlugin');
const DedupePlugin = require('webpack/lib/optimize/DedupePlugin');
const AggressiveMergingPlugin = require('webpack/lib/optimize/AggressiveMergingPlugin');
const HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin');

const merge = require('webpack-merge');

const base = {
  plugins: [
    new OccurenceOrderPlugin(),
    new DedupePlugin(),
    new AggressiveMergingPlugin()
  ],
  externals: {
    jquery: 'jQuery',
    hammerjs: 'Hammer',
    'node-waves': 'Waves'
  },
  entry: {
    app: ['./assets/js/app'],
    venue: ['./assets/js/venue']
  },
  devtool: 'source-map',
  output: {
    path: `${__dirname}/public/js`,
    publicPath: '/2017/js/',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js'],
    fallback: ['node_modules']
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel'},
      {test: /worker\.js$/, loader: 'worker'},
      {test: /\.jsx$/, loaders: ['babel']}
    ]
  },
  worker: {
    output: {
      filename: 'worker.js',
      chunkFilename: '[id].worker.js'
    }
  }
};

const dev = merge.smart({
  plugins: [
    new HotModuleReplacementPlugin()
  ],
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:8080/'
    ],
    venue: [
      'webpack-dev-server/client?http://localhost:8080/'
    ]
  },
  module: {
    loaders: [
      {test: /\.jsx$/, loaders: ['react-hot']}
    ]
  }
}, base);

const production = merge.smart({
  plugins: [
    new UglifyPlugin({minimize: true}),
  ]
}, base);

module.exports = {
  base, dev, production
};