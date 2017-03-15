//@flow

'use strict';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from './timetable/Store';
import Timetable from './timetable/containers/Timetable';

/**
 * _isDOM
 * @param {mixed} obj object to test
 * @return {bool} if obj is an HTMLElement
 */
function _isDOM(obj:Object):boolean {
  try {
    //Using W3 DOM2 (works for FF, Opera and Chrom)
    return obj instanceof HTMLElement;
  } catch(e) {
    //Browsers not supporting W3 DOM2 don't have HTMLElement and
    //an exception is thrown and we end up here. Testing some
    //properties that all elements have. (works on IE7)
    return (typeof obj==="object") &&
      (obj.nodeType===1) && (typeof obj.style === "object") &&
      (typeof obj.ownerDocument ==="object");
  }
}

/**
 * timetable
 * @param {object} element HTMLElement to render to
 * @return {object} object with control function
 */
function timetable(element:Object):Object {

  // if element is not a valid DOM object
  if (!_isDOM(element)) {
    throw "timetable requires DOM element as argument 1";
  }

  // create store
  const store = createStore(reducer);

  ReactDOM.render(
    <Provider store={store}>
      <Timetable />
    </Provider>,
    element
  );

  // return control object
  const control = {
  };
  return control;
}

// export as global function
if (typeof window != "undefined") {
  window.timetable = timetable;
}
