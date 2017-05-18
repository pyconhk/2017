// @flow

import { twitterAuth, facebookAuth, googleAuth, githubAuth } from '../auth';

/* globals document */

const google = document.querySelector('[provider=google]');
const facebook = document.querySelector('[provider=facebook]');
const github = document.querySelector('[provider=github]');
const twitter = document.querySelector('[provider=twitter]');

if (google !== null) {
  google.addEventListener('click', googleAuth);
}
if (facebook !== null) {
  facebook.addEventListener('click', facebookAuth);
}
if (github !== null) {
  github.addEventListener('click', githubAuth);
}
if (twitter !== null) {
  twitter.addEventListener('click', twitterAuth);
}

