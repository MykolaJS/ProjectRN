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
      email: "",
      password: "",
      name: ""
    }
  }

  _redirectTo(scene) {
      this.props.navigation.navigate(scene)
    }

  render() {
    const { email, password, name } = this.state;
    return (
      <View style={{
        justifyContent: "center",
        flex: 1
      }}>
        <Text>Name</Text>
        <TextInput
          onChangeText={name => {
            this.setState({
              name: name
            })
          }}
        />
        <Text>email</Text>
        <TextInput
          onChangeText={email => {
            this.setState({
              email: email
            })
          }} 
        />
        <Text>Password</Text>
        <TextInput
          onChangeText={password => {
            this.setState({
              password: password
            })
          }}
        />
        <Button
          onPress={() => {
            this.props.singUp({
              email: email,
              password: password,
              name: name
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