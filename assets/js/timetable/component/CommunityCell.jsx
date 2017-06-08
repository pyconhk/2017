// @flow

import React from 'react';
import GridCell from './GridCell';
import Venue from '../container/Venue';

/* eslint-disable */
type Props = {
  col: number,
  name: string,
  venue: string,
  communityId: string,
  path: string,
}
/* eslint-enable*/

export default function CommunityCell(props: Props) {
  return (
    <GridCell col={props.col} className="grid community-grid" modal={props.communityId} path={props.path}>
      <div className="session-title">
        {props.name}
      </div>
      <div className="session-details">
        <ul>
          {props.venue && <Venue id={props.venue} />}
        </ul>
      </div>
    </GridCell>
  );
}
