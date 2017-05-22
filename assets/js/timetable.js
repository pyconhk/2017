// @flow

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Timetable from './timetable/container/Timetable';
import SignInModal from './timetable/container/SignInModal';

import loadData from './timetable/fetch';

require('./component/modal');

const root = document.querySelectorAll('[data-mount=auth]');
if (root.length > 0) {
  require('./subscribe/auth');
  Array.prototype.slice.call(root).forEach((mount) => {
    ReactDOM.render(<Provider store={store}><SignInModal position={mount.getAttribute('data-position')} /></Provider>, mount);
  });
}


/* globals HTMLElement, window, document */

/**
 * isDOM
 * @param {mixed} obj object to test
 * @return {bool} if obj is an HTMLElement
 */
function isDOM(obj: HTMLElement | Object): boolean {
  try {
    // Using W3 DOM2 (works for FF, Opera and Chrom)
    return obj instanceof HTMLElement;
  } catch (e) {
    // Browsers not supporting W3 DOM2 don't have HTMLElement and
    // an exception is thrown and we end up here. Testing some
    // properties that all elements have. (works on IE7)
    return (typeof obj === 'object') &&
      (obj.nodeType === 1) && (typeof obj.style === 'object') &&
      (typeof obj.ownerDocument === 'object');
  }
}

/**
 * timetable
 * @param {object} element HTMLElement to render to
 * @return {object} object with control function
 */
function timetable(element: HTMLElement) {
  // if element is not a valid DOM object
  if (!isDOM(element)) {
    throw new Error('timetable requires DOM element as argument 1');
  }

  ReactDOM.render(
    <Provider store={store}>
      <Timetable />
    </Provider>,
    element
  );
}

const mount = document.getElementById('timetable-wrapper');

// export as global function
if (typeof window !== 'undefined' && mount) {
  loadData(store)
    .then(() => timetable(mount));
}
