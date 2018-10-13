export const requestSetUser = () => ({
  type: "REQUEST_SET_USER"
});

export const requestSetUserSucceeded = data => ({
  type: "REQUEST_SET_USER_SUCCEEDED",
  data,
});

export const requestSetUserError = error => ({
  type: "REQUEST_SET_USER_FAILED",
  error
});

export const singUp = ({ login, password }) => ({
  type: "SING_UP",
  login,
  password
})