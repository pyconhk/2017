'use strict';

export const USER_SIGN_IN = 'USER_SIGN_IN';
export function userSignIn(user) {
  return {
    user,
    type: USER_SIGN_IN,
  }
}

export const USER_NOT_AUTH = 'USER_NOT_AUTH';
export function userNotAuth() {
  return { type: USER_NOT_AUTH, };
}
