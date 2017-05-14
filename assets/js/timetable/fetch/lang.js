import { safeLoad } from 'js-yaml';
import { importLangs } from '../../action';

/* globals fetch */

export default function loadLang(store) {
  return fetch('/2017/data/langs.yml')
    .then(response => response.text())
    .then(safeLoad)
    .then(data => store.dispatch(importLangs(data)));
}
