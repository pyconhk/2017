'use strict';

const util = require('gulp-util');
const path = require('path');
const requireyml = require('require-yml');

// base path for the application
const basepath = path.dirname(path.dirname(__dirname));
const pagespath = `${basepath}/assets/pages`;

/**
 * genPageID
 * @param {string} pagePath page template path relative to `pages` folder
 * @return {string} canonical id for the page
 */
function genPageID(pagePath) {
  if (pagePath === 'index') {
    return 'page-front';
  }
  return `page--${pagePath
    .replace('/', '--')
    .replace('.', '-')
    .replace(/--index$/, '')}`;
}

/**
 * getPagePath
 * @param {string} filePath file.path for the page template
 * @return {string} page template path relative to `pages` folder
 */
function getPagePath(filePath) {
  return filePath
    .replace(pagespath, '')
    .replace(/\.jinja$/, '')
    .replace(/^\//, '');
}

/**
 * fileData
 * @param {Object} extraData file object from gulp pipeline
 * @return {Object} object of template data
 */
function fileData(extraData = {}) {
  const siteOverride = {}
  if (typeof process.env.BASE_PATH === 'string') {
    siteOverride.basePath = process.env.BASE_PATH;
  }
  return (file) => {
    const pagePath = getPagePath(file.path);
    const pageID = genPageID(pagePath);
    const data = requireyml(`${basepath}/assets/data`);
    const output = Object.assign(
      {
        data,
        pagePath,
        pageID,
      },
      extraData
    );
    output.data.site = Object.assign(
      {},
      output.data.site,
      siteOverride
    );
    util.log(`Working on '${util.colors.cyan('dev:html')}':`, {
      pageID: output.pageID,
    });
    return output;
  };
}


module.exports = {
  fileData,
  genPageID,
  getPagePath,
};
