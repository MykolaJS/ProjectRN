const initialState = {}

const user = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_DATA": {
      return {
        ...state,
        ...action.data
      }
    }
    default:
      return state;
  }
}

export default user;