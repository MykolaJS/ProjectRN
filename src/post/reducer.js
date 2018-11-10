const initialState = {
  list: new Map()
}

const post = (state = initialState, action) => {
  switch (action.type) {
    case "SET_POSTS": {
      return Object.assign({}, state, {
        list: new Map([...state.list, ...action.data ])
      })
    }
    case "REQUEST_GET_POSTS_ERROR": {
      return Object.assign({}, state, {
        error: action.error,
      })
    }
    case "SET_POST_IN_LIST": {
      return Object.assign({}, state, {
        list: new Map([...state.list, ...action.data ])
      })
    }
    default:
      return state;
  }
}

export default post;