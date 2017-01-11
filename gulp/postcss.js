//@flow
'use strict';

const autoprefixer = require('autoprefixer');
const mergeRules = require('postcss-merge-rules');
const mergeLongHands = require('postcss-merge-longhand');

module.exports = [
  autoprefixer({
    browsers: ['last 5 version']
  }),
  mergeLongHands(),
  mergeRules()
];