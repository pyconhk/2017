// @flow

import $ from 'jquery';

/* global navigator */

if (navigator.serviceWorker) {
  // $FlowFixMe
  require.ensure(['./sw'], () => {
    require('./sw');
  });
}

require('./component/sidebar');
require('./component/collapsible');
require('./component/ga');
require('./component/modal');

$('[data-activates]').sideNav();
$('.collapsible').collapsible();

// $FlowFixMe
require.ensure(['node-waves'], () => {
  const Waves = require('node-waves');
  Waves.init();
});
