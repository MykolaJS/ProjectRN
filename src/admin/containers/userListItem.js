import React from "React";
import {connect} from "react-redux"

import { 
	blockUser,
	makeAdmin,
	takeAdmin,
	unBlockUser
} from "../actions"
import UserListItemComponent from "../components/userListItem";


const UserListItem = props => <UserListItemComponent {...props} />

const mapStateToProps = (state, props) => {
	return {
		user: state.admin.users.get(props.userId)
	}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		blockUser: () => dispatch(blockUser(props.userId)),
		makeAdmin: () => dispatch(makeAdmin(props.userId)),
		takeAdmin: () => dispatch(takeAdmin(props.userId)),
		unBlockUser: () => dispatch(unBlockUser(props.userId)),
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(UserListItem);