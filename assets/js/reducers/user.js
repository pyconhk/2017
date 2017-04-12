import { USER_NOT_AUTH, USER_SIGN_IN } from '../action';

export default function (state = null, action) {
  switch (action.type) {
    case USER_SIGN_IN:
      return action.user;
    case USER_NOT_AUTH:
      return null;
    default:
      return state;
  }
}