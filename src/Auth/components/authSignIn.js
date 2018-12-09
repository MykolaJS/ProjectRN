import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  ActivityIndicator
} from "react-native";
import { LoginButton, AccessToken } from 'react-native-fbsdk';

class SingUp extends Component {
  constructor() {
    super()
    this.state = {
      email: "admin@zdenka.net",
      password: "admin",
    }
  }

  _redirect = scene => {
    this.props.navigation.navigate(scene)
  }

  render() {
    return (
      <View style={{
        justifyContent: "center",
        flex: 1
      }}>
        <Text>
          Email
        </Text>
        <TextInput
          value={this.state.email} 
          onChangeText={email => this.setState({ email: email })}
        />
        <Text>Password</Text>
        <TextInput
          value={this.state.password} 
          onChangeText={password => this.setState({ password: password })}
        />
        { !this.props.user.loading ?
          <Button
            onPress={() => this.props.singIn(this.state, this._redirect.bind())}
            title="Sing In"
          /> :  <ActivityIndicator size="large" color="#0000ff" />
        }
        
        <LoginButton
          onLoginFinished={
            (error, result) => {
              if (error) {
                console.log("login has error: " + error);
              } else if (result.isCancelled) {
                console.log("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    console.log(data.accessToken.toString())
                  }
                )
              }
            }
          }
          onLogoutFinished={() => console.log("logout.")}/>
      </View>
    )
  }
}

export default SingUp;