import {
  call,
  put,
  takeEvery,
  takeLatest,
  select
} from "redux-saga/effects";

import AdminApi from "../admin/api";

import {
 setUsers,
} from "../admin/actions";

function* requestGetUsersAsync(actions) {
  try {
    const state = yield select();
    const { token } = state.user.user

    const response = yield call(AdminApi.getAllUsers, {
      token: token
    });
    const data = new Map();
   	response.forEach(item => data.set(item._id , item))
    yield put(setUsers(data));
 
  } catch (error) {
    console.log(error)
    //yield put(requestGetPostsError(error));
  }
};

function* makeAdmin(actions) {
  try {
    const state = yield select();
    const { token } = state.user.user

    const response = yield call(AdminApi.makeAdmin, {
      token: token,
      userId: actions.userId
    });
    
  } catch (error) {
    console.log(error)
    //yield put(requestGetPostsError(error));
  }
};

function* blockUser(actions) {
  try {
    const state = yield select();
    const { token } = state.user.user

    const response = yield call(AdminApi.blockUser, {
      token: token,
      userId: actions.userId
    });
    
  } catch (error) {
    console.log(error)
  }
};


function* adminSaga() {
  yield takeEvery("GET_USERS", requestGetUsersAsync);
  yield takeEvery("MAKE_ADMIN", makeAdmin);
  yield takeEvery("BLOCK_USER", blockUser);
};

export default adminSaga;