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
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithRedirect(provider);
}

export function facebookAuth() {
  const provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithRedirect(provider);
}

export function twitterAuth() {
  const provider = new firebase.auth.TwitterAuthProvider();
  firebase.auth().signInWithRedirect(provider);  
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
