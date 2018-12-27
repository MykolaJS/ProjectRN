import {
  call,
  put,
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

function* unBlockUser(actions) {
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

function* takeAdmin(actions) {
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
  yield takeLatest("GET_USERS", requestGetUsersAsync);
  yield takeLatest("MAKE_ADMIN", makeAdmin);
  yield takeLatest("BLOCK_USER", blockUser);
  yield takeLatest("TAKE_ADMIN", takeAdmin);
  yield takeLatest("UN_BLOCK_USER", unBlockUser);
};

export default adminSaga;
