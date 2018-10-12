const initialState = {
  user: {},
  error: false,
  loading: true
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case "REQUEST_SET_DATA": {
      return {
        user: {},
        loading: false,
        error: false,
      }
    }
    case "REQUEST_SET_USER_SUCCEEDED": {
      return {
        user: action.data,
        loading: false,
        error: false,
      }
    }
    case "REQUEST_SET_USER_FAILED": {
      return {
        user: {},
        loading: false,
        error: true,
      }
    }
    default:
      return state;
  }
}

export default user;