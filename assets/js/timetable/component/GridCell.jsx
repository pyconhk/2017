// @flow

import React from 'react';
import classNames from 'classnames';

/* eslint-disable */
type Props = {
  col: number,
  href?: string,
  target?: string,
  children?: React.Element<*>,
  className?: string,
};
/* eslint-enable */

export default function GridCell(props: Props) {
  const classes = classNames(props.className, 's12', `m${props.col > 2 ? 6 : 12}`, `l${Math.max(Math.floor(10 / props.col), 2)}`, 'col');
  const href = props.href;
  if (typeof href === 'string') {
    const target = (typeof props.target === 'string') ? props.target : '_self';
    return (
      <a className={classes} href={href} target={target}>
        {props.children}
      </a>
    );
  }
  return (
    <div className={classes}>
      {props.children}
    </div>
  );
}
