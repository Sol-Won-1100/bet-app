export const SET_EMAIL_ERROR = 'SET_EMAIL_ERROR';
export const SET_PASSWORD_ERROR = 'SET_PASSWORD_ERROR';
export const USER_LOGIN = 'USER_LOGIN';
export const EMAIL_OK = 'EMAIL_OK';
export const PASSWORD_OK = 'PASSWORD_OK';
export const SET_LOGIN_PAGE = 'SET_LOGIN_PAGE';
export const SET_REGISTER_PAGE = 'SET_REGISTER_PAGE';
export const SET_FORGET_PASSWORD_PAGE = 'SET_PASSWORD_PAGE';

export const emailError = (hasError: boolean) => ({
  type: SET_EMAIL_ERROR,
  payload: hasError,
});

export const passwordError = (hasError: boolean) => ({
  type: SET_PASSWORD_ERROR,
  payload: hasError,
});

export const userLogin = (isLogged: boolean) => ({
  type: USER_LOGIN,
  payload: isLogged,
});

export const registerPage = () => ({
  type: SET_REGISTER_PAGE,
});

export const forgetPasswordPage = () => ({
  type: SET_FORGET_PASSWORD_PAGE,
});

export const logInPage = () => ({
  type: SET_LOGIN_PAGE,
});
