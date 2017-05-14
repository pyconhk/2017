// @flow

import React from 'react';

export default function Speakers(props: {names: Array<string>}) {
  return <span>{props.names.join(' & ')}</span>;
}
