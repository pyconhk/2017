// @flow

import React from 'react';

/* eslint-disable */
type Props = {
  children?: React.Element<*>,
};
/* eslint-enable */

export default function TimetableTitle(props: Props) {
  return <div className="title">{props.children}</div>;
};
