'use strict';

const querystring = require('querystring');
const parseURL = require('url').parse;
const formatURL = require('url').format;

/**
 * appendURL
 * generates a URL modification callback function {doAppendURL~inner}
 * @param {string} urlStr URL string
 * @return {doAppendURL~inner} the returned function
 */
function appendURL(urlStr) {
  /**
   * doAppendURL
   * @param {object} query URL query parameters to add / change
   * @param {object} options NodeJS url.urlObject attributes to override
   * @return {string} URL modification results
   */
  const doAppendURL = function (query = {}, options = {}) {
    const urlObject = parseURL(urlStr);
    const combinedQuery = Object.assign(querystring.parse(urlObject.query),
      query);
    const resultURL = Object.assign({}, urlObject, {
      // query: querystring.stringify(combinedQuery), // no need for formatURL
      search: `?${querystring.stringify(combinedQuery)}`,
    }, options);
    return formatURL(resultURL);
  };
  return doAppendURL;
}

/**
 * withGA
 * middleware for appendURL
 * @param {function} doInner doAppendURL to run
 * @param {string} utm_content Campaign content (e.g. earlybird_ticket)
 * @param {string} utm_campaign Campaign name (e.g. frontpage_tickets)
 * @param {string} [utm_medium] Campaign medium (e.g. banner, action_button)
 * @param {string} [utm_source] Campaign source (i.e. website)
 * @return {doAppendURL~inner} the returned function
 */
// eslint-disable-next-line camelcase
function withGA(doInner, utm_content, utm_campaign, utm_medium = 'action_button', utm_source = 'website') {
  /**
   * doAppendURL
   * @param {object} query URL query parameters to add / change
   * @param {object} options NodeJS url.urlObject attributes to override
   * @return {string} URL modification results
   */
  const doAppendURL = (query = {}, options = {}) => doInner(
      Object.assign(
        query,
        {
          utm_source,
          utm_medium,
          utm_campaign,
          utm_content,
        }
      ),
      options
    );
  return doAppendURL;
}

/**
 * execAppend
 * execute the callback of appendURL
 * @param {function} callback to execute
 * @return {mixed} callback result
 */
function execAppend(callback) {
  return callback();
}

/**
 * addFilters
 * add functions here as nunjucks filters
 * @param {nunjucks.Environment} env environment object to modify
 */
function addFilters(env) {
  env.addFilter('appendURL', appendURL);
  env.addFilter('withGA', withGA);
  env.addFilter('execAppend', execAppend);
}

module.exports = {
  addFilters,
  appendURL,
  execAppend,
  withGA,
};
