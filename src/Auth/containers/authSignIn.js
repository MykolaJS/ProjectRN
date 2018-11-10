import React from "React";
import {connect} from "react-redux"
import AuthSingInComponent from "../components/authSignIn";
import { singIn } from "../../user/actions";
const AuthSingIn = props => <AuthSingInComponent {...props} />

const mapStateToProps = state => {
  return {
    state: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    singIn: (args, redirect) => dispatch(singIn(args, redirect)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthSingInComponent);