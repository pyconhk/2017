// @flow

import {
  IMPORT_SESSIONS,
  IMPORT_LANGS,
  IMPORT_SPEAKERS,
  IMPORT_VENUES,
  IMPORT_TOPICS,
  IMPORT_SPONSORS,
  IMPORT_TIMESLOTS,
} from '../action';

export type TimetableState = {
  sessions: Object,
  topics: Object,
  venues: Object,
  langs: Object,
  speakers: Object,
  sponsors: Object,
  timeslots: Object,
};


export default function (state: TimetableState = { timeslots: {}, sessions: {}, topics: {}, venues: {}, langs: {}, speakers: {}, sponsors: {} }, action: Object) {
  switch (action.type) {
    case IMPORT_LANGS: {
      const { langs, ...others } = state;
      return {
        langs: action.languages,
        ...others,
      };
    }
    case IMPORT_SESSIONS: {
      const { sessions, ...others } = state;
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
    case IMPORT_VENUES: {
      const { venues, ...others } = state;
      return {
        venues: action.venues,
        ...others,
      };
    }
    case IMPORT_SPONSORS: {
      const { sponsors, ...others } = state;
      return {
        sponsors: action.sponsors,
        ...others,
      };
    }
    case IMPORT_TOPICS: {
      const { topics, ...others } = state;
      return {
        topics: action.topics,
        ...others,
      };
    }
    case IMPORT_TIMESLOTS: {
      const { timeslots, ...others } = state;
      return {
        timeslots: action.timeslots,
        ...others,
      };
    }
    default:
      return state;
  }
}
