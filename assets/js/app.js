'use strict';

import $ from 'jquery';
import store from './store';
import authSubscribe from './subscribe/auth';

require('./component/sidebar');
require('./component/collapsible');
require('./component/ga');
require('./component/modal');

$('[data-activates]').sideNav();
$('.collapsible').collapsible();

require.ensure(['node-waves'], () => {
  const Waves = require('node-waves');
  Waves.init();
});

authSubscribe();

store.subscribe(authSubscribe);

$('#signin-modal').modal();
