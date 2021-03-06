export const requestSignUp = () => ({
  type: "REQUEST_SIGN_UP"
});

export const requestSignUpSucceeded = data => ({
  type: "REQUEST_SIGN_UP_SUCCEEDED",
  data,
});

export const requestSignUpError = error => ({
  type: "REQUEST_SIGN_UP_FAILED",
  error
});

export const singUp = ({ email, password, name }) => ({
  type: "SING_UP",
  email,
  password,
  name
});

export const requestSignIn = () => ({
  type: "REQUEST_SIGN_IN"
});

export const requestSignInSucceeded = (data, token) => ({
  type: "REQUEST_SIGN_IN_SUCCEEDED",
  data,
  token
});

export const requestSignInError = error => ({
  type: "REQUEST_SIGN_IN_FAILED",
  error
});

export const singIn = ({ email, password }, redirect) => ({
  type: "SING_IN",
  email,
  password,
  redirect
})