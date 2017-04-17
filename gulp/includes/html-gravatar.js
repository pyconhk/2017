'use strict';

const gravatar = require('gravatar');

function getImageUrl(email) {
  const option = {
    s: '80',
    d: 'identicon',
    r: 'pg',
  };
  return gravatar.url (email, option);
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
}
