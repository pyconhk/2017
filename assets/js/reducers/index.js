import { combineReducers } from 'redux';
import user from './user';
import sessions from './sessions';
import topics from './topics';
import venues from './venues';

export default combineReducers({ user, sessions, topics, venues, });
