import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { createStackNavigator } from "react-navigation";

import Auth from "./Auth/containers/auth";
import AuthSignUp from "./Auth/containers/authSignUp";
import AuthSignIn from "./Auth/containers/authSignIn";
import AuthCkeckEmail from "./Auth/components/authCheckEmail";

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

export default createStackNavigator({
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
  }
});