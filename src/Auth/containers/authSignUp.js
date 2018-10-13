import React from "React";
import {connect} from "react-redux"
import AuthSignUpComponent from "../components/authSignUp";
import { singUp } from "../../user/actions";

const AuthSignUp = props => <AuthSignUpComponent {...props} />

const mapStateToProps = state => {
  return {
    state: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    singUp: args => dispatch(singUp(args)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthSignUp);