// @flow

'use strict';
import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Timetable from './timetable/containers/Timetable';
import authSubscribe from './subscribe/auth';

require('./component/modal');
authSubscribe();

store.subscribe(authSubscribe);

$('#signin-modal').modal();

/* globals HTMLElement, window */

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
function timetable(element: HTMLElement): Object {
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

  // return control object
  return {

  };
}

const mount = document.getElementById('timetable');

// export as global function
if (typeof window !== 'undefined' && mount) {
  timetable(mount);
}
