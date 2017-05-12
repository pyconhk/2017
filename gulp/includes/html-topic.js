'use strict';

function addFilters(env) {
  env.addFilter('concatSpeakerNames', concatSpeakerNames);
}

function concatSpeakerNames(topic, speakers) {
  var speakerNames = '';
  for (var i = 0; i < topic.speaker.length; i++) {
    var speakerId = topic.speaker[i];
    var speaker = speakers[speakerId];
    if (speaker && speaker.name) {
      speakerNames += `<span class="name">${speaker.name}</span>`;      
      if (speaker.social && speaker.social.nickname) {
        speakerNames += `&nbsp;<span class="nickname">(${speaker.social.nickname})</span>`; 
      }  
      if (i !== topic.speaker.length - 1) {
          speakerNames += ',&nbsp;'
      }
    }
  }
  return `By ${speakerNames}`;
}

module.exports = {
  addFilters,
  concatSpeakerNames
}
