import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  TextInput
} from "react-native";

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
        <Button
          onPress={() => this.props.singIn(this.state, this._redirect.bind())}
          title="Sing In"
        />
      </View>
    )
  }
}

export default SingUp;