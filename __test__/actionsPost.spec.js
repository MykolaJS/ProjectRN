import {
 setPosts,
 setPostInList,
 postCreate,
 getPosts,
 deletePost
} from "../src/post/actions";

describe("action creators", () => {
	it("ACTION - creact post", () => {
		const create = postCreate("title", "body");
		expect(create).toEqual({
			type: "POST_CREATE", 
			title: "title",
			body: "body"
		});
	});

	it("ACTION - get Posts", () => {
		const getPost = getPosts();
		expect(getPost).toEqual({type: "GET_POSTS"});
	});

	it("ACTION - set Posts", () => {
		const setPost = setPosts({});
		expect(setPost).toEqual({
			type: "SET_POSTS",
			data: {}
		})
	});

	it("ACTION - set post in list", () => {
		const data = new Map([[1, {}]]);
		const post = setPostInList(data);

		expect(post).toEqual({
			type: "SET_POST_IN_LIST",
			data 
		});
	});

	it("ACTION - delete post", () => {
		const postId = 1;
		const actionDeletePost = deletePost(postId);
		expect(actionDeletePost).toEqual({
			type: "DELETE_POST",
			postId
		})
	})
})
