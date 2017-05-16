// @flow

import React from 'react';
import moment from 'moment-timezone';
import GridCell from './GridCell';

type Props = {
  start: string,
  end: string,
}

export default function TimeCell(props: Props) {
  const start = moment(props.start).tz('Asia/Hong_Kong').format('HH:mm');
  const end = moment(props.end).tz('Asia/Hong_Kong').format('HH:mm');
  return <GridCell className="time-grid">{start} - {end}</GridCell>;
}
