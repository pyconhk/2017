// @flow

import React from 'react';
import GridCell from './GridCell';
import Venue from '../container/Venue';
import Speakers from '../container/Speakers';

/* eslint-disable */
type Props = {
  col: number,
  row?: number,
  topic: {
    title: string,
    id: string,
    venue: string,
    speaker: Array<string>,
  },
}
/* eslint-enable*/

export default function TopicCell(props: Props) {
  const topic = props.topic;
  const link = `/2017/topic/${topic.id}/`;
  return (
    <GridCell col={props.col} row={props.row} className="topic-grid">
      <a href={link}>
        {topic.title}
      </a>
      <br />
      <small>
        <Speakers speakers={topic.speaker} />
        &nbsp; / &nbsp;
        <Venue id={topic.venue} />
      </small>
    </GridCell>
  );
}
