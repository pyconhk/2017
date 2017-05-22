// @flow

'use strict';

const gravatar = require('gravatar');
const yaml = require('js-yaml');

/* globals fetch, document */

function getAvatarImage(member) {
  if (!member.email && member.fallback) {
    return member.fallback;
  }

  if (!member.email && member.github) {
    return `https://github.com/${member.github}.png`;
  }

  if (!member.email && member.fb) {
    return `https://graph.facebook.com/${member.fb}/picture?width=160&height=160`;
  }

  if (!member.email && member.twitter) {
    return `https://twitter.com/${member.twitter}/profile_image?size=bigger`;
  }

  return gravatar.url(member.email, {
    s: '80',
    d: 'mm',
    r: 'g',
  });
}

fetch('/2017/data/staff.yml')
  .then((response) => {
    if (response.status === 200) {
      return response.text();
    }
    throw new Error(response);
  })
  .catch(console.error)
  .then(content => yaml.load(content))
  .then(({ teams }) => {
    teams.forEach(({ members, name }) => {
      members.forEach((member) => {
        if (!member.email) {
          // eslint-disable-next-line no-param-reassign
          member.email = '';
        }
        const memberName = member.name.replace(/([\s]+)/g, '\\$1').replace('.', '');
        const teamName = name.replace(/(\s+)/g, '\\$1');
        const selector = `[data-team=${teamName}][data-name=${memberName}]`;
        const src = getAvatarImage(member);
        const image = document.createElement('img');
        image.setAttribute('src', src);
        image.setAttribute('alt', `${member.name} icon`);
        image.classList.add('avatar');
        const root = document.querySelector(selector);
        if (root) {
          root.appendChild(image);
        }
      });
    });
  });
