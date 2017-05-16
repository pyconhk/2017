import { connect } from 'react-redux';
import Timetable from '../component/Timetable';

function mapStateToProps(state) {
  return {
    sessions: state.timetable.sessions,
  };
}

export default connect(mapStateToProps)(Timetable);
