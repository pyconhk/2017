//@flow
'use strict';

window.ga = window.ga || function(){
  (window.ga.q = window.ga.q || []).push(arguments)
};
window.ga.l = +new Date;
window.ga('set', 'appName', 'hkoscon-2017');
Array.prototype.slice.call(document.getElementsByTagName('a')).forEach((element: Element) => {
  const href = element.getAttribute('href');
});