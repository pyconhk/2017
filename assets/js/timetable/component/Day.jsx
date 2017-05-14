// @flow

import React from 'react';
import classNames from 'classnames';
import TimeCell from './TimeCell';
import GridCell from './GridCell';
import TopicCell from '../container/TopicCell';
import Venue from '../container/Venue';

/* eslint-disable */
type Props = {
  day: number,
  timeslots: {[name: string]: {
    timeStart: string,
    timeEnd: string,
    reserved?: number,
  }},
  sessions: Array<{
    name: string,
    timeslot: string,
    venue: string,
    topic?: string,
    row?: number,
  }>,
}

/* eslint-enable */

function renderSessions(sessions, reserved = 0) {
  const col = Math.floor(10 / (sessions.length + reserved));
  return sessions.map((session) => {
    if (session.topic) {
      return (
        <TopicCell
          key={`topic-${session.topic}`}
          id={session.topic}
          col={col}
          row={session.row}
        />
      );
    }
    return (
      <GridCell col={col} row={session.row} key={`session-${session.name}`} className="session-grid">
        {session.name}
        <br />
        {session.venue && <small><Venue id={session.venue} /></small>}
      </GridCell>
    );
  });
}

function renderRow(props: Props) {
  let elements = [];
  Object.keys(props.timeslots).forEach((name) => {
    const timeslot = props.timeslots[name];
    elements.push(<TimeCell start={timeslot.timeStart} end={timeslot.timeEnd} key={`time-${name}`} />);
    elements = elements.concat(renderSessions(
      props.sessions.filter(session => session.timeslot === name),
      timeslot.reserved
    ));
  });
  return elements;
}

export default function Day(props: Props) {
  const className = classNames('day', 'day-grid', `day-${props.day}`);
  return (
    <div className={className}>
      <h2 className="title">Day {props.day}</h2>
      {renderRow(props)}
    </div>
  );
}

