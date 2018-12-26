import React from "React";
import {connect} from "react-redux"

import { 
	getUsers,
} from "../actions"
import UserListComponent from "../components/userList";


const UserList = props => <UserListComponent {...props} />

const mapStateToProps = state => {
	return {
		users: state.admin.users
	}
}

const mapDispatchToProps = dispatch => {
	return {
		getUsers: () => dispatch(getUsers()),
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(UserList);
