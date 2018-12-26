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

  _redirectTo = (scene) => {
      this.props.navigation.navigate(scene)
    }

  render() {
    const { email, password, name } = this.state;
    return (
      <View style={{
        justifyContent: "space-between",
        flex: 1
      }}>
        <View/>
        <View style={{justifyContent: "center"}}>
          <Text style={{fontSize: 20, padding: 10}}>Name</Text>
          <TextInput
            style={{backgroundColor: "#fff", fontSize: 20, height: 43}}
            onChangeText={name => {
              this.setState({
                name: name
              })
            }}
          />
          <Text style={{fontSize: 20, padding: 10}}>Email</Text>
          <TextInput
            style={{backgroundColor: "#fff", fontSize: 20, height: 43 }}
            onChangeText={email => {
              this.setState({
                email: email
              })
            }} 
          />
          <Text style={{fontSize: 20, padding: 10}}>Password</Text>
          <TextInput
            style={{backgroundColor: "#fff", fontSize: 20, height: 43}}
            onChangeText={password => {
              this.setState({
                password: password
              })
            }}
          />
        </View>
        <Button
          onPress={() => {
            if (password.length >= 8 && email.length >= 6) {
                this.props.singUp({
                email: email,
                password: password,
                name: name
              }, this._redirectTo.bind());
            } else {
              alert("Enter the correct data for your email or password")
            }
          }}
          title="Sing Up"
        />
      </View>
    )
  }
}

export default SingUp;