import { combineReducers } from "redux";
import user from "../user/reducer";
import post from "../post/reducer";

const appReducer = combineReducers({
	user,
	post
});


export default appReducer;