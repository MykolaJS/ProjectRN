import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { createStackNavigator } from "react-navigation";
import OneSignal from 'react-native-onesignal'; 

import Auth from "./Auth/containers/auth";
import AuthSignUp from "./Auth/containers/authSignUp";
import AuthSignIn from "./Auth/containers/authSignIn";
import AuthCkeckEmail from "./Auth/components/authCheckEmail";

import PistList from "./post/containers/postList";
import PostCreate from "./post/containers/postCreate";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate("Auth")}>
          <Text>Home een</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class AppNavigator extends React.Component {
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

  onIds(device) {
    console.log('Device info: ', device);
  }

  render() {
    return (
        <Navigator/>
      )
  }
}


const Navigator = createStackNavigator({
  Auth: {
    screen: Auth,
    navigationOptions: {
      header: null
    },
  },
  AuthSignUp: {
    screen: AuthSignUp,
    navigationOptions: {
      title: "Sign Up"
    }
  },
  AuthSignIn: {
    screen: AuthSignIn,
    navigationOptions: {
      title: "Sign In"
    }
  },
  CheckEmail: {
    screen: AuthCkeckEmail,
    navigationOptions: {
      title: "CheckedEmail"
    }
  },
  PistList: {
    screen: PistList,
    navigationOptions: {
      title: "Post List",
      headerLeft: null
    },
  },
  PostCreate: {
    screen: PostCreate,
    navigationOptions: {
      title: "Post Create"
    },
  },
});

export default AppNavigator;