import { USER_LOG_IN, USER_LOG_OUT } from "../actions/userActions";

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOG_IN:
      return ({
        username: 'DTroczyk',
        id: 1,
        name: 'Dominik',
        surname: 'Tracz',
        email: 'DTroczyk@gmail.com'
      })
    case USER_LOG_OUT:
      return {};
    default:
      console.warn(`Don't have the action: ${action.type} in userReducer`);
      return {};
  }
}