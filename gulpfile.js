'use strict';

require('fs').readdirSync('./gulp')
  .forEach((file) => require(`./gulp/${file}`));
