import { USER_NOT_AUTH, USER_SIGN_IN } from '../action';

export default function (state = {}, action) {
  switch (action.type) {
    case USER_SIGN_IN:
      return action.user;
    case USER_NOT_AUTH:
      return {};
    default:
      return state;
  }
}
