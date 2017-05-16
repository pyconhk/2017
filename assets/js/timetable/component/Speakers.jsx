// @flow

import React from 'react';

export default function Speakers(props: {names: Array<string>}) {
  return <li className="speaker">{props.names.join(' & ')}</li>;
}
