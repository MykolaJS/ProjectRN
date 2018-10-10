import React from "React";
import {connect} from "react-redux"
import AuthComponent from "../components/auth";
import {getStates} from "../actions";

const Auth = props => <AuthComponent {...props} /> 

const mapStateToProps = state => {
	return {
		state: state
	}
}

const mapDispatchToProps = dispatch => {
	return {
		getStates: () => dispatch(getStates()),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);

