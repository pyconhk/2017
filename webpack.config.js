'use strict';

const webpack = require('webpack');
const UglifyPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const AggressiveMergingPlugin = require('webpack/lib/optimize/AggressiveMergingPlugin');
const HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin');

const merge = require('webpack-merge');

var firebaseConfig = {};
try {
  firebaseConfig = require('./assets/config/firebase.json');
} catch (ex) {
  firebaseConfig = {
    apiKey: "<API_KEY>",
    authDomain: "<PROJECT_ID>.firebaseapp.com",
    databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
    storageBucket: "<BUCKET>.appspot.com",
    messagingSenderId: "<SENDER_ID>",
  }
}

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
    venue: ['./assets/js/venue'],
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
