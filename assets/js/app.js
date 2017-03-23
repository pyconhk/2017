'use strict';

import $ from 'jquery';

require('./component/sidebar');
require('./component/collapsible');

$('[data-activates]').sideNav();
$('.collapsible').collapsible();

(function () {

  // ensure GA is here
  window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;

  // to track normal outbound links
  const trackTicketOutbound = function(url) {
    ga('send', 'event', 'outbound', 'click', url, {
      'transport': 'beacon',
      'hitCallback': function(){document.location = url;}
    });
  }

  // to track Eventbrite links
  const trackEventbriteOutbound = function(category, action, label, value){
    return function () {
      ga('send', 'event', category, action, label, value);
    }
  }

  ga(function(tracker) {

    // get ga client ID
    const clientID = tracker.get('clientId');

    $('a').each(function () {
      let link = this;
      let $link = $(this);
      if (link.hostname.match(/^(.+?\.|)eventbrite\.com/)) {

        // rewrite links to add cross domain tracking
        link.search = link.search + '_eboga=' + clientID;

        // track outbound link
        const category = $link.data('category');
        const action   = $link.data('action');
        const label    = $link.data('label');
        const value    = $link.data('value');
        if ((typeof category != 'undefined') & (category != '')
          && (typeof action != 'undefined') && (action != '')) {
          this.onClick = trackEventbriteOutbound(category, action, label, value);
        }
      }
    });
  });

})();

require.ensure(['node-waves'], () => {
  const Waves = require('node-waves');
  Waves.init();
});
