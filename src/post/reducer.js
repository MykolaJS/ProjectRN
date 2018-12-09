const initialState = {
  list: new Map()
}

const post = (state = initialState, action) => {
  switch (action.type) {
    case "SET_POSTS": {
      return Object.assign({}, state, {
        list: new Map([...state.list, ...action.data ])
      })
    } break;
    case "REQUEST_GET_POSTS_ERROR": {
      return Object.assign({}, state, {
        error: action.error,
      })
    }
    case "DELETE_POST_SUCCESS": {
      state.list.delete(action.postId);

      return Object.assign({}, state, {
        list: new Map([...state.list])
      })
    }
    case "SET_POST_IN_LIST": {
      return Object.assign({}, state, {
        list: new Map([...action.data, ...state.list])
      })
    }
    default:
      return state;
  }
}

export default post;