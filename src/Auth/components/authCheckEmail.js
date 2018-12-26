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
      <View style={{justifyContent: "space-between", flex: 1}}>
        <View style={{justifyContent: "center", alignItems: "center", flex: .7 }}>
          <Text style={{fontSize: 40}}>
            Great!
          </Text>
          <Text style={{fontSize: 30}}>
            Check Mail Please
          </Text>
        </View> 
        <Button
          title="Sign In"
          onPress={() => _redirectTo("AuthSignIn")}
        />
      </View>
    )
}


export default CheckedEmail;