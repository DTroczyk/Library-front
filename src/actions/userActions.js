export const USER_LOG_IN = 'LOG_IN';
export const USER_LOG_OUT = 'LOG_OUT';
export const USER_REGISTER = 'REGISTER';

export const loginUser = (user) => ({
  type: USER_LOG_IN,
  payload: {
    user
  }
})

export const loguotUser = () => ({
  type: USER_LOG_OUT
})