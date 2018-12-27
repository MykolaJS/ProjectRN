import React from "React";
import { connect } from "react-redux"
import LogOutComponent from "../components/logOut";
import { logOut } from "../../user/actions";

const LogOut = props => <LogOutComponent {...props} />

const mapStateToProps = store => {
  return {
    user: store.user.user
  }
} 

const mapDispatchToProps = dispatch => {
  return {
    logOut: args => dispatch(logOut(args)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogOut);
