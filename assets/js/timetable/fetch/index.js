import {
  importSpeakers,
  importSessions,
  importLangs,
  importSponsors,
  importTopics,
  importVenues,
  importTimeslots,
} from '../../action';

import fetchData from './yaml';

const urls = {
  langs: importLangs,
  sessions: importSessions,
  speakers: importSpeakers,
  sponsor: importSponsors,
  topics: importTopics,
  venues: importVenues,
  timeslots: importTimeslots,
};

export default function loadData(store) {
  return Promise.all(Object.keys(urls).map(url => fetchData(store, `${BASE_PATH}/data/${url}.yml`, urls[url])));
}
