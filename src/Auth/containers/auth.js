import React from "React";
import {connect} from "react-redux"
import AuthComponent from "../components/auth";
import { fetchUser } from "../actions";

const Auth = props => <AuthComponent {...props} /> 

const mapStateToProps = state => {
	return {
		state: state
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchUser: () => dispatch(fetchUser()),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);

