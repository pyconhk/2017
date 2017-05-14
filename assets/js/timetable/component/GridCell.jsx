// @flow

import React from 'react';
import classNames from 'classnames';

/* eslint-disable */
type Props = {
  col?: number,
  row?: number,
  children?: React.Element<*>,
};
/* eslint-enable */

export default function GridCell(props: Props) {
  const classes = classNames('grid-cell', {
    [`grid-col-${props.col || ''}`]: 'col' in props,
    [`grid-col-${props.row || ''}`]: 'row' in props,
  });
  return (
    <div className={classes}>
      {props.children}
    </div>
  );
}
