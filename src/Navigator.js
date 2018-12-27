import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { createStackNavigator, createBottomTabNavigator } from "react-navigation";
import OneSignal from 'react-native-onesignal'; 
import { store } from "./store";

import Auth from "./Auth/containers/auth";
import AuthSignUp from "./Auth/containers/authSignUp";
import AuthSignIn from "./Auth/containers/authSignIn";
import AuthCkeckEmail from "./Auth/components/authCheckEmail";
import LogOut from "./Auth/containers/logOut";

import UsersList from "./admin/containers/userList";

import PistList from "./post/containers/postList";
import PostCreate from "./post/containers/postCreate";

import UserProfile from "./user/containers/userProfile";


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


const TabNavigator = createBottomTabNavigator({
    PostList: {
      screen: PistList,
    },
    ...(store.getState().user.user.isAdmin ? { Users: UsersList } : {}),
    Menu: LogOut,
  });


const Navigator = createStackNavigator({
  Auth: {
    screen: Auth,
    navigationOptions: {
      title: "PDP APLICATION"
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
  PistList: {
    screen: TabNavigator,
    navigationOptions: {
      title: "Post List",
      headerLeft: null
    },
  },
  CheckEmail: {
    screen: AuthCkeckEmail,
    navigationOptions: {
      title: "CheckedEmail"
    }
  },
  PostCreate: {
    screen: PostCreate,
    navigationOptions: {
      title: "Post Create"
    },
  },
  UsersList: {
    screen: UsersList,
    navigationOptions: {
      title: "Admin Panel"
    }
  },
  UserProfile: {
    screen: UserProfile,
    navigationOptions: {
      title: "User Info"
    }
  }  
});

export default AppNavigator;
