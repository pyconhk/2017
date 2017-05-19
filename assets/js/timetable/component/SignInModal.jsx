// @flow

import React from 'react';
import $ from 'jquery';
import type { User } from '../../reducers/user';
import {
  signOut,
} from '../../auth';

type Props = {
  user: ?User
}

export default class SigninModal extends React.Component {
  componentDidMount() {
    $('#signin-modal').modal();
  }

  props: Props;

  handleButtonClick(auth: boolean) {
    return auth ? signOut : () => { $('#signin-modal').modal('open'); };
  }

  render() {
    const auth = this.props.user !== null;
    const button = `Sign ${auth ? 'Out' : 'In'}`;
    return (
      <button id="auth" className="btn waves-effect waves-light" onClick={this.handleButtonClick(auth)}>{button}</button>
    );
  }
}
