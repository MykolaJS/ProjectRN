import {
  call,
  put,
  takeEvery,
  takeLatest,
  select
} from "redux-saga/effects";
import { NavigationActions } from 'react-navigation'

import {
 setPosts,
 setPostInList,
 requestGetPostsError,
 deletePostSuccess
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
    	body: actions.body,
      token: token
    }); 
    const data = new Map();
    data.set(response._id, response)  
    yield put(setPostInList(data));
    yield actions.redirect("PistList")
 
  } catch (error) {
     console.log(error)
  }
};

function* deltePost(actions) {
  try {
    const state = yield select();
    const { token } = state.user.user;

    yield call(postApi.deletePost, { 
      postId: actions.postId,  
      token
    })
    yield put(deletePostSuccess(actions.postId))
  } catch (error) {
    console.log(error, "error");
  }
}

function* postSaga() {
	yield takeEvery("POST_CREATE", postCreate);
  yield takeEvery("GET_POSTS", requestGetPostsAsync);
  yield takeEvery("DELETE_POST", deltePost);
};

export default postSaga;

