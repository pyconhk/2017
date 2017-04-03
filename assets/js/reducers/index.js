import { combineReducers } from 'redux';
import user from './user';
import timetable from './timetable';

export default combineReducers({ user, timetable });
