import React from "React";
import {connect} from "react-redux"
import AuthSingInComponent from "../components/authSignIn";
import { singIn, singInFacebook } from "../../user/actions";
const AuthSingIn = props => <AuthSingInComponent {...props} />

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    singIn: (args, redirect) => dispatch(singIn(args, redirect)),
    singInFacebook: (args, redirect) => dispatch(singInFacebook(args, redirect))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthSingInComponent);