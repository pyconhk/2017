import firebase from './firebase';

/* globals location, navigator */

if (location.hostname !== 'localhost' && location.protocol !== 'https:') {
  // Strict HTTPS
  location.href = `https:${location.href.substring(location.protocol.length)}`;
}

const messaging = firebase.messaging();

messaging.requestPermission()
  .then(() => navigator.serviceWorker.getRegistration())
  .then((registration) => {
    messaging.useServiceWorker(registration);
    return messaging.getToken();
  })
  .catch((err) => {
    console.log('Unable to get permission to notify.', err);
  });
