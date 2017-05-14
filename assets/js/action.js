// @flow

import type { User } from './reducers/user';

export const USER_SIGN_IN = 'USER_SIGN_IN';

export function userSignIn(user: User) {
  return {
    user,
    type: USER_SIGN_IN,
  };
}

export const USER_NOT_AUTH = 'USER_NOT_AUTH';
export function userNotAuth() {
  return { type: USER_NOT_AUTH };
}

export const IMPORT_LANGS = 'IMPORT_LANGS';
export function importLangs(languages: Object) {
  return {
    languages,
    type: IMPORT_LANGS,
  };
}

export const IMPORT_SESSIONS = 'IMPORT_SESSIONS';
export function importSessions(sessions: Object) {
  return {
    sessions,
    type: IMPORT_SESSIONS,
  };
}
