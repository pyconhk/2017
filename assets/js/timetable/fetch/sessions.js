import { safeLoad } from 'js-yaml';
import { importSessions } from '../../action';

/* globals fetch */

export default function loadSession(store) {
  return fetch('/2017/data/sessions.yml')
    .then(response => response.text())
    .then(safeLoad)
    .then(data => store.dispatch(importSessions(data)));
}
