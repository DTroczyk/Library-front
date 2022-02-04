import { USER_LOG_IN, USER_LOG_OUT } from "../actions/userActions";

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOG_IN:
      return action.payload.user;
    case USER_LOG_OUT:
      localStorage.removeItem('token');
      return {};
    default:
      console.warn(`Don't have the action: ${action.type} in userReducer`);
      return state;
  }
}