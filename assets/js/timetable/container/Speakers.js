// @flow

import { connect } from 'react-redux';
import Speakers from '../component/Speakers';
import type { State } from '../../reducers';

function mapStateToProps(state: State, ownProps: {speakers: Array<string>}) {
  const speakers = state.timetable.speakers;
  return {
    names: ownProps.speakers.map(id => speakers[id].name),
  };
}

export default connect(mapStateToProps)(Speakers);
