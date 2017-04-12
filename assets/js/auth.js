import firebase from './firebase';
import store from './store';
import { userSignIn, userNotAuth } from './action';

function firebaseSignIn(provider) {
  firebase.auth().signInWithRedirect(provider);
}

export function githubAuth() {
  firebaseSignIn(new firebase.auth.GithubAuthProvider());
}

export function googleAuth() {
  firebaseSignIn(new firebase.auth.GoogleAuthProvider());
}

export function facebookAuth() {
  firebaseSignIn(new firebase.auth.FacebookAuthProvider());
}

export function twitterAuth() {
  firebaseSignIn(new firebase.auth.TwitterAuthProvider());
}

export function signOut() {
  firebase.auth().signOut().then(() => {
    store.dispatch(userNotAuth());
  });
}

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in.
    console.log (`${user} is signed in.`);
    store.dispatch(userSignIn(user));
  } else {
    // No user is signed in.
    console.log ('Not sign in.');
    store.dispatch(userNotAuth());
  }
});
