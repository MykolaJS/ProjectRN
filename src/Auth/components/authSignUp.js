import React, { PureComponent } from "react";
import {
  View,
  Text,
  Button,
  TextInput
} from "react-native";

class SingUp extends PureComponent {
  constructor() {
    super();

    this.state = {
      login: "",
      password: ""
    }
  }

  _redirectTo(scene) {
      this.props.navigation.navigate(scene)
    }

  render() {
    const { login, password } = this.state;
    return (
      <View style={{
        justifyContent: "center",
        flex: 1
      }}>
        <Text>Login</Text>
        <TextInput
          onChangeText={(login) => {
            this.setState({
              login: login
            })
          }}
          style={{backgroundColor: "green"}}
        />
        <Text>Password</Text>
        <TextInput
          onChangeText={(password) => {
            this.setState({
              password: password
            })
          }}
          style={{backgroundColor: "green"}}
        />
        <Button
          onPress={() => {
            this.props.singUp({
              login: login,
              password: password
            });
            this._redirectTo("CheckEmail");
          }}
          title="Sing Up"
        />
      </View>
    )
  }
}

export default SingUp;