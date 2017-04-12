'use strict';

require('fs').readdirSync('./gulp')
  .forEach((file) =>
    (file.match(/^[a-z][\w\-]+\.js$/)) ? require(`./gulp/${file}`) : null);
