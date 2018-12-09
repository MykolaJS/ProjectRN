import { NavigationActions } from 'react-navigation';

import {
  call,
  put,
  takeEvery,
  takeLatest,
  select
} from "redux-saga/effects";

import {
  requestSignUp,
  requestSignUpSucceeded,
  requestSignUpError,
  singUp,
  requestSignIn,
  requestSignInSucceeded,
  requestSignInError,
  singIn,
} from "../user/actions";

import userApi from "../user/api";

function* requestSignUpAsync(actions) {
  try {
    yield put(requestSignUp());
    const data = yield call(userApi.singUp, {
      password: actions.password,
      email: actions.email,
      name: actions.name
    });

    yield put(requestSignUpSucceeded(data));
  
  } catch (error) {
    yield put(requestSignUpError(error));
  }
};

function* requestSignInAsync(actions) {
  try {
    yield put(requestSignIn());
    const token = yield call(userApi.singIn, {
      password: actions.password,
      email: actions.email,
    });
    const user = yield call(userApi.getCurrentUser, {
      token: token
    })
    yield put(requestSignInSucceeded(user, token));

    yield actions.redirect("PistList")
  } catch (error) {
    yield put(requestSignInError(error));
  }
};


function* authSaga() {
   yield takeEvery("SING_UP", requestSignUpAsync);
   yield takeEvery("SING_IN", requestSignInAsync);
};

export default authSaga;
