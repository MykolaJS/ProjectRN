import reducer from "../src/user/reducer";

const initialState = {
  user: {},
  error: "",
  loading: false
}


describe("user login succeeded", () => {
  it("sign in", () => {
    const action =  {
    	type: "REQUEST_SIGN_IN_SUCCEEDED",
    	user: new Map([[1, {}]]),
    	loaging: false

    }

    expect(reducer(initialState, action)).toEqual(Object.assign({}, initialState, {
        user: { ...action.data, token: action.token },
        loading: false,
      }))
  });

  it("user login failed", () => {
    const action =  {
    	type: "REQUEST_SIGN_IN_FAILED",
    	error: "error"
    }

    expect(reducer(initialState, action)).toEqual(Object.assign({}, initialState, {
        error: action.error
      }))
  })

})
