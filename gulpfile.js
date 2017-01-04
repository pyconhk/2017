'use strict';

require('fs').readdirSync().forEach((file) => require(`./${file}`));
