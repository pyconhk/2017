// @flow

import React from 'react';
import classNames from 'classnames';

/* eslint-disable */
type Props = {
  col?: number,
  row?: number,
  href?: string,
  target?: string,
  children?: React.Element<*>,
  className?: string,
};
/* eslint-enable */

export default function GridCell(props: Props) {
  const classes = classNames(props.className, 'grid-cell', {
    [`grid-col-${props.col || ''}`]: 'col' in props,
    [`grid-row-${props.row || ''}`]: props.row && props.row > 0,
  });
  const href = props.href;
  const target = (typeof props.target === 'string') ? props.target : '_self';
  return (typeof href === 'string') ? (
    <a className={classes} href={href} target={target}>
      {props.children}
    </a>
  ) : (
    <div className={classes}>
      {props.children}
    </div>
  );
}
