const initialState = {

}

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_STATE': {
      return state;
    } break;
    default:
      return state;
  }
}

export default user;