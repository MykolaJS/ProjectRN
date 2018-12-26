import React from "React";
import { connect } from "react-redux"

import { postCreate } from "../actions"
import PostCreateComponent from "../components/postCreate";


const PostCreate = props => <PostCreateComponent {...props} />

const mapDispatchToProps = dispatch => {
	return {
		postCreate: (title, body, redirect) => dispatch(postCreate(title, body, redirect))
	}
}



export default connect(null, mapDispatchToProps)(PostCreate);