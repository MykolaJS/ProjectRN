import React from "React";
import { connect } from "react-redux"

import { postCreate } from "../actions"
import PostCreateComponent from "../components/postCreate";


const PostCreate = props => <PostCreateComponent {...props} />

const mapDispatchToProps = dispatch => {
	return {
		postCreate: (title, body) => dispatch(postCreate(title, body))
	}
}



export default connect(null, mapDispatchToProps)(PostCreate);