import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  ActivityIndicator
} from "react-native";
import {
  LoginButton,
  AccessToken,
  GraphRequest,
  GraphRequestManager
} from "react-native-fbsdk";

class SingUp extends Component {
  constructor() {
    super()
    this.state = {
      email: "admin@zdenka.net",
      password: "admin",
    }
    this.requestManager = new GraphRequestManager()
  }
   

  _redirect = scene => {
    this.props.navigation.navigate(scene)
  }

  _responseInfoCallback = (error, result) => {
    if (error) {
      alert("Error fetching data: " + error.toString());
    } else {
      console.log(result)
      this.props.singInFacebook({
        name: result.name,
        socialId: result.id,
        image: result.picture.data.url
      }, this._redirect.bind())  
    }
  }

  render() {
    return (
      <View style={{
        justifyContent: "space-between",
        flex: 1
      }}>
        <View/>
        <View>
          <Text style={{fontSize: 20, padding: 10}}>
            Email
          </Text>
          <TextInput
            style={{backgroundColor: "#fff", fontSize: 20, height: 43 }}
            value={this.state.email} 
            onChangeText={email => this.setState({ email: email })}
          />
          <Text style={{fontSize: 20, padding: 10}}>Password</Text>
          <TextInput
            style={{backgroundColor: "#fff", fontSize: 20, height: 43 }}
            value={this.state.password} 
            onChangeText={password => this.setState({ password: password })}
          />
          <View style={{height: 50}}/>
            <LoginButton
              readPermissions={["public_profile"]}
              onLoginFinished={
                (error, result) => {
                  if (error) {
                    alert("login has error: " + result.error);
                  } else if (result.isCancelled) {
                    alert("login is cancelled.");
                  } else {
                    AccessToken.getCurrentAccessToken().then(
                      (data) => {
                        const infoRequest = new GraphRequest(
                          "/me?fields=name,picture",
                          null,
                          this._responseInfoCallback
                        );
                        // Start the graph request.
                        new GraphRequestManager().addRequest(infoRequest).start();
                      }
                    )
                  }
                }
              }
              onLogoutFinished={() => alert("logout.")}
            />
          </View>
          { !this.props.user.loading ?
          <Button
            onPress={() => this.props.singIn(this.state, this._redirect.bind())}
            title="Sing In"
          /> :  <ActivityIndicator size="large" color="#0000ff" />
          }
      </View>
    )
  }
}

export default SingUp;
