'use strict';

import gravatar from 'gravatar';

export function getImageUrl(email) {

  const option = {
    s: '100',
    d: 'identicon',
    r: 'pg',
  };
  return gravatar.url (email, option);
}

$(document).ready(function() {
  $("li[data-email]").each(function(i) {
    let $this = $(this);
    let url = getImageUrl($this.data('email'));
    let imgChild = $this.find('img');
    if (imgChild) {
      imgChild.prop('src', url);
    }
  });
});
