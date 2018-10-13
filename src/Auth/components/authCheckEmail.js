import React, { Component } from "react";
import {
  View,
  Text,
  Button
} from "react-native";

const CheckedEmail = props => {
    _redirectTo = scene => {
      props.navigation.navigate(scene)
    }
    return (
      <View>
        <Text>
          Great!
        </Text>
        <Text>
          Checked Email Please
        </Text>
        <Button
          title="Sign In"
          onPress={() => _redirectTo("AuthSignIn")}
        />
      </View>
    )
}


export default CheckedEmail;