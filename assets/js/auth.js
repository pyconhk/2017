import firebase from './firebase';

const githubAuth = function() {
  const provider = new firebase.auth.GithubAuthProvider();
  firebase.auth().signInWithRedirect(provider);
}

const googleAuth = function() {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithRedirect(provider);
}

const facebookAuth = function() {
  const provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithRedirect(provider);
}

const twitterAuth = function() {
  const provider = new firebase.auth.TwitterAuthProvider();
  firebase.auth().signInWithRedirect(provider);  
}

const signout = function() {
  firebase.auth().signOut();
}

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    console.log (`${user} is signed in.`);
  } else {
    // No user is signed in.
    console.log (`not sign in.`);
  }
});
