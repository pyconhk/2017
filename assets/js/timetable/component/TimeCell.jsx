// @flow

import React from 'react';
import moment from 'moment-timezone';
import GridCell from './GridCell';

type Props = {
  start: string,
  end: string,
}

export default function TimeCell(props: Props) {
  const start = moment(props.start).format('HH:mm');
  const end = moment(props.end).format('HH:mm');
  return <GridCell>{start} - {end}</GridCell>;
}
