import reducer from "../src/post/reducer";

const initialState = {
  list: new Map()
}

describe("posts tests", () => {
  it("error in post", () => {
    const action =  {
    	type: "REQUEST_GET_POSTS_ERROR",
      error: "sfdsfsd"
    }

    expect(reducer(initialState, action)).toEqual(Object.assign({}, initialState, {
        error: action.error
      }))
  });

  it("set post", () => {
    const action =  {
      type: "SET_POSTS",
      data: new Map([[1, {}]])
    }

    expect(reducer(initialState, action)).toEqual(Object.assign({}, initialState, {
        list: new Map([...initialState.list, ...action.data ])
      }))
  });

  it("create post", () => {
    const action =  {
      type: "SET_POST_IN_LIST",
      data: new Map([[1, {}]])
    }

    expect(reducer(initialState, action)).toEqual(Object.assign({}, initialState, {
        list: new Map([...initialState.list, ...action.data ])
      }))
  });

  it("delete post", () => {
    const action =  {
      type: "DELETE_POST_SUCCESS",
      postId: "1"
    };

    initialState.list.set("1", {});
    initialState.list.delete(action.postId);


    expect(reducer(initialState, action)).toEqual(Object.assign({}, initialState, {
        list: new Map([...initialState.list])
      }))
  });

  // it("user login failed", () => {
  //   const action =  {
  //   	type: "REQUEST_SIGN_IN_FAILED",
  //   	error: "error"
  //   }

  //   expect(reducer(initialState, action)).toEqual(Object.assign({}, initialState, {
  //       error: action.error
  //     }))
  // })

});
