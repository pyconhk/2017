/**
 * @file Google Analytics related link tracking
 */

import $ from 'jquery';

/* globals location, window, document */

// refined ga with local debug
if (location.hostname === 'localhost') {
  // dummy ga tracker for debug in localhost
  console.debug('[GA local debug] override localhost `ga` function');
  window.ga = function (...args) {
    if (typeof args[0] === 'function') {
      const tracker = {
        get(name) {
          return `debug:${name}`;
        },
      };
      window.setTimeout(args[0](tracker), 500);
    } else if (args[0] === 'create') {
      // eslint-disable-next-line no-unused-vars
      const [cmd, type, trackingID] = args;
      console.debug(`[GA local debug] ${type} "${trackingID}"`);
    } else if (args[0] === 'send') {
      // eslint-disable-next-line no-unused-vars
      const [cmd, type, category, action, label, value] = args;
      if (type === 'pageview') {
        console.debug(`[GA local debug] sending ${type}`);
      } else {
        console.debug(`[GA local debug] sending ${type}`, args.slice(2));
      }
    }
  };
} else {
  // adapt Google Analytics async pattern
  // create placeholder before GA is loaded
  // eslint-disable-next-line prefer-rest-params
  window.ga = window.ga || function () { (window.ga.q = window.ga.q || []).push(arguments); }; window.ga.l = +new Date();
}

// to track normal outbound links
const trackLinkOutbound = function () {
  const url = this.href;
  console.debug('[GA debug] trackLinkOutbound', url);
  window.ga('send', 'event', 'outbound', 'click', url, {
    transport: 'beacon',
    hitCallback() { document.location = url; },
  });
};

// to track links
const trackEvent = function (category, action, label, value) {
  return function () {
    console.debug(`[GA debug] track event "${category}", "${action}", "${label}", "${value}"`);
    window.ga('send', 'event', category, action, label, value);
  };
};

// only apply link change if ga is ready and a proper clientId is here
window.ga((tracker) => {
  // get ga client ID
  const clientID = tracker.get('clientId');

  $('a').each(function () {
    const link = this;
    const $link = $(this);
    if (link.hostname.match(/^(.+?\.|)eventbrite\.com/)) {
      // rewrite links to add cross domain tracking
      link.search = (link.search === '') ?
        `?_eboga=${clientID}` : `${link.search}&_eboga=${clientID}`;

      // track outbound link
      const category = $link.data('ga-category');
      const action = $link.data('ga-action');
      const label = $link.data('ga-label');
      const value = $link.data('ga-value');
      if ((typeof category !== 'undefined') && (category !== '')
        && (typeof action !== 'undefined') && (action !== '')) {
        link.onclick = trackEvent(category, action, label, value);
      }
    } else if (link.href.match(/^mailto:/)) {
      // track clicking of the email link
      const email = link.href.substring(7);
      link.onclick = trackEvent('outbound', 'click', 'email', email);
    } else if (!link.href.match(window.location.hostname)) {
      // track other outbound link, as long as it is not an internal linfk
      link.onclick = trackLinkOutbound;
    }
  });
});
