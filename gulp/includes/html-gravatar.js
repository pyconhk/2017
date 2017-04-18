'use strict';

const gravatar = require('gravatar');

function getImageUrl(email, fallback) {
  const option = {
    s: '50',
    d: 'mm',
    r: 'pg',
  };

  if (fallback && typeof fallback === 'string') {
    option.d = encodeURI(fallback);
  }

  return gravatar.url(email, option);
}

/**
 * addFilters
 * add functions here as nunjucks filters
 * @param {nunjucks.Environment} env environment object to modify
 */
function addFilters(env) {
  env.addFilter('gravatar',  getImageUrl);
}

module.exports = {
  addFilters,
  getImageUrl
};
