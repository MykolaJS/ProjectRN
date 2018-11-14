const initialState = {
  user: {},
  error: "",
  loading: true
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case "REQUEST_SIGN_IN_SUCCEEDED": {
      return Object.assign({}, state, {
        user: { ...action.data, token: action.token },
        loading: false,
      })
    }
    case "REQUEST_SIGN_IN_FAILED": {
      return Object.assign({}, state, {
        error: action.error,
      })
    }
    default:
      return state;
  }
}

export default user;