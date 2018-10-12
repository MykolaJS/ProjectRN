import { 
	requestSetUser, 
	requestSetUserSucceeded,
	requestSetUserError,
	fetchUser
} from "../Auth/actions";

import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'


export default function* watchfetchUser() {
  yield takeEvery('FETCHED_USER', requestSetUserAsync);
}

function* requestSetUserAsync() {
  try {
    yield put(requestSetUser());
    const data = yield call(() => {
      return fetch('https://dog.ceo/api/breeds/image/random')
              .then(res => res.json())
      }
    );
    yield put(requestSetUserSucceeded(data));
  } catch (error) {
    yield put(requestSetUserError());
  }
}