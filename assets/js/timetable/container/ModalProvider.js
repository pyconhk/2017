// @flow

import { connect } from 'react-redux';
import ModalProvider from '../component/ModalProvider';
import type { State } from '../../reducers';
import { addAgenda, removeAgenda } from '../../action';

function mapStateToProps(state: State, ownProps: Object) {
  return {
    topics: state.timetable.topics.topics,
    speakers: state.timetable.speakers,
    sponsors: state.timetable.sponsors,
    agenda: state.timetable.agenda,
    langs: state.timetable.langs,
    venues: state.timetable.venues,
    timeslots: state.timetable.timeslots,
    user: state.user,
    sessions: state.timetable.sessions,
    ...ownProps,
  };
}

function mapDispatchToProps(dispatch: Function) {
  return {
    addTopic(topic: string) {
      return dispatch(addAgenda(topic));
    },
    removeTopic(topic: string) {
      return dispatch(removeAgenda(topic));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalProvider);
