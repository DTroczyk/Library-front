export const USER_LOG_IN = 'LOG_IN';
export const USER_LOG_OUT = 'LOG_OUT';
export const USER_REGISTER = 'REGISTER';

export const loginUser = ({ login, password}) => ({
  type: USER_LOG_IN,
  payload: {
    login,
    password
  }
})

export const loguotUser = () => ({
  type: USER_LOG_OUT
})