import { all, call } from "redux-saga/effects";
import authSaga from "./auth";
import postSaga from "./post";
import adminSaga from "./admin";


function* mySaga() {
 yield all([
   call(authSaga),
   call(postSaga),
   call(adminSaga),
 ])
}

export default mySaga;
