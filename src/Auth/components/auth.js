import React, { Component } from "react";
import {
  View,
  Text,
  Button
} from "react-native";
import OneSignal from 'react-native-onesignal'; 

class AuthMain extends Component {
  constructor(properties) {
  super(properties);
    OneSignal.init("3732f321-f09f-4b83-b524-d77567d9a98e");
    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived(notification) {
    console.log("Notification received: ", notification);
  }

  onOpened(openResult) {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  }

  onIds(device) {
    console.log('Device info: ', device);
  }
  
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