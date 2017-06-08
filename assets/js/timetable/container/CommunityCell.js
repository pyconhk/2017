// @flow
import { connect } from 'react-redux';
import CommunityCell from '../component/CommunityCell';
import type { State } from '../../reducers';

type Props = {
  id: string,
  col: number,
  name: string,
  venue: string,
  path: string,
}

function mapStateToProps(state: State, ownProps: Props) {
  return {
    col: ownProps.col,
    name: ownProps.name,
    venue: ownProps.venue,
    communityId: ownProps.id,
  };
}

export default connect(mapStateToProps)(CommunityCell);
