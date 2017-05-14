import { connect } from 'react-redux';
import Day from '../component/Day';

function mapStateToProps(state, ownProps) {
  return {
    sessions: state.timetable.sessions,
    ...ownProps,
  };
}

export default connect(mapStateToProps)(Day);
