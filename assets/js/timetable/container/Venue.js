// @flow

import { connect } from 'react-redux';
import Venue from '../component/Venue';
import type { State } from '../../reducers';

type Props = {
  id: string
}

function mapStateToProps(state: State, ownProps: Props) {
  const venue = state.timetable.venues[ownProps.id]
  return {
    name: venue.name,
  };
}

export default connect(mapStateToProps)(Venue);
