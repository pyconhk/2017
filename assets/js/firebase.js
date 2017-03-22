import firebase from 'firebase';

const config = require('../config/firebase.json');

firebase.initializeApp(config);

export default firebase;
