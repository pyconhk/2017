'use strict';

const path = require('path');

// base path for the application
const basepath = path.dirname(path.dirname(__dirname));
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

module.exports = {
  genPageID,
  getPagePath,
}
