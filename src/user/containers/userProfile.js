import React from "React";
import {connect} from "react-redux"

import { 
	blockUser,
	makeAdmin
} from "../actions"
import UserProfileComponent from "../components/userProfile";


const UserProfile = props => <UserProfileComponent {...props} />

const mapStateToProps = state => {
	return {
		user: state.user.user
	}
}

export default connect(mapStateToProps)(UserProfile);
