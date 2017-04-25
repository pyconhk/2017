'use strict';

require('dotenv').load();

const webpack = require('webpack');
const UglifyPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const AggressiveMergingPlugin = require('webpack/lib/optimize/AggressiveMergingPlugin');
const HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin');

const merge = require('webpack-merge');

const firebaseConfig = {
  FIREBASE_API_KEY: process.env.FIREBASE_API_KEY || '<API_KEY>',
  FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN || '<PROJECT_ID>.firebaseapp.com',
  FIREBASE_DATEBASE_URL: process.env.FIREBASE_DATEBASE_URL || 'https://<DATABASE_NAME>.firebaseio.com',
  FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET || '<BUCKET>.appspot.com',
  FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID || '<SENDER_ID>',
};

const base = {
  plugins: [
    new AggressiveMergingPlugin(),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(firebaseConfig)
    })
  ],
  externals: {
    jquery: 'jQuery',
    hammerjs: 'Hammer',
    'node-waves': 'Waves',
    'firebase': 'firebase'
  },
  entry: {
    app: ['./assets/js/app'],
    timetable: ['./assets/js/timetable'],
    venue: ['./assets/js/venue'],
    staff: ['./assets/js/pages/staff']
  },
  devtool: 'source-map',
  output: {
    path: `${__dirname}/public/js`,
    publicPath: '/2017/js/',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      {test: /\.js$/, use: ['babel-loader']},
      {test: /\.jsx$/, use: ['babel-loader']}
    ]
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
    timetable: [
      'webpack-dev-server/client?http://localhost:8080/'
    ],
    venue: [
      'webpack-dev-server/client?http://localhost:8080/'
    ]
  },
  module: {
    loaders: [
      {test: /\.jsx$/, use:['react-hot']}
    ]
  }
}, base);

const production = merge.smart({
  plugins: [
    new UglifyPlugin({
      minimize: true,
      sourceMap: true
    })
  ]
}, base);

module.exports = {
  base, dev, production
};
