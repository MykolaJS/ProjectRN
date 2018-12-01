import {
 setPosts,
 setPostInList,
 postCreate,
 getPosts
} from "../src/post/actions";

describe("actions setPost", () => {
	it("ACTION - creact post", () => {
		const create = postCreate("title", "body");
		expect(create).toEqual({type: "POST_CREATE", title: "title", body: "body"}) 
	})
})
