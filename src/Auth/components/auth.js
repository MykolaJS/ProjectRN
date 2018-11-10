import React, { Component } from "react";
import {
  View,
  Text,
  Button
} from "react-native";

class AuthMain extends Component {
  
  render() {
    _redirectTo = scene => {
      this.props.navigation.navigate(scene)
    }

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