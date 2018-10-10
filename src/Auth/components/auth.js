import React from "react";
import {
  View,
  Text,
  Button
} from "react-native";

const AuthMain = props => {
  _redirectTo = scene => {
    props.navigation.navigate(scene)
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

export default AuthMain;