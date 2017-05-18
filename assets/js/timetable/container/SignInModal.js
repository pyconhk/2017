// @flow
import { connect } from 'react-redux';
import SignInModal from '../component/SignInModal';
import type { State } from '../../reducers';

function mapStateToProps(state: State) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps)(SignInModal);
