import {
  importSpeakers,
  importSessions,
  importLangs,
  importSponsors,
  importTopics,
  importVenues,
} from '../../action';

import fetchData from './yaml';

const urls = {
  langs: importLangs,
  sessions: importSessions,
  speakers: importSpeakers,
  sponsor: importSponsors,
  topics: importTopics,
  venues: importVenues,
};

export default function loadData(store) {
  return Promise.all(Object.keys(urls).map(url => fetchData(store, `/2017/data/${url}.yml`, urls[url])));
}
