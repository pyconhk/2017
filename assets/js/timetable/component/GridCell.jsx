// @flow

import React from 'react';
import classNames from 'classnames';

/* eslint-disable */
type Props = {
  className: string,
  col: number,
  modal?: string,
  target?: string,
  children?: React.Component<*>,
  path?: string,
}

/* eslint-enable */

export default function GridCell(props: Props, context: {openModal: Function}) {
  let lclass = `l${Math.max(Math.floor(10 / props.col), 2)}`;
  console.log(props.col);
  if (props.col === 3) lclass = `${lclass} l33`;
  const classes = classNames(props.className, 's12', `m${props.col > 2 ? 4 : 12}`, lclass, 'col');
  const modal = props.modal;
  if (typeof modal === 'string' && !props.path) {
    /* eslint-disable */
    return (
      <a className={classes} onClick={(e) => { e.preventDefault(); context.openModal('topic', modal); }} href={`#/${modal}`}>
        {props.children}
      </a>
    );
    /* eslint-enable */
  }
  if (typeof modal === 'string' && props.path) {
    return (
      <a
        className={classes}
        onClick={(e) => { e.preventDefault(); context.openModal('community', modal); }}
        href={`#/${modal}`}
      >
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

GridCell.contextTypes = {
  openModal: React.PropTypes.func,
};
