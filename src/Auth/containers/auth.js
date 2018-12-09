import React from "React";
import {connect} from "react-redux"
import AuthComponent from "../components/auth";

const Auth = props => <AuthComponent {...props} />

const mapStateToProps = state => {
	return {
		state: state.user
	}
}



export default connect(mapStateToProps)(Auth);

