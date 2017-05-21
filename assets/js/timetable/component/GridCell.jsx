// @flow

import $ from 'jquery';
import React from 'react';
import classNames from 'classnames';

export default class GridCell extends React.Component {

  componentDidMount() {
    const dayslotId = `#${this.props.dayslot}`;
    $(dayslotId).modal();
  }

  render() {
    const props = this.props;
    const classes = classNames(props.className, 's12', `m${props.col > 2 ? 6 : 12}`,
      `l${Math.max(Math.floor(10 / props.col), 2)}`, 'col');
    const href = props.href;
    if (typeof href === 'string') {
      const dayslot = `${props.dayslot}`;
      const dayslotId = `#${props.dayslot}`;
      return (
        <div>
          <a href={dayslotId} className={classes}>
            {props.children}
            <div id={dayslot} className="modal modal-fixed-footer">
              <div className="modal-content">
                <iframe src={props.href} style={{ width: '100%', height: '100%' }} />
              </div>
            </div>
          </a>
        </div>
      );
    }
    return (
      <div className={classes}>
        {props.children}
      </div>
    );
  }
}
