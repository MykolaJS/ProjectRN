import React, { Component } from "react";
import {
  View,
  Text,
  Button
} from "react-native";
import OneSignal from 'react-native-onesignal'; 

class AuthMain extends Component {
  componentDidMount() {
    if(Object.keys(this.props.state.user).length) {
      this.props.navigation.navigate("PostList")
    }
  }

  render() {
    _redirectTo = scene => {
      this.props.navigation.navigate(scene)
    }

    return (
      <View 
      testID="welcome"
      style={{
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