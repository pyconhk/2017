// @flow

'use strict';

import $ from 'jquery';

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

