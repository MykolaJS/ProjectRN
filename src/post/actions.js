export const getPosts = () => ({
	type: "GET_POSTS"
});

export const setPosts = data => ({
	type: "SET_POSTS",
	data
});

export const requestGetPostsError = error => ({
	type: "REQUEST_GET_POSTS_ERROR",
	error
});

export const postCreate = (title, body) => ({
	type: "POST_CREATE",
	title,
	body
});

export const deletePost = postId => ({
	type: "DELETE_POST",
	postId
});

export const deletePostSuccess = postId => ({
	type: "DELETE_POST_SUCCESS",
	postId
});

export const setPostInList = data => ({
	type: "SET_POST_IN_LIST",
	data
})