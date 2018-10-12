import React, { Component } from "react";
import {
  View,
  Text,
  Button
} from "react-native";

class AuthMain extends Component {
  constructor() {
    super()
  }
  render() {
    _redirectTo = scene => {
      props.navigation.navigate(scene)
    }

    this.props.fetchUser()
    return (
      <View style={{
        justifyContent: "center",
        flex: 1
      }}>
        <Button title="Sign In" onPress={() => _redirectTo("AuthSignIn")} />
        <Button title="Sign Up" onPress={() => _redirectTo("AuthSignUp")} />
      </View>
    )
  } 
}


export default AuthMain;