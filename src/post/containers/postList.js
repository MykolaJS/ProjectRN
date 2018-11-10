import React from "React";
import {connect} from "react-redux"

import { getPosts } from "../actions"
import PostListComponent from "../components/postList";


const PostList = props => <PostListComponent {...props} />

const mapStateToProps = state => {
	return {
		posts: state.post.list
	}
}

const mapDispatchToProps = dispatch => {
	return {
		getPosts: () => dispatch(getPosts())
	}
}



export default connect(mapStateToProps, mapDispatchToProps)(PostList);