'use strict';

function concatSpeakerNames(topic, speakers) {
  return topic.speaker.map((speakerId) => {
    const speaker = speakers[speakerId];
    // return `<a href="#speaker-${speakerId}" class="name">${speaker.name}</a>${nickname}`;
    return `<a href="#speaker-${speakerId}" class="name">${speaker.name}</a>`;
  }).join(', ');
}

function addFilters(env) {
  env.addFilter('concatSpeakerNames', concatSpeakerNames);
}

module.exports = {
  addFilters,
  concatSpeakerNames,
};
