// @flow

'use strict';

type TimetableState = { sessions: Object, topics: Object, venues: Object };

export default function (state: TimetableState = { sessions: {}, topics: {}, venues: {} } ) {
  return state;
}
