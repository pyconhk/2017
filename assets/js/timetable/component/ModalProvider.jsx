// @flow

import React from 'react';
import $ from 'jquery';

/* globals HTMLElement */

type Props = {
  children: React.Component<*>,
  topics: Array<Object>,
};

export default class ModalProvider extends React.Component {
  static childContextTypes = {
    openModal: React.PropTypes.func,
    closeModal: React.PropTypes.func,
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      topic: null,
      session: null,
      type: 'topic',
    };
  }

  state: {
    topic: string | null,
    session: string | null,
    type: 'topic' | 'session',
  };


  getChildContext() {
    return {
      openModal: (type: 'topic' | 'session', id: string) => {
        this.setState({ type, [type === 'topic' ? 'topic' : 'session']: id });
        $(this.modal).modal('open');
      },
      closeModal: () => {
        $(this.modal).modal('close');
      },
    };
  }

  componentDidMount() {
    $(this.modal).modal();
  }

  props: Props;
  modal: HTMLElement;


  render() {
    const topic = this.props.topics.find(t => t.id === this.state.topic) || {};

    return (
      <div>
        <div ref={(modal) => { this.modal = modal; }} className="modal modal-fixed-footer">
          <div className="modal-content">
            <h4 data-role="title">{topic.title}</h4>
            <div>
              {topic.description ? topic.description[0] : ''}
            </div>
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Close</a>
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
}
