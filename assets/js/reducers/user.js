// @flow

import { USER_NOT_AUTH, USER_SIGN_IN } from '../action';

export type User = {
  displayName: string,
};

export default function (state: ?User = null, action: Object) {
  switch (action.type) {
    case USER_SIGN_IN:
      return action.user;
    case USER_NOT_AUTH:
      return null;
    default:
      return state;
  }
}
