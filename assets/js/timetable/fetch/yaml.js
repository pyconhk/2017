import { safeLoad } from 'js-yaml';

/* globals fetch */

export default function loadSpeakers(store, url, action) {
  return fetch(url)
    .then(response => response.text())
    .then(safeLoad)
    .then(data => store.dispatch(action(data)));
}
