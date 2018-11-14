import { all, call } from "redux-saga/effects";
import authSaga from "./auth";
import postSaga from "./post";

function* mySaga() {
 yield all([
   call(authSaga),
   call(postSaga),
 ])
}

export default mySaga;
