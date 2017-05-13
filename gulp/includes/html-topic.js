'use strict';

function addFilters(env) {
  env.addFilter('concatSpeakerNames', concatSpeakerNames);
}

function concatSpeakerNames(topic, speakers) {
  return topic.speaker.map(function (speakerId, index) {
    var speaker = speakers[speakerId];
    var nickname = (speaker.social && speaker.social.nickname) ? ` <span class="nickname">(${speaker.social.nickname})</span>` : '';
    //return `<a href="#speaker-${speakerId}" class="name">${speaker.name}</a>${nickname}`;
    return `<a href="#speaker-${speakerId}" class="name">${speaker.name}</a>`;
  }).join(', ');
}

module.exports = {
  addFilters,
  concatSpeakerNames
}
