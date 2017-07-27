import axios from 'axios';
import { safeLoad } from 'js-yaml';

export default function loadSpeakers(store, url, action) {
  return axios(url, {
    responseType: 'text',
  })
    .then(response => response.data)
    .then(safeLoad)
    .then(data => store.dispatch(action(data)));
}
