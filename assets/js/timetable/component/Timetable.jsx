// @flow

import React from 'react';
import Day from '../container/Day';

type Props = {
  sessions: { [day: string]: Array<Object>, }
}

export default function Timetable(props: Props) {
  return (
    <div id="timetable">
      {Object.keys(props.sessions).map((day: string) => <Day day={day.replace('day-', '')} key={day} />)}
    </div>
  );
}
