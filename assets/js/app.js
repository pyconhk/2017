'use strict';

import $ from 'jquery';

require('./component/sidebar');
require('./component/collapsible');
require('./component/ga');

$('[data-activates]').sideNav();
$('.collapsible').collapsible();

require.ensure(['node-waves'], () => {
  const Waves = require('node-waves');
  Waves.init();
});
