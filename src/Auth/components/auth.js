import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  Image
} from "react-native";
import OneSignal from 'react-native-onesignal'; 

class AuthMain extends Component {
  componentDidMount() {
    if(Object.keys(this.props.state.user).length && !this.props.state.user.blocked ) {
      this.props.navigation.navigate("PostList")
    }
  }

  render() {
    _redirectTo = scene => {
      this.props.navigation.navigate(scene)
    }

    return (
      <View 
        style={{
          justifyContent: "space-between",
          flex: 1
      }}>
        <View/>
        <Image
          style={{width: "100%", height: 100}}
          source={{uri: "https://s.dou.ua/CACHE/images/img/static/companies/COAX_Logo_Updated_Logo_-_Exp_Normal/698e3db84ed02aca4e0e0c341db4cca1.png"}}
        />
        <View>
          <Button
            title="Sign In" 
            onPress={() => _redirectTo("AuthSignIn")} />
          <Button 
            title="Sign Up" 
            onPress={() => _redirectTo("AuthSignUp")} />
        </View>
      </View>
    )
  }
}


export default AuthMain;