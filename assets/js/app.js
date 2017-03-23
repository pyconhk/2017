'use strict';

import $ from 'jquery';

require('./component/sidebar');
require('./component/collapsible');

$('[data-activates]').sideNav();
$('.collapsible').collapsible();

(function () {

  // rewrite links to add cross domain tracking
  window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
  ga(function(tracker) {
    var clientId = tracker.get('clientId');
    var clientID = 'hello';
    $('a').each(function () {
      var link = this;
      if (link.hostname.match(/^(.+?\.|)eventbrite\.com/)) {
        link.search = link.search + '_eboga=' + clientID;
      }
    });
  });

})();

require.ensure(['node-waves'], () => {
  const Waves = require('node-waves');
  Waves.init();
});
