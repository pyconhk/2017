// @flow

import React from 'react';
import classNames from 'classnames';

/* eslint-disable */
type Props = {
  col?: number,
  row?: number,
  children?: React.Element<*>,
  className?: string,
};
/* eslint-enable */

export default function GridCell(props: Props) {
  const classes = classNames(props.className, 'grid-cell', {
    [`grid-col-${props.col || ''}`]: 'col' in props,
    [`grid-row-${props.row || ''}`]: props.row && props.row > 0,
  });
  return (
    <div className={classes}>
      {props.children}
    </div>
  );
}
