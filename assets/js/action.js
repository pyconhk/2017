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

export const IMPORT_SPEAKERS = 'IMPORT_SPEAKERS';
export function importSpeakers(speakers: Object) {
  return {
    speakers,
    type: IMPORT_SPEAKERS,
  };
}

export const IMPORT_SPONSORS = 'IMPORT_SPONSORS';
export function importSponsors(sponsors: Object) {
  return {
    sponsors,
    type: IMPORT_SPONSORS,
  };
}

export const IMPORT_TOPICS = 'IMPORT_TOPICS';
export function importTopics(topics: Object) {
  return {
    topics,
    type: IMPORT_TOPICS,
  };
}

export const IMPORT_VENUES = 'IMPORT_VENUES';
export function importVenues(venues: Object) {
  return {
    venues,
    type: IMPORT_VENUES,
  };
}
