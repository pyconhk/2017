'use strict';

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

let speakers;

function getSpeakerName(id) {
  if (id in speakers) {
    return speakers[id].name;
  } else {
    return '';
  }
}

module.exports = function addExtension(env) {
  const file = path.resolve('assets', 'data', 'speakers.yml');
  fs.readFile(file, (e, buffer) => {
    if (e) {
      throw e;
    }
    speakers = yaml.load(buffer);
    env.addFilter('speakerName', getSpeakerName);
  });
};
