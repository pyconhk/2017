// @flow

import {
  IMPORT_SESSIONS,
  IMPORT_LANGS,
  IMPORT_SPEAKERS,
} from '../action';

type TimetableState = {
  sessions: Object,
  topics: Object,
  venues: Object,
  langs: Object,
  speakers: Object,
  sponsors: Object,
};


export default function (state: TimetableState = { sessions: {}, topics: {}, venues: {}, langs: {}, speakers: {}, sponsors: {} }, action: Object) {
  switch (action.type) {
    case IMPORT_LANGS: {
      const { langs, ...others } = state;
      return {
        langs: action.languages,
        ...others,
      };
    }
    case IMPORT_SESSIONS: {
      const { sessions, ...others} = state;
      return {
        sessions: action.sessions,
        ...others,
      };
    }
    case IMPORT_SPEAKERS: {
      const { speakers, ...others } = state;
      return {
        speakers: action.speakers,
        ...others,
      };
    }
    default:
      return state;
  }
}
