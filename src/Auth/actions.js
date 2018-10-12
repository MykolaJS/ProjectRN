export const requestSetUser = () => ({
	type: "REQUEST_SET_USER"
});

export const requestSetUserSucceeded = data => ({
	type: "REQUEST_SET_USER_SUCCEEDED",
	data,
});

export const requestSetUserError = () => ({
	type: "REQUEST_SET_USER_FAILED"
});

export const fetchUser = () => {
  return { type: 'FETCHED_USER' }
};