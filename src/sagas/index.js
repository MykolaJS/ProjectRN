import {
  call,
  put,
  takeEvery,
  takeLatest
} from "redux-saga/effects";

import {
  requestSetUser,
  requestSetUserSucceeded,
  requestSetUserError,
  singUp
} from "../user/actions";

import userApi from "../user/api";


export default function* watchfetchUser() {
  yield takeEvery("SING_UP", requestSetUserAsync);
}

function* requestSetUserAsync(actions) {
  console.log(actions)
  try {
    yield put(requestSetUser());
    const data = yield call(userApi.singUp, {
      password: actions.password,
      login: actions.login
    });
    yield put(requestSetUserSucceeded(data));
  } catch (error) {
    yield put(requestSetUserError(error));
  }
}