import reducer from "../src/admin/reducer";

const initialState = {
  users: new Map()
}


describe("admin reducer", () => {
 it("set users", () => {
    const action =  {
      type: "SET_USERS",
      data: new Map([[1, {}]])
    }

    expect(reducer(initialState, action)).toEqual(Object.assign({}, initialState, {
        users: new Map([...initialState.users, ...action.data ])
      }))
  });

 it("make admin", () => {
    const action =  {
      type: "MAKE_ADMIN",
      userId: 1
    }

    expect(reducer(initialState, action)).toEqual(Object.assign({}, initialState, {
        users: initialState.users.set(action.userId, { 
          ...initialState.users.get(action.userId), isAdmin: true
        })
      }))
  });

  it("take admin", () => {
    const action =  {
      type: "TAKE_ADMIN",
      userId: 1
    }

    expect(reducer(initialState, action)).toEqual(Object.assign({}, initialState, {
        users: initialState.users.set(action.userId, { 
          ...initialState.users.get(action.userId), isAdmin: false
        })
      }))
  })

 it("block user", () => {
    const action =  {
      type: "BLOCK_USER",
      userId: 1
    }

    expect(reducer(initialState, action)).toEqual(Object.assign({}, initialState, {
        users: initialState.users.set(action.userId, { 
          ...initialState.users.get(action.userId), blocked: true
        })
      }))
  });

  it("un block user", () => {
    const action =  {
      type: "UN_BLOCK_USER",
      userId: 1
    }

    expect(reducer(initialState, action)).toEqual(Object.assign({}, initialState, {
        users: initialState.users.set(action.userId, { 
          ...initialState.users.get(action.userId), blocked: false
        })
      }))
  });


})
