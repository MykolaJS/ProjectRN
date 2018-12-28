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
  requestSignIn,
  requestSignInSucceeded,
  requestSignInError,
  singInFacebook
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

    yield actions.redirect("CheckEmail")
  } catch (error) {
    alert("Error")
    yield put(requestSignUpError(error));
  }
};

function* requestSignInAsync(actions) {
  try {
    const token = yield call(userApi.singIn, {
      password: actions.password,
      email: actions.email,
    });
    const user = yield call(userApi.getCurrentUser, {
      token: token
    })

    yield put(requestSignInSucceeded(user, token));
    if(user.blocked) {
      alert("User Blocked!")
      return null
    }

    yield actions.redirect("PistList")
  } catch (error) {
    yield put(requestSignInError(error));
  }
};

function* requestSignInAsyncFacebook(actions) {
  try {
    yield put(requestSignIn());
    const token = yield call(userApi.singInFacebook, {
      name: actions.name,
      socialId: actions.socialId,
      image: actions.image
    });
    const user = yield call(userApi.getCurrentUser, {
      token: token
    })

    yield put(requestSignInSucceeded(user, token));
    if(user.blocked) {
      alert("User Blocked!")
      return null
    }

    yield actions.redirect("PistList")
  } catch (error) {
    yield put(requestSignInError(error));
  }
};


function* authSaga() {
   yield takeEvery("SING_UP", requestSignUpAsync);
   yield takeEvery("SING_IN", requestSignInAsync);
   yield takeEvery("SING_IN_FACEBOOK", requestSignInAsyncFacebook);
};

export default authSaga;
