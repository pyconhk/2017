// @flow

import { combineReducers } from 'redux';
import user from './user';
import timetable from './timetable';
import type { User } from './user';
import type { TimetableState } from './timetable';

export type State = {
  user: User,
  timetable: TimetableState,
}

export default combineReducers({ user, timetable });
