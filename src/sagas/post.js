import {
  call,
  put,
  takeEvery,
  takeLatest,
  select
} from "redux-saga/effects";

import {
 setPosts,
 setPostInList
} from "../post/actions";

import postApi from "../post/api";

function* requestGetPostsAsync(actions) {
  try {
    const state = yield select();
    const { token } = state.user.user

    const response = yield call(postApi.getPosts, {
      token: token
    });

    const data = new Map();
   	response.forEach(item => data.set(item._id , item))
    yield put(setPosts(data));
 
  } catch (error) {
    yield put(requestGetPostsError(error));
  }
};

function* postCreate(actions) {
  try {
  	const state = yield select();
    const { token } = state.user.user
    const response = yield call(postApi.postCreate, {
    	title: actions.title,
    	url:  Math.random().toString(36).substring(2, 15),
    	body: actions.body,
      	token: token
    }); 
    const data = new Map();
    data.set(response.id, response)  
    yield put(setPostInList(data));
 
  } catch (error) {
     console.log(error, "eeeee")
  }
};

function* postSaga() {
	yield takeEvery("POST_CREATE", postCreate);
   	yield takeEvery("GET_POSTS", requestGetPostsAsync);
};

export default postSaga;

