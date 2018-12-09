import { combineReducers } from "redux";
import user from "../user/reducer";
import post from "../post/reducer";

const appReducer = combineReducers({
	user,
	post
});

const rootReducer = (state, action) => (
  appReducer(action.type === "LOG_OUT" ? appReducer({}, {}) : state, action)
)


export default rootReducer;