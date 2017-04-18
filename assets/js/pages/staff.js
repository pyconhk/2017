'use strict';

const gravatar = require('gravatar');
const yaml = require('js-yaml');

/* globals fetch */

fetch('/2017/data/staff.yml')
  .then((response) => {
    if (response.status === 200) {
      return response.text();
    } else {
      throw new Error(response);
    }
  })
  .catch(console.error)
  .then(content => yaml.load(content))
  .then(({ teams }) => {
    teams.forEach(({ members, name }) => {
      members.forEach((member) => {
        if (!member.email) {
          member.email = '';
        }
        const memberName = member.name.replace(/([\s]+)/g, '\\$1').replace('.', '');
        const teamName = name.replace(/(\s+)/g, '\\$1');
        const selector = `[data-team=${teamName}][data-name=${memberName}]`;
        const src = gravatar.url(member.email, {
          s: '80',
          d: 'mm',
          r: 'g',
        });
        const image = document.createElement('img');
        image.setAttribute('src', member.fallback ? member.fallback : src);
        image.setAttribute('alt', `${member.name} icon`);
        image.classList.add('avatar');
        const root = document.querySelector(selector);
        root.appendChild(image)
      });
    });
  });
