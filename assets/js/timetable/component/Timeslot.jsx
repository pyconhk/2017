// @flow

import React from 'react';
import TimeCell from './TimeCell';
import TopicCell from '../container/TopicCell';
import Venue from '../container/Venue';
import GridCell from './GridCell';

type Props = {
  sessions: Array<{
    name: string,
    venue: string,
    timeslot: string,
    topic?: string,
    community?: string,
  }>,
  timeslot: {
    timeStart: string,
    timeEnd: string,
  },
  slot: string,
}

export default function Timeslot(props: Props) {
  return (
    <div className="row time-slot-grid">
      <TimeCell start={props.timeslot.timeStart} end={props.timeslot.timeEnd} key={`time-${props.slot}`} />
      {props.sessions.map((session) => {
        if (session.topic) {
          return (
            <TopicCell
              key={`topic-${session.topic}-${session.name}`}
              id={session.topic}
              col={props.sessions.length}
              name={session.name}
              dayslot={`${props.dayslot}`}
            />
          );
        } else if (session.community) {
          const communityPageUrl = `/2017/events/${session.community}.html`;
          return (
            <GridCell
              key={`session-${session.name}`}
              className="grid community-grid"
              col={props.sessions.length}
              href={communityPageUrl}
              target={session.community}
            >
              <div className="session-title">
                {session.name}
              </div>
              <div className="session-details">
                <ul>
                  {session.venue && <Venue id={session.venue} />}
                </ul>
              </div>
            </GridCell>
          );
        }
        return (
          <GridCell key={`session-${session.name}`} className="col grid session-grid" col={props.sessions.length}>
            <div className="session-title">
              {session.name}
            </div>
            <div className="session-details">
              <ul>
                {session.venue && <Venue id={session.venue} />}
              </ul>
            </div>
          </GridCell>
        );
      })}
    </div>
  );
}
