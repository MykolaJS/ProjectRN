const initialState = {
  users: new Map()
}

const admin = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USERS": {
      return Object.assign({}, state, {
        users: new Map([...state.users, ...action.data ])
      })
    } 
    case "MAKE_ADMIN": {
      return Object.assign({}, state, {
        users: state.users.set(action.userId, { 
          ...state.users.get(action.userId), isAdmin: true
        })
      })
    }
    case "BLOCK_USER": {
      return Object.assign({}, state, {
        users: state.users.set(action.userId, { 
          ...state.users.get(action.userId), blocked: true
        })
      })
    }
    default:
      return state;
  }
}

export default admin;
