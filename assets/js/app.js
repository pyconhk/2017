// @flow

'use strict';

import $ from 'jquery';

require('./component/sidebar');
require('./component/collapsible');
require('./component/ga');

$('[data-activates]').sideNav();
$('.collapsible').collapsible();

// $FlowFixMe
require.ensure(['node-waves'], () => {
  const Waves = require('node-waves');
  Waves.init();
});
