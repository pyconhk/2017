// @flow
import { connect } from 'react-redux';
import SignInModal from '../component/SignInModal';
import type { State } from '../../reducers';

function mapStateToProps(state: State, ownProps: {position: 'navbar' | 'sidebar'}) {
  return {
    user: state.user,
    ...ownProps,
  };
}

export default connect(mapStateToProps)(SignInModal);
