'use strict';

import gravatar from 'gravatar';

export function getImage(email) {

  const option = {
    s: '100',
    d: 'identicon',
    r: 'pg',
  };
  return gravatar.url (email, option);
}
