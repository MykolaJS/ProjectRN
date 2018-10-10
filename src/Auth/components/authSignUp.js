import React from "react";
import {
  View,
  Text,
  Button,
  TextInput
} from "react-native";

const SingUp = props => {
  return (
    <View style={{
      justifyContent: "center",
      flex: 1
    }}>
      <Text>Login</Text>
      <TextInput/>
      <Text>Password</Text>
      <TextInput/>
      <Button
        title="Sing Up"
      />
    </View>
  )
}

export default SingUp;