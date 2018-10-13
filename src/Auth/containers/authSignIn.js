import React from "React";
import {connect} from "react-redux"
import AuthSingInComponent from "../components/authSignIn";

const AuthSingIn = props => <AuthSingInComponent {...props} />

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

export default connect(mapStateToProps, mapDispatchToProps)(AuthSingInComponent);