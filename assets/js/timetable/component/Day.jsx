// @flow

import React from 'react';
import classNames from 'classnames';

type Props = {
  day: number,
}

export default function Day(props: Props) {
  const className = classNames('day', 'day-grid', `day-${props.day}`);
  return (
    <div className={className}>
      <h2 className="title">Day {props.day}</h2>
    </div>
  );
}
