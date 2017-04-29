'use strict';

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

let venues;

function getVenueName(id) {
  if (id in venues) {
    return venues[id].name;
  } else {
    return '';
  }
}

module.exports = function addExtension(env) {
  const file = path.resolve('assets', 'data', 'venues.yml');
  fs.readFile(file, (e, buffer) => {
    if (e) {
      throw e;
    }
    venues = yaml.load(buffer);
    env.addFilter('venueName', getVenueName);
  });
};
