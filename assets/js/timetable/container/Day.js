import { connect } from 'react-redux';
import Day from '../component/Day';

function mapStateToProps(state, ownProps) {
  const day = `day-${ownProps.day}`;
  const timeslots = state.timetable.timeslots[day] || {};
  const sessions = state.timetable.sessions[day] || [];
  return {
    timeslots,
    sessions,
    ...ownProps,
  };
}

export default connect(mapStateToProps)(Day);
