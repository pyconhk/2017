'use strict';

import { createStore, applyMiddleware } from 'redux';
import { logger } from './middleware';
import reducers from './reducers';

const initialState = {
  user: {},
  timetable: {
    topics: {},
    venues: {},
    sessions: {},
  },
};

const middlewares = applyMiddleware(logger);

export default createStore(reducers, initialState, middlewares);
